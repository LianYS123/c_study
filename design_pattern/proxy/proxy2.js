const MyImage = (() => {
    let img = new Image();
    document.body.appendChild(img);
    return {
        setSrc: src => {
            img.src = src;
        }
    }
})()
const ImageProxy = (() => {
    const img = new Image();
    MyImage.setSrc('./loading.gif')
    img.onload = function(){
        MyImage.setSrc(img.src);
    }
    return {
        setSrc: src => {
            img.src = src;
        }
    }
})();

ImageProxy.setSrc('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594644395299&di=29b764a950f1a2d05fb0c2ca83ce929a&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg')
