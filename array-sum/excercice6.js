const exercice6modue=require('./excercice6modue')
var dossier = process.argv[2];
var extension =process.argv[3]
exercice6modue(dossier,extension,function(err,files){
    if (err){console.log(err)}
    for (i=0;i<files.length;i++){
        console.log(files[i])
    }

})