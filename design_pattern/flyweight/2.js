//对象池

const objPoolFactory = (createObjFn) => {
    const pool = [];
    return {
        create(...args){
            pool.length ? pool.shift() : createObjFn(...args);
        },
        recover(obj){
            pool.push(obj);
        }
    }
}

const iframeFactory = objPoolFactory((src) => {
    const iframe = document.createElement('iframe');
    iframe.onload = function(){
        iframe.onload = null;
        document.appendChild(iframe);
    }
    iframe.src = src;
    return iframe;
})