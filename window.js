function wwindow() {
    const db = {
        py: /#.*[\r\n]/g,
        asm: /;.*[\r\n]/g,
        basic: /REM.*[\r\n]/g,
        ada: /(--[^#]+[\n|\r])/g,
        html: /<!--(.|\s)*?-->/g,
        lhs: /(>[^#].+[\n|\r])/g,
        apl: /(⍝[^#].+[\n|\r])/g,
        hs: /(--[^#].+[\n|\r])|({-[^#]+-})/g,
        pascal: /(\(\*[^#]*\*\))|(\{[^#]*\})/g,
        main: /(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(\/\/.*)/g,
        mat: /(%[^#].+)|(\%\{([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\%+\})/g,
        applescript: /(--[^#].+[\n|\r])|(#[^#].+[\n\r])|(\(\*[^#]+\*\))/g,
        sql: /(--.*[\r\n])|((\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(\/\/.*))/g
    }

    var main = e => new Promise((l, r) => {
        l(e.replaceAll(db.main, ""))
    });

    var modules = {
        html: e => new Promise((l, r) => {
            l(e.replaceAll(db.html, ""))
        }),
        basic: e => new Promise((l, r) => {
            l(e.replaceAll(db.basic, ""))
        }),
        py: e => new Promise((l, r) => {
            l(e.replaceAll(db.py, ""))
        }),
        asm: e => new Promise((l, r) => {
            l(e.replaceAll(db.asm, ""))
        }),
        sql: e => new Promise((l, r) => {
            l(e.replaceAll(db.sql, ""))
        }),
        ada: e => new Promise((l, r) => {
            l(e.replaceAll(db.ada, ""))
        }),
        apl: e => new Promise((l, r) => {
            l(e.replaceAll(db.apl, ""))
        }),
        applescript: e => new Promise((l, r) => {
            l(e.replaceAll(db.applescript, ""));
        }),
        hs: e => new Promise((l, r) => {
            l(e.replaceAll(db.hs, ""))
        }),
        lhs: e => new Promise((l, r) => {
            l(e.replaceAll(db.lhs, ""))
        }),
        mat: e => new Promise((l, r) => {
            l(e.replaceAll(db.mat, ''))
        }),
        pascal: e => new Promise((l, r) => {
            l(e.replaceAll(db.pascal, ''));
        }),
        c: e => main(e),
        gy: e => main(e),
        go: e => main(e),
        cs: e => main(e),
        ts: e => main(e),
        js: e => main(e),
        gvy: e => main(e),
        gsh: e => main(e),
        css: e => main(e),
        php: e => main(e),
        css: e => main(e),
        php: e => main(e),
        cpp: e => main(e),
        java: e => main(e),
        m: e => this.mat(e),
        groovy: e => main(e),
        htm: e => this.html(e),
        p: e => this.pascal(e),
        less: e => this.css(e),
        pl: e => this.pascal(e),
        pas: e => this.pascal(e),
        scpt: e => this.applescript(e),
        scptd: e => this.applescript(e)
    };

    class Cleaner {
        constructor(text, lang) {
            this.txt = text.replaceAll('\r', '');
            lang = lang.split('');
            lang.shift();
            this.lang = lang.join('');
        }
        async run() {
            var fun = modules[this.lang];
            if (!fun) throw new Error("we don't support it")
            this.txt = await modules[this.lang](this.txt);
        }
    };

    window.Commentclener = (code, lang, log = false) => {
        return new Promise((l, r) => {
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
}

if (typeof window === 'undefined') {
    require('./node')(require('process').argv[2])
} else {
    wwindow();
}