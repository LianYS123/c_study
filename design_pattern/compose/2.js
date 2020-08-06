class Folder {
    parent = null;
    name = null;
    files = [];
    constructor(name){
        this.name = name;
    }
    add = (...file) => {
        file.forEach(f => f.parent = this);
        this.files.push(...file);
    }
    scan = () => {
        console.log('扫描文件夹:' + this.name);
        this.files.forEach(file => file.scan())
    }
    remove = () => {
        if(!this.parent){
            return;
        }
        this.parent.files = this.parent.files.filter(f => f !== this)
    }
}
class File {
    parent = null;
    name = null;
    files = [];
    constructor(name){
        this.name = name;
    }
    add = () => {
        throw new Error('文件类型不支持add操作');
    }
    scan = () => {
        console.log('扫描文件:' + this.name);
    }
    remove = () => {
        if(!this.parent){
            return;
        }
        this.parent.filter(f => f !== this)
    }
}

const qianduan = new Folder('前端')
const javascript = new Folder('js');
const css = new Folder('css');
const html = new Folder('html');
qianduan.add(javascript, css, html);

const houduan = new Folder('后端')
const sql = new Folder('sql');
const java = new Folder('java');
houduan.add(sql, java);

const root = new Folder('root');
root.add(qianduan, houduan);

const book1 = new File('javascript高级程序设计');
const book2 = new File('javascript语言精髓');
javascript.add(book1, book2);

const book3 = new File('css权威指南');
css.add(book3);

const book4 = new File('html权威指南');
html.add(book4);

const book5 = new File('高性能mysql');
const book7 = new File('mysql必知必会');
sql.add(book5, book7);

const book6 = new File('java编程思想');
java.add(book6);

const book8 = new File('深入浅出node.js');
javascript.add(book8);

root.scan();
console.log('-'.repeat(100));
houduan.remove();
root.scan();