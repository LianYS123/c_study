from functools import reduce
class Solution:
    def getNums(self, num):
        res = []
        while(num/10 >= 1):
            res.append(num % 10)
            num //= 10
        res.insert(0,num)
        return res
    def isHappy(self, n: int) -> bool:
        nums = self.getNums(n)
        while(True):
            n = reduce(lambda n1, n2: n1 ** 2 + n2 ** 2, nums)
            
            nums = self.getNums(n)
            print(nums)
            print(n)
            if(n == 1): return True
            if(n == 4): return False
# s = Solution()
# i = s.isHappy(3)
# print(i)
nums = [8,1]
n = reduce(lambda n1, n2: n1 + n2 ** 2, nums, 0)
print(n)