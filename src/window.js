if (typeof window === 'undefined') {
    if (module.parent) return module.exports = require('./node');
    require('./node')(require('process').argv[2], reqire('path').extname(require('process').argv[2]))
} else {
    import Cleaner from './modules.js';
    window.Commentclener = (code, lang, log = false) => new Promise((l, r) => {
        var cleaner = new Cleaner(code, lang);
        cleaner.run().then((e) => {
            var {
                txt
            } = e;

            if (log) {
                console.log(txt)
            };

            l(e);
        })
    });

}