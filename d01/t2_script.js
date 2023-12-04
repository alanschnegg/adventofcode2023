const fs = require('fs');

const lines = fs.readFileSync('./t2_puzzle.txt', 'utf-8').split("\n")

const digits = [
    {pattern: "one", replacement: 1},
    {pattern: "two", replacement: 2},
    {pattern: "three", replacement: 3},
    {pattern: "four", replacement: 4},
    {pattern: "five", replacement: 5},
    {pattern: "six", replacement: 6},
    {pattern: "seven", replacement: 7},
    {pattern: "eight", replacement: 8},
    {pattern: "nine", replacement: 9}
]

const getFirstDigit = (line, reverse = false) => {
    const incrementation = reverse ? -1 : 1
    const append = reverse ? (str, char) => char + str : (str, char) => str + char
    const condition = reverse ? (index, end) => index >= 0 : (index, end) => index < end
    let tmp = ""

    for (let i = reverse ? line.length - 1 : 0; condition(i, line.length); i += incrementation) {
        const char = line.charAt(i)
        if (!isNaN(char)) return Number(char)

        tmp = append(tmp, char)
        const test = digits.find(digit => tmp.includes(digit.pattern))
        if (test) return test.replacement
    }
    return 0
}

const numbers = lines.map(line => {
    const first = getFirstDigit(line)
    const last = getFirstDigit(line, true)
    return first * 10 + last
})

const result = numbers.reduce((a, v) => a + v, 0)

console.log(result)