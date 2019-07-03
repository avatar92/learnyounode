var fs = require('fs');
var path=require('path')

var dossier = process.argv[2];
var regularexp = RegExp('.' + process.argv[3]);//methode 1
var extension = '.'+process.argv[3]//methode 2 

file = fs.readdir(dossier, function(err, files) {
        
        for (i = 0; i < files.length; i++) {
            //  if (regularexp.test(files[i])) { // methode 1
            //      console.log(files[i]);
            //  }
            if (path.extname(files[i])===extension){ //methode 2 
                console.log(files[i])
            }
        }
    
    }
);