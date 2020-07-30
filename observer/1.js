const saleOffice = {};
const saleList = [];

saleOffice.listen = function(fn) {
    saleList.push(fn);
}
saleOffice.trigger = function(){
    saleList.forEach(fn => fn());
}

saleOffice.listen(() => {
    console.log('小王要买房');
})
saleOffice.listen(() => {
    console.log('小明要买房');
})

saleOffice.trigger();