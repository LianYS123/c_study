//缓存工厂

const createProxyFactory = fn => {
    const cache = {};
    return (...args) => {
        const key = args.join(',');
        if(key in cache){
            return cache[key];
        } else {
            return cache[key] = fn(...args);
        }
    }
}

