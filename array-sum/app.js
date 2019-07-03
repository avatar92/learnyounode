var b=0
for (let i=2;i<process.argv.length;i++){
    b=Number(process.argv[i])+b
}
console.log(process.argv)