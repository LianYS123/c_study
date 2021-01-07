type IdDisplay = {
  id: number;
  display: string;
};

const list: IdDisplay[] = [{ id: 1, display: 'dis' }];

import { a } from 'foo';

console.log(a);

// 内联类型注解：
let name: {
  first: string;
  second: string;
};

name = {
  first: 'aaa',
  second: 'bbb',
};
