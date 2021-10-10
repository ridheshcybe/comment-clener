var Cleaner = require('../modules.js');

var run = (code, extension) => {
    if (!code) throw new Error('no code');
    var cleaner = new Cleaner(code, extension);
    cleaner.run().then(() => {
        console.log(cleaner.txt.toString())
    })
}

module.exports = run;