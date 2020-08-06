const createPoolProxy = require('./createPoolProxy');
const { addMethod } = createPoolProxy();
const { delay, calcTime } = require('./utils');
const _delayMessage = async (message) => {
  await delay(2000 * Math.random());
  if (Math.random() > 0.5) {
    throw 'err:' + message;
  }
  return message;
};
const delayMessage = addMethod(_delayMessage);
const delayMessage2 = createPoolProxy()(_delayMessage);
const testFn = async () => {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(delayMessage(i).then(console.log).catch(console.error));
    arr.push(delayMessage2(i).then(console.log).catch(console.error));
  }
  const res = await Promise.all(arr);
  return res;
};
calcTime(testFn).then(console.log);
