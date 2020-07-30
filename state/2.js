// js版的状态模式

//function state manager?
const FSM = {
    off(){
        this.setState(this.onState)
    },
    on(){
        this.setState(this.offState)
    }
}

//使用此方法来创建一个状态对象
const delegate = (client, delegation) => ({
    buttonWasPressed(...args){
        delegation.apply(client, args)
    }
})

class Light { 
    offState = delegate(this, FSM.off);
    onState = delegate(this, FSM.on);
    
    constructor(){
        this.currentState = this.offState;
    }
    setState(state){
        this.currentState = state;
    }
}
