//责任链模式
/* 
假设我们负责一个售卖手机的电商网站，经过分别交纳500元定金和200元定金的两轮预定后（订单已在此时生成），
现在已经到了正式购买的阶段。公司针对支付过定金的用户有一定的优惠政策。
在正式购买后，已经支付过500元定金的用户会收到100元的商城优惠券，200元定金的用户可以收到50元的优惠券，
而之前没有支付定金的用户只能进入普通购买模式，也就是没有优惠券，且在库存有限的情况下不一定保证能买到。
我们的订单页面是PHP吐出的模板，在页面加载之初，PHP会传递给页面几个字段。
    ❏ orderType：表示订单类型（定金用户或者普通购买用户）, code的值为1的时候是500元定金用户，为2的时候是200元定金用户，为3的时候是普通购买用户。
    ❏ pay：表示用户是否已经支付定金，值为true或者false，虽然用户已经下过500元定金的订单，但如果他一直没有支付定金，现在只能降级进入普通购买模式。
    ❏ stock：表示当前用于普通购买的手机库存数量，已经支付过500元或者200元定金的用户不受此限制。
*/

//这三个函数参数要相同
const order500 = (orderType, pay, stock) => {
    if(orderType === 1 && pay) {
        console.log('100优惠券')
    } else {
        return 'nextSuccessor'
    }
}

const order200 = (orderType, pay, stock) => {
    if(orderType === 2 && pay) {
        console.log('50优惠券')
    } else {
        return 'nextSuccessor'
    }
}

const orderNomal = (orderType, pay, stock) => {
    if(stock > 0) {
        console.log('普通购买');
    } else {
        console.log('没货了');
    }
}

class Chain {
    successor = null;
    constructor(fn){
        this.fn = fn;
    }
    setNextSuccessor(successor){
        return this.successor = successor;
    }
    passRequest(...args){
        if(this.fn(...args) === 'nextSuccessor') {
            return this.successor && this.successor.passRequest(...args);
        }
    }
    next(...args){
        this.successor && this.successor.passRequest(...args);
    }
}

// const chainOrder500 = new Chain(order500);
// const chainOrder200 = new Chain(order200);
// const chainOrderNomal = new Chain(orderNomal);

// chainOrder500.setNextSuccessor(chainOrder200).setNextSuccessor(chainOrderNomal);
// chainOrder500.passRequest(1, true, 500);
// chainOrder500.passRequest(1, false, 500);
// chainOrder500.passRequest(2, true, 500);
// chainOrder500.passRequest(3, true, 500);
// chainOrder500.passRequest(3, true, 0);


const chain = new Chain(function(){
    console.log('111')
    setTimeout(() => {
        this.next();
    }, 2000);
});
chain.setNextSuccessor(new Chain(() => console.log('hello world'))); //这个链条执行之后返回的是链条的最后一个

chain.passRequest();
