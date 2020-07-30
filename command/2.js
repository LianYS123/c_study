
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
    return {
        execute(){
            receiver.refresh();
        }
    }
}

const AddCommand = function(receiver){
    return {
        execute(){
            receiver.add();
        }
    }
}

const DeleteCommand = function(receiver){
    return {
        execute(){
            receiver.del();
        }
    }
}

setCommand(btn1, RefreshMenuCommand(MenuBar))
setCommand(btn2, AddCommand(SubMenu))
setCommand(btn3, DeleteCommand(SubMenu))

