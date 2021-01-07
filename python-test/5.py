class Solution:
    def countPrimes(self, n: int) -> int:
        return self.helper(n - 1)
    def helper(self, n: int) -> int:
        if(n <= 1): return 0
        if(n == 2): return 1
        
        count = 1
        for i in range(2, n):
            if n % i == 0:
                count = 0
                break
        return self.helper(n-1) + count
res = Solution().countPrimes(499979)
print(res)
