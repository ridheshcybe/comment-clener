module.exports =  {
    js:(data)=>{
        return new Promise((res, rej)=>{
            f = f.replaceAll(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(\/\/.*)/g, '');
    
            res(f);
        })
    },
    css: (data)=>{
        return new Promise((res, rej)=>{
            var f = f.replaceAll(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(\/\/.*)/g, '');
    
            res(f);
        })
    },
    html: (data)=>{
        return new Promise((res,rej)=>{
            var processi = data.replaceAll(/<!--(.|\s)*?-->/g, '');
            res(processi);
        })
    },
    htm: (data) => html(data),
    basic: (data)=>{
        return new Promise((res,rej)=>{
            var processi = data.replaceAll(/REM.*[\r\n]/g, '');
            res(processi)
        })
    }
};