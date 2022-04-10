import Cleaner from './modules.js';

export function now(code, lang, log = false){
    return new Promise((r, j) => {
    var cleaner = new Cleaner(code, lang);
    cleaner.run().then((e) => {
        if (log) console.log(e.txt);
        r(e);
    })
})
};

export default now;