
const mult = (...args) => {
    return args.reduce((res, num) => res * num, 1);
}

const proxyMult = (() => {
    const cache = {};
    return (...args) => {
        const key = args.join(',');
        if(key in cache){
            return cache[key];
        } else {
            return cache[key] = mult(...args);
        }
    }
})()
const args = [1,2,5,4,9,3,2];

console.log(mult(...args))
console.log(proxyMult(...args))
console.log(proxyMult(...args))