var main = e => new Promise((l, r) => {
    l(e.replaceAll(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(\/\/.*)/g, ""))
})


module.exports = {
    html: e => new Promise((l, r) => {
        l(e.replaceAll(/<!--(.|\s)*?-->/g, ""))
    }),
    basic: e => new Promise((l, r) => {
        l(e.replaceAll(/REM.*[\r\n]/g, ""))
    }),
    py: e => new Promise((l, r) => {
        l(e.replaceAll(/#.*[\r\n]/g, ""))
    }),
    asm: e => new Promise((l, r) => {
        l(e.replaceAll(/;.*[\r\n]/g, ""))
    }),
    sql: e => new Promise((l, r) => {
        l(e.replaceAll(/(--.*[\r\n])|((\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(\/\/.*))/g, ""))
    }),
    ada: e => new Promise((l, r) => {
        l(e.replaceAll(/(--[^#]+[\n|\r])/g, ""))
    }),
    apl: e => new Promise((l, r) => {
        l(e.replaceAll(/(⍝[^#].+[\n|\r])/g, ""))
    }),
    scpt: e => new Promise((l, r) => {
        l(e.replaceAll(/(--[^#].+[\n|\r])|(#[^#].+[\n\r])|(\(\*[^#]+\*\))/g, ""));
    }),
    scptd: e => new Promise((l, r) => {
        l(e.replaceAll(/(--[^#].+[\n|\r])|(#[^#].+[\n\r])|(\(\*[^#]+\*\))/g, ""));
    }),
    applescript: e => new Promise((l, r) => {
        l(e.replaceAll(/(--[^#].+[\n|\r])|(#[^#].+[\n\r])|(\(\*[^#]+\*\))/g, ""));
    }),
    hs: e => new Promise((l, r) => {
        l(e.replaceAll(/(--[^#].+[\n|\r])|({-[^#]+-})/g, ""))
    }),
    lhs: e => new Promise((l, r) => {
        l(e.replaceAll(/(>[^#].+[\n|\r])/g, ""))
    }),
    mat: e => new Promise((l, r) => {
        l(e.replaceAll(/(%[^#].+)|(\%\{([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\%+\})/g, ''))
    }),
    pascal: e => new Promise((l, r) => {
        l(e.replaceAll(/(\(\*[^#]*\*\))|(\{[^#]*\})/g, ''));
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
    pas: e => this.pascal(e)
};