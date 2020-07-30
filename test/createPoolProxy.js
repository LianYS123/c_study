const { delay } = require('./utils');
class ProxyPool {
  cache = [];
  flag = false;
  size = 0;
  constructor(limit, gap) {
    this.limit = limit;
    this.gap = gap;
  }
  setSize = (size) => {
    if (size <= this.size) {
      this.size = size;
      this.onSizeDecrease();
    } else {
      this.size = size;
    }
  };
  onSizeDecrease = () => {
    if (!this.cache.length) {
      if (!this.size) {
        this.flag = false;
      }
      return;
    }
    if (this.size < this.limit) {
      const rest = this.limit - this.size;
      for (let i = 0; i < rest; i++) {
        this.start();
      }
    }
  };
  run = async () => {
    const { args, cb, fn } = this.cache.shift();
    await fn(...args)
      .then(cb.resolve)
      .catch(cb.reject);
  };
  start = async () => {
    if (this.cache.length) {
      this.setSize(this.size + 1);
      await this.run();
      this.setSize(this.size - 1);
    }
  };
  delayStart = async () => {
    if (this.cache.length) {
      await this.run();
      await delay(this.gap);
      this.delayStart();
    }
  };
  addMethod = (fn) => (...args) => {
    return new Promise((resolve, reject) => {
      this.cache.push({
        fn,
        args,
        cb: {
          resolve,
          reject,
        },
      });
      if (!this.flag) {
        this.flag = true;
        if (this.gap) {
          this.delayStart();
          return;
        }
        this.setSize(this.size);
      }
    });
  };
}
const createPoolProxy = (limit = 10, gap = 0) => {
  const pool = new ProxyPool(limit, gap);
  return {
    addMethod: pool.addMethod,
    setLimit: (limit) => (pool.limit = limit),
    getLimit: () => pool.limit,
    setGap: (gap) => (pool.gap = gap),
    getGap: () => pool.gap,
    getSize: () => pool.size,
  };
};
module.exports = createPoolProxy;
