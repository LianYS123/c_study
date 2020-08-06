class Animate {
    startTime = 0;
    startPos = 0;
    endPos = 0;
    propertyName = null;
    easing = null;
    duration = 0;
    constructor(dom){
        this.dom = dom;
    }
    start(propertyName, endPos, duration, easing){
        this.startTime = Date.now();
        this.propertyName = propertyName;
        this.startPos = this.dom.getBoundingClientRect()[propertyName];
        this.endPos = endPos;
        this.duration = duration;
        this.easing = easing;
        const next = () => {
            if(this.step() === false){
                return;
            }
            requestAnimationFrame(next);
        };
        next();
    }
    step(){
        const t = Date.now();
        if(t >= this.startTime + this.duration) {
            this.update(this.endPos);
            return false;
        }
        const pos = this.easing(t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration);
        this.update(pos);
    }
    update(pos){
        this.dom.style[this.propertyName] = pos + 'px';
    }   
}