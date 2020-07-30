const ball = document.querySelector("#ball");
const pos = document.querySelector("#pos");
const startBtn = document.querySelector("#start");
const undoBtn = document.querySelector("#undo");

//命令模式自己不执行具体操作，交给receiver执行：傻瓜式命令
const moveCommand = (receiver, pos) => {
  let oldPos = null;
  return {
    execute() {
      receiver.start("left", pos, 1000, Tween.Circ.easeInOut);
      oldPos = receiver.dom.getBoundingClientRect()[receiver.propertyName];
    },
    undo() {
      receiver.start("left", oldPos, 1000, Tween.Circ.easeInOut);
    },
  };
};

let command;

startBtn.addEventListener("click", function () {
  command = moveCommand(new Animate(ball), pos.value);
  command.execute(); //通过命令来执行操作
});
undoBtn.addEventListener("click", () => {
  command.undo();
});
