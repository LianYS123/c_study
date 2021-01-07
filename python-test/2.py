def isValid(ls):
    return len(set(ls)) < 9

def done_or_not(board): #board[i][j]
    block = {}
    for i in range(len(board)):
        if(isValid(board[i])): return 'Try again!'
        l = []
        for j in range(len(board[i])):
            l.append(board[j][i])
            key = str(i//3) + str(j//3)
            if(key not in block):
                block[key] = [board[i][j]]
            else:
                block[key].append(board[i][j])
        if(isValid(l)): return 'Try again!'
    for key in block:
        if(isValid(block[key])): return 'Try again!'
    
    return 'Finished!'

res = done_or_not(
        [[1, 3, 2, 5, 7, 9, 4, 6, 8]
        ,[4, 9, 8, 2, 6, 1, 3, 7, 5]
        ,[7, 5, 6, 3, 8, 4, 2, 1, 9]
        ,[6, 4, 3, 1, 5, 8, 7, 9, 2]
        ,[5, 2, 1, 7, 9, 3, 8, 4, 6]
        ,[9, 8, 7, 4, 2, 6, 5, 3, 1]
        ,[2, 1, 4, 9, 3, 5, 6, 8, 7]
        ,[3, 6, 5, 8, 1, 7, 9, 2, 4]
        ,[8, 7, 9, 6, 4, 2, 1, 3, 5]])
print(res)