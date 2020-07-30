//代理模式

function Flower(){};

const xiaoming = {
    sendFlower(target){
        const flower = new Flower();
        target.receiveFlower(flower);
    }
}

var B = {
    receiveFlower(flower){
        A.listenGoodMood(() => {
            A.receiveFlower(flower);
        })
    }
}

var A = {
    listenGoodMood(fn){
        setTimeout(fn, 1000);
    },
    receiveFlower(flower){
        console.log('收到花', flower)
    }
}
xiaoming.sendFlower(B)