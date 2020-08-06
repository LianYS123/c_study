const MacroCommand = () => ({
    commandsList: [],
    add(...commands){
        this.commandsList.push(...commands);
    },
    execute(){
        this.commandsList.forEach(command => command.execute());
    }
})

const openACCommand = {
    execute(){
        console.log('打开空调')
    }
}

const openSoundCommand = {
    execute(){
        console.log('打开声音');
    }
}

const openTVCommand = {
    execute(){
        console.log('打开电视')
    }
}

const closeDoorCommand = {
    execute(){
        console.log('关门');
    }
}

const openPCCommand = {
    execute(){
        console.log('打开电脑');
    }
}

const loginQQCommand = {
    execute(){
        console.log('登录qq');
    }
}


const macroCommand1 = MacroCommand();
macroCommand1.add(openACCommand, openSoundCommand, openTVCommand);
const macroCommand2 = MacroCommand();
macroCommand2.add(closeDoorCommand, openPCCommand, loginQQCommand);

const macroCommand = MacroCommand();
macroCommand.add(macroCommand1, macroCommand2);
macroCommand.execute();