from time import time
from random import random


def swap(arr, i, j):
    tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp


def partition(arr, flag, start, end):
    if (start == end):
        return [start, end]
    less = start - 1
    more = end + 1
    i = start
    while (i < more):
        if (arr[i] < flag):
            less += 1
            swap(arr, less, i)
            i += 1
        elif (arr[i] > flag):
            more -= 1
            swap(arr, i, more)
        else:
            i += 1
    return [less, more]


def quickSort(arr):
    stack = [[0, len(arr) - 1]]
    start = 0
    end = 0
    less = 0
    more = 0
    while (len(stack) > 0):
        a = stack.pop()
        start = a[0]
        end = a[1]
        if (start >= end):
            continue
        ls = partition(arr, arr[start], start, end)
        less = ls[0]
        more = ls[1]
        stack.append([start, less])
        stack.append([more, end])
    return arr


def calcTime(fn, arg):
    t1 = time()
    res = fn(arg)
    t2 = time()
    return [int((t2 - t1) * 1000), res]
# print(quickSort([4, 5, 2, 6, 3, 2, 0, 9, 10]))


def createArr(size):
    return [int(random() * 10000) for x in range(size)]

bigArr = createArr(4000000)
t = calcTime(quickSort, bigArr)[0]
print(time())
