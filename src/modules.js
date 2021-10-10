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

class Cleaner{
    constructor(text, extension) {
        this.txt = text.replaceAll('\r', '');
        this.extension = extension;
    }
    async run() {
        var fun = this.modules[this.extension];
        if (!fun) throw new Error("we don't support it");
        this.txt = await fun(this.txt);
    }
};

Cleaner.prototype.modules = {
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
    groovy: e => main(e),
    m: e => Cleaner.prototype.modules.mat(e),
    sass: e=> Cleaner.prototype.modules.css(e),
    htm: e => Cleaner.prototype.modules.html(e),
    p: e => Cleaner.prototype.modules.pascal(e),
    less: e => Cleaner.prototype.modules.css(e),
    swift: e => Cleaner.prototype.modules.css(e),
    pl: e => Cleaner.prototype.modules.pascal(e),
    pas: e => Cleaner.prototype.modules.pascal(e),
    scpt: e => Cleaner.prototype.modules.applescript(e),
    scptd: e => Cleaner.prototype.modules.applescript(e),
};

if(typeof window === 'undefined'){
    module.exports = Cleaner;
} else {
    export default Cleaner;
}