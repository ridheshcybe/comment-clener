var fs = require('fs');
var path = require('path');
var Cleaner = require('./class');

var run = (path) => {
    if (!path) throw new Error('no path');
    if (!fs.existsSync(path)) throw new Error('file no exists');
    var cleaner = new Cleaner(fs.readFileSync(path, 'utf-8'), require('path').extname(path));
    cleaner.run().then(() => {
        console.log(cleaner.txt.toString())
    })
}

module.exports = run;