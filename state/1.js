//状态模式
class State {
    buttonPressed(){
        //至少在运行时回报错
        throw new Error('子类必须实现此方法')
    }
}

class StrongState extends State {
    constructor(light){
        this.light = light;
    }
    buttonPressed(){
        this.light.setState(this.light.offState);
    }
}
class WeakState extends State {
    constructor(light){
        this.light = light;
    }
    buttonPressed(){
        this.light.setState(this.light.strongState);
    }
}
class OffState extends State {
    constructor(light){
        this.light = light;
    }
    buttonPressed(){
        this.light.setState(this.light.weakState);
    }
}

class Light {
    offState = new OffState(this);
    weakState = new WeakState(this);
    strongState = new StrongState(this);
    currentState = new OffState(this);
    setState(state){
        this.currentState = state;
    }
}