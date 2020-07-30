
const person = {
    stack(){
        console.log('攻击')
    },
    defense(){
        console.log('防御');
    },
    jump(){
        console.log('跳跃');
    },
    crouch(){
        console.log('蹲下');
    }
}

const commands = {
    w: 'stack',
    a: 'defense',
    s: 'jump',
    d: 'crouch'
}

const makeCommand = (receiver, state) => {
    return {
        excute(){
            receiver[state] && receiver[state]();
        }
    }
}

const commandStack = [];

document.body.addEventListener('keydown', ev => {
    const command = makeCommand(person, commands[ev.key]);
    commands[ev.key] && commandStack.push(command);
    command.excute();
    if(ev.key === 'r'){
        commandStack.forEach(command => command.excute());
    }
})

