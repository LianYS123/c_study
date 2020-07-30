
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const setCommand = (button, command) => {
    button.onclick = function(){
        command.execute();
    }
}

const MenuBar = {
    refresh(){
        console.log('刷新菜单');
    }
}
const SubMenu = {
    add(){
        console.log('添加')
    },
    del(){
        console.log('删除');
    }
}

const RefreshMenuCommand = function(receiver){
    this.receiver = receiver;
}
RefreshMenuCommand.prototype.execute = function(){
    this.receiver.refresh();
}
const AddCommand = function(receiver){
    this.receiver = receiver;
}
AddCommand.prototype.execute = function(){
    this.receiver.add();
}
const DeleteCommand = function(receiver){
    this.receiver = receiver;
}
DeleteCommand.prototype.execute = function(){
    this.receiver.del();
}


setCommand(btn1, new RefreshMenuCommand(MenuBar))
setCommand(btn2, new AddCommand(SubMenu))
setCommand(btn3, new DeleteCommand(SubMenu))

