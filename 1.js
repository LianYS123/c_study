const forEach = (arr, process) => {
  for (let i = 0; i < arr.length; i++) {
    process(arr[i]);
  }
};
const map = (arr, process) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const item = process(arr[i]);
    res.push(item);
  }
  return res;
};
const filter = (arr, fil) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    fil(arr[i]) && result.push(arr[i]);
  }
  return result;
};
const reduce = (arr, process, initVal) => {
  let res = initVal;
  for (let i = 0; i < arr.length; i++) {
    res = process(res, arr[i]);
  }
  return res;
};
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
const sort = (arr, sorter) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (sorter(arr[i], arr[j]) > 0) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
};
// const arr = [1, 2, 3];

const arr = [7, 9, 3, 5, 8, 2, 0, 5, 7, 5, 5, 6, 4];

// forEach(arr, console.log);
// console.log(map(arr, item => item * item));
// console.log(filter(arr, item => item >= 2));
// console.log(reduce(arr, (sum, item) => sum + item, 0))
// console.log(sort(arr, (a, b) => a - b));

const flagSort = (arr, start, end, flag) => {
  for (let i = start, j = end; i < j; ) {
    if (arr[i] <= flag) {
      i++;
    } else {
      swap(arr, i, j);
      j--;
    }
  }
  return arr;
};
// console.log(flagSort(arr, 0, arr.length - 1, 5));

const partition = (arr, flag, start, end) => {
  if (start === end) return [start, end];
  let less = start - 1,
    more = end + 1;
  for (let i = start; i < more; ) {
    if (arr[i] < flag) {
      less++;
      swap(arr, less, i);
      i++;
    } else if (arr[i] > flag) {
      more--;
      swap(arr, i, more);
    } else {
      i++;
    }
  }
  return [less, more];
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  const [less, more] = partition(arr, arr[start], start, end);

  if (less < more) {
    if (less > start) {
      quickSort(arr, start, less);
    }
    if (more < end) {
      quickSort(arr, more, end);
    }
  }
  return arr;
};
const merge = (arr1, arr2) => {
  const result = [];
  let i, j;
  for(i = 0, j = 0; arr1[i] && arr2[j];){
    if(arr1[i] <= arr2[j]){
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while(arr1[i]){
    result.push(arr1[i]);
    i++;
  }
  while(arr2[j]){
    result.push(arr2[j]);
    j++;
  }
  return result;
}

let x = 0;
const mergeSort = (arr, l = 0, r = arr.length - 1) => {
  if(l > r){
    throw `l = ${l} r = ${r} error`;
  }
  if(l === r) {
    return [arr[l]]
  }
  console.log(++x, l, r); 
  const m = (l + r) >> 1;
  const arr1 = mergeSort(arr, l, m);
  const arr2 = mergeSort(arr, m + 1, r);
  return merge(arr1, arr2);
};

// console.log(partition(arr, arr[0], 0, arr.length - 1));
// console.log(arr);

// var merge = function (nums1 = [], m, nums2 = [], n) {
//   for (let i = 0, j = 0; i < m && j < n; ) {
//     if (nums1[i] < nums2[i]) {
//       i++;
//     } else {
//       nums1.splice(i, 0, nums2[j]);
//       i += 2;
//       j++;
//     }
//   }
// };

// console.log(quickSort(arr));
console.log(mergeSort(arr));
