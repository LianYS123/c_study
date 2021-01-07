### 声明空间
在TypeScript中，存在两种声明空间：类型声明空间和变量声明空间
类型声明空间：如interface、type、class定义的内容，  可以作为类型注解使用
变量声明空间：let，const，class声明的内容          可以作为变量使用
class声明的内容即存在于类型声明空间, 也存在于变量声明空间


### 模块
1. 全局模块
在默认情况下，当你开始在一个新的TypeScript文件中写下代码时，它处于全局命名空间中。

2. 文件模块
文件模块也被称为外部模块。如果在TypeScript文件的根级别位置含有import或export，那么它会在这个文件中创建一个本地的作用域

从带有外部模块的TypeScript文件中，生成什么样的JavaScript文件，是由编译选项module决定的。


### 类型

与接口不同，你可以为任意的类型注解提供类型别名，这在联合类型和交叉类型中比较实用

1. 内联类型

```ts
const name: {
    first: string,
    second: string
} = {
    first: '',
    second: ''
}
```

2. 联合类型、交叉类型
```ts
type T1 = string | number; //联合类型
type T2 = T & U;  //交叉类型，T2拥有T和U的所有属性
```

3. 类型别名
```typescript
type T = null | undefined;
```
与interface的区别
如果你需要使用类型注解的层次结构，请使用接口。它能使用implements和extends。

### 枚举
```ts
enum Color = {
    red,  //1
    blue, //2
    green //3
}
```

常量枚举
```ts
const enum Color = {
    red,
    green,
    blue
}
```

静态方法
你可以使用enum+namespace的声明方式向枚举类型添加静态方法
```ts
enum Color = {
    red,
    green,
    blue
}
namespace Color {
    export const fn = () => {

    }
}

Color.fn();

```


函数类型声明：

```ts

type Fn = {
    (a: number): number //注意括号
}

type Fn = (a: number) => number

```

你可以使用类型别名或接口来表示一个可被调用的类型注解。

```ts
interface Fn {
    (): string;
}
```

类型断言：
类型断言之所以不被称为“类型转换”，是因为转换通常意味着某种运行时的支持。但是，类型断言纯粹是一个编译时语法，同时，它也为编译器提供了分析代码的方法。
```ts
interface Foo = {
    a: number
}
const obj = {} as Foo;
obj.a = 1;
```

一个类型能够包含索引签名，以明确表明可以使用额外的属性。
```ts
const a: {
    foo: number,
    [x: string]: any
}
```

使用自定义的类型保护
你可以创建用户自定义的类型保护函数，这只是一个返回值为类似于someArgumentName is SomeType的函数

```ts
interface Foo {
    x: number
}

interface Bar {
    y: number
}

const isFoo = (arg: Foo | Bar): arg is Foo {
    return (arg as Foo).x !== undefined;
}

if(isFoo(foo)) {
    //ts会有类型提示
}

```
字面类型变量：
你可以将一个字符串字面量作为一个类型来使用。
```ts
let bar: 'hello';
bar = 'aaa'; //报错

let foo: 'a' | 'b';
foo = 'c' //报错
```

ts的向上转型其实不是类型匹配，而是解构匹配
TypeScript对象是一种结构化的类型，这意味着只要结构匹配，名称也就无关紧要了。
```ts
interface Point {
    x: number;
    y: number;
}
type Point2D = {
    x: number,
    y: number
}

const p: Point;
const p1: Point2D;
p = p1; //可以

```

索引签名：

```ts
const foo: {
    [index: string]: { //索引签名，对象中所有的内容必须符合{key: {message: 'any string'}} 解构
        message: string
    }
} = {}

```
当你声明一个索引签名时，所有明确的成员都必须符合索引签名。
```ts
interface Foo {
    [key: string]: number;
    a: number; //正确
    b: string; //错误
}
```

通过使用映射类型，索引签名可以要求索引字符串是字符串联合类型中的一员，如下所示。
```ts
type Index = 'a' | 'b' | 'c';
type FromIndex = {[key in Index]? : string}
```

复制类型和值
```ts
class Foo {}
const Bar = Foo; //只能将Bar添加到变量声明空间
const foo: Bar //报错

namespace importing {
    export class Foo{}
}
import Bar from importing.Foo;
let bar: Bar;//可以
```


### react jsx
一个HTML标签foo被标记为JSX.IntrinsicElements.foo类型。在我们已经安装的文件react-jsx.d.ts中，已经定义了所有主要标签的类型

1. 函数组件
```tsx
type Props = {
    name: string
}
const Comp: React.FunctionComponent<Props> = props => {}
```

2. 类组件
```tsx
class Comp: React.Component<Props, State> {}
```

3. 组件实例
```tsx
const ele: React.ReactElement<Comp> = <Comp />;
```

4. 泛型组件
```tsx
type SelectProps<T> = {
    items: T[]
}
class Select<T> extends React.Component<SelectProps<T>, {}>{}

render(){
    return <Select<string> items={['a', 'b', 'c']} />
}

```

5. 泛型函数

```tsx
function foo<T>(T t): T {
    return t;
}

const foo = <T extends {}>(T: t) => {  //箭头函数必须使用extends避免歧义
    return t;
}
```