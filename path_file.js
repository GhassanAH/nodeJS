
const file_path = require("path")
console.log(file_path.sep)

const file_path2 = file_path.join("content","subfolder","text.txt")
console.log(file_path2)

const base = file_path.basename(file_path2)
console.log(base)

const absoulte = file_path.resolve(__dirname,"content","subfolder","text.txt")
console.log(absoulte)