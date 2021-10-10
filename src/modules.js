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

var main = async (e) => e.replaceAll(db.main, "");

class Cleaner {
    constructor(txt, ext) {
        this.txt = txt.replaceAll('\r', '');
        this.extension = ext;
    }
    async run() {
        var fun = this.modules[this.extension];
        if (!fun) throw new Error("we don't support it");
        this.txt = await fun(this.txt);
    }
};

Cleaner.prototype.modules = {
    c: a => main(a),
    gy: a => main(a),
    go: a => main(a),
    cs: a => main(a),
    ts: a => main(a),
    js: a => main(a),
    gvy: a => main(a),
    gsh: a => main(a),
    css: a => main(a),
    php: a => main(a),
    css: a => main(a),
    php: a => main(a),
    cpp: a => main(a),
    java: a => main(a),
    groovy: a => main(a),
    hs: async a => a.replaceAll(db.hs, ""),
    py: async a => a.replaceAll(db.py, ""),
    lhs: async a => a.replaceAll(db.lhs, ""),
    mat: async a => a.replaceAll(db.mat, ""),
    asm: async a => a.replaceAll(db.asm, ""),
    sql: async a => a.replaceAll(db.sql, ""),
    ada: async a => a.replaceAll(db.ada, ""),
    apl: async a => a.replaceAll(db.apl, ""),
    m: a => Cleaner.prototype.modules.mat(a),
    html: async a => a.replaceAll(db.html, ""),
    sass: a => Cleaner.prototype.modules.css(a),
    htm: a => Cleaner.prototype.modules.html(a),
    p: a => Cleaner.prototype.modules.pascal(a),
    less: a => Cleaner.prototype.modules.css(a),
    swift: a => Cleaner.prototype.modules.css(a),
    pl: a => Cleaner.prototype.modules.pascal(a),
    basic: async a => a.replaceAll(db.basic, ""),
    pas: a => Cleaner.prototype.modules.pascal(a),
    pascal: async a => a.replaceAll(db.pascal, ""),
    scpt: a => Cleaner.prototype.modules.applescript(a),
    scptd: a => Cleaner.prototype.modules.applescript(a),
    applescript: async a => a.replaceAll(db.applescript, ""),
}

if (typeof window === 'undefined') {
    module.exports = Cleaner;
} else {
    export default Cleaner;
}