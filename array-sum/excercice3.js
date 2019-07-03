var fs=require('fs')

var text = process.argv[2]

var buf = fs.readFileSync(text)

console.log(buf.toString().split('\n').length-1)