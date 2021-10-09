var modules = require('./modules');

class Cleaner {
    constructor(text, lang) {
        this.txt = text.replaceAll('\r', '');
        lang = lang.split('');
        lang.shift();
        this.lang = lang.join('');
    }
    async run() {
        var fun = modules[this.lang];
        if(!fun) throw new Error("we don't support it")
        this.txt = await modules[this.lang](this.txt);
    }
};

module.exports = Cleaner;