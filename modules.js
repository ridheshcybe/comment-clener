function regexall(e) {
    return new Promise((l, r) => {
        l(e.replaceAll(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(\/\/.*)/g, ""))
    })
}
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
    ada: e => new Promise((l,r) => {
        l(e.replaceAll(/(--[^#]+[\n|\r])/g, ""))
    }),
    go: e => regexall(e),
    groovy: e => regexall(e),
    gvy: e => regexall(e),
    gy: e => regexall(e),
    gsh: e => regexall(e),
    java: e => regexall(e),
    css: e => regexall(e),
    php: e => regexall(e),
    ts: e => regexall(e),
    cpp: e => regexall(e),
    js: e => regexall(e),
    cs: e => regexall(e),
    c: e => regexall(e),
    htm: e => html(e)
};