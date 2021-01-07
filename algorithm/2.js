/*
给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const obj = {};
  let majorNum;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let count = obj[num];
    obj[num] = typeof count === 'undefined' ? 1 : count + 1;
    if (obj[num] > nums.length / 2) {
      majorNum = num;
      break;
    }
  }
  console.log(obj);
  return majorNum;
};

const res = majorityElement([3, 2, 3]);
console.log(res);
