//发布订阅模式的通用实现
const event = {
    clientList: {},
    trigger(key, ev){
        this.clientList[key] && this.clientList[key].forEach(fn => fn(ev))
    },
    listen(key, fn){
        if(!(key in this.clientList)){
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn);
    },
    remove(key, fn){
        const fns = this.clientList[key];
        if(fns) {
            if(fn){
                for(let i = fns.length - 1; i >= 0; i--){
                    fns[i] === fn && fns.splice(i, 1);
                }
            } else {
                fns.length = [];
            }
        }
    }
}

const installEvent = (obj) => {
    Object.assign(obj, event);
}

const saleOffice = {};
installEvent(saleOffice);
const fn1 = ev => console.log('小明订阅了100的房子', ev);
const fn2 = ev => console.log('小红订阅了100的房子', ev)
saleOffice.listen('square100', fn1);
saleOffice.listen('square100', fn2);

saleOffice.trigger('square100', '100的房子100万');

console.log();
saleOffice.remove('square100', fn1);
saleOffice.trigger('square100', '100的房子100万');