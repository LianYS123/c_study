//通过函数实现类似curry的责任链

//after 返回一个函数，这个返回的函数是对原函数的增强，即在原函数执行之后填加额外的功能
Function.prototype.after = function(fn){
    const self = this;
    return function(...args){
        const res = self.call(this, ...args);
        if(res === 'nextSuccessor'){
            return fn.apply(this, args);
        }
        return res;
    }
}