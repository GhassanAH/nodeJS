const {readFileSync, writeFileSync} = require('fs')


const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first)
console.log(second)

writeFileSync(
    './content/result.txt',
    'My name is GhASSAN and here is the result ',
    {flag:'a'}
)