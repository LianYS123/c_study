//模板方法模式 函数式实现

const Beverage = ({
  brew = () => {
    throw new Error("饮料必须实现brew");
  },
  pourInCup = () => {
    throw new Error("饮料必须实现pourInCup");
  },
  addCondiments = () => {
    throw new Error("饮料必须实现addCondiments");
  },
}) => {
  return class {
    boilWater() {
      console.log("烧水!!!");
    }
    brew = brew.bind(this);
    pourInCup = pourInCup.bind(this);
    addCondiments = addCondiments.bind(this);
    init() {
      this.boilWater();
      this.brew();
      this.pourInCup();
      this.addCondiments();
    }
  };
};

const Coffee = Beverage({
  brew() {
    console.log("用水冲泡咖啡");
  },
  pourInCup() {
    console.log("把咖啡倒进杯子");
  },
  addCondiments() {
    console.log("加糖加牛奶");
  },
});

const Tea = Beverage({
  brew() {
    console.log("用水泡茶");
  },
  pourInCup() {
    console.log("把茶倒进杯子");
  },
  addCondiments() {
    console.log("加柠檬");
  },
});

const coffee = new Coffee();
coffee.init();
const tea = new Tea();
tea.init();
