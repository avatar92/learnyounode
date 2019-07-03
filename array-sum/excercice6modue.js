var fs = require('fs');
var path=require('path')

module.exports= function(dossier,ext ,callback) {
    var extension = "." + ext;
    fs.readdir(dossier, function(err, files) {
        tab = [];
        if (err) {
            callback(err);
        }
        for(let i=0;i<files.length;i++) {
            if (path.extname(files[i]) === extension) {
                tab.push(files[i])
            }
            }
        callback(null, tab);
    }
    )
}
    