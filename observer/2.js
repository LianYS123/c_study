// 平方米， 价格

const saleOffice = {};
const salesList = {};

saleOffice.listen = function(type, fn){
    if(!(type in salesList)){
        salesList[type] = [];
    }
    salesList[type].push(fn);
}

saleOffice.trigger = function(type, price){
    salesList[type] && salesList[type].forEach(fn => fn.call(saleOffice, price));
}

saleOffice.listen('square100', (price) => {
    console.log('100平米的房子' + price + '元');
})

saleOffice.trigger('square100', 10000);
saleOffice.trigger('square200', 20000);


