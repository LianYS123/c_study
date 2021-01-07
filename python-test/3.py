def solution(args):
    res = [[str(args[0])]]
    for i in range(1, len(args)):
        if(args[i] - args[i - 1] == 1):
            item = res[-1]
            if(len(item) == 1):
                item.append(str(args[i]))
            else:
                item[1] = str(args[i])
        else:
            res.append([str(args[i])])
    return ','.join(['-'.join(i) for i in res])

print(solution([-6,-3,-2,-1,0,1,3,4,5,7,8,9,10,11,14,15,17,18,19,20]))