class Upload {
    constructor(uploadType){
        this.uploadType = uploadType;
    }
    delFile(id){
        //具体操作时才将外部数据加入到享元对象中，将享元对象暂时构造成实际的对象
        UploadManager.setExternalState(id, this);
        if(this.fileSize < 3000){
            return this.dom.parentNode.removeChild(this.dom);
        }
        if(confirm('确认删除？')){
            return this.dom.parentNode.removeChild(this.dom);
        }
    }
}

class UploadFactory {
    //共享对象存储的位置
    static createFlyWeightObj = {};
    static create(uploadType){
        //工厂方法创建共享对象
        if(UploadFactory.createFlyWeightObj[uploadType]){
            return UploadFactory.createFlyWeightObj[uploadType]
        }
        return UploadFactory.createFlyWeightObj[uploadType] = new Upload(uploadType);
    }
}

class UploadManager {
    //负责存储外部数据的对象，通过id与Upload对象对应
    static uploadDatabase = {};

    //外部数据存储，享元对象初始化
    static add(id, uploadType, fileName, fileSize){
        const flyWeightObj = UploadFactory.create(uploadType);
        const dom = document.createElement('div');
        dom.innerHTML = `${id} - ${fileName} - ${fileSize} - ${uploadType} <button class='delBtn'>del</button>`;
        dom.querySelector('.delBtn').addEventListener('click', () => {
            //具体实现交给享元对象自己实现
            flyWeightObj.delFile(id);
        })
        this.uploadDatabase[id] = {
            fileName, fileSize, dom
        }
    }
    //将外部数据加入Upload对象的方法
    static setExternalState(id, flyWeightObj){
        Object.assign(flyWeightObj, this.uploadDatabase[id]);
    }
}


