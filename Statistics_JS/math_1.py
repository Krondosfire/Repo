# Interfaces(Python 3)
# Task:
# The AdvancedArithmetic interface and the method declaration for the abstract divisorSum(n) method are provided for you in the editor below.
# Complete the implementation of Calculator class, which implements the AdvancedArithmetic interface. 
# The implementation for the divisorSum(n) method must return the sum of all divisors of n.
# Example:
# n = 25
# The divisors of 25 are 1, 5, 25. Their sum is 31.
# n = 20
# The divisors of 20 are 1, 2, 4, 5, 10, 20 and their sum is 42.
# Input Format:
# A single line with an integer, n.
# Constraints:
# 1 <= n <= 1000

class AdvancedArithmetic(object):
    def divisorSum(n):
        raise NotImplementedError

class Calculator(AdvancedArithmetic):
    def divisorSum(self, n):
        # Sum all divisors of n
        return sum(i for i in range(1, n+1) if n % i == 0)

n = int(input())
my_calculator = Calculator()
s = my_calculator.divisorSum(n)
print("I implemented: " + type(my_calculator).__bases__[0].__name__)
print(s)
# Example usage:
n = 28
my_calculator = Calculator()
s = my_calculator.divisorSum(n)
print("I implemented: " + type(my_calculator).__bases__[0].__name__)
print(s)
