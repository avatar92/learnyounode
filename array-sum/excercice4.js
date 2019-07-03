var fs=require('fs')

// var text = process.argv[2]

// var buf = fs.readFileSync(text)

// console.log(buf.toString().split('\n').length-1)
fs.readFile(process.argv[2], function (err, data) {
    if (err) throw err;
    console.log(data.toString().split('\n').length-1);
  });
  