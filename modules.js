module.exports = {
    js: (data) => {
        return new Promise((res, rej) => {
            res(data.replaceAll(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(\/\/.*)/g, ''));
        })
    },
    css: (data) => {
        return new Promise((res, r) => {
            res(data.replaceAll(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(\/\/.*)/g, ''););
        })
    },
    html: (data) => {
            res(data.replaceAll(/<!--(.|\s)*?-->/g, ''));
        })
    },
    htm: (data) => html(data),
    basic: (data) => {
        return new Promise((res, rej) => {
            var processi = 
            res(data.replaceAll(/REM.*[\r\n]/g, ''));
        })
    },
    py: (data) => {
        return new Promise((res, rej) => {
            res(data.replaceAll(/#.*[\r\n]/g, ''))
        })
    },
    java: (data) => {

    };
};