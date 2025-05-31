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

# This problem is about unit testing. (Python 3)
# Your company needs a function that meets the following requirements:
# * For a given array of n integers, the function returns the index of the element with the minimum value in the array. 
#   If there is more than one element with the minimum value, it returns the smallest one.
# * If an empty array is passed to the function, it raises an exception. A colleague has written this method. 
#   The implementation in Python is listed below. Implementations in other languages can be found in the code template.
# def minimum_index(seq):
#     if len(seq) == 0:
#         raise ValueError("Cannot get the minimum value index from an empty sequence")
#     min_idx = 0
#     for i in range(1, len(seq)):
#         if a[i] < a[min_idx]:
#             min_idx = i
#     return min_idx
# A coworker has prepared functions that will perform the tests and validate return values. 
# Finish the implementation of 3 classes to provide data and expected results for the tests.
# Complete the following methods.
# In the class TestDataEmptyArray:
# * get_array() returns an empty array
# In the class TestDataUniqueValues:
# * get_array() returns an array of size at least 2 with all unique elements
# * get_expected_result() returns the expected minimum value index for this array
# In the class TestDataExactlyTwoDifferentMinimums:
# * get_array() returns an array where the minimum value occurs at exactly 2 indices
# * get_expected_result() returns the expected index
# Take a look at the code template to see the exact implementation of functions that your colleague already implemented.
# Note: The arrays are indexed from 0.

def minimum_index(seq):
    if len(seq) == 0:
        raise ValueError("Cannot get the minimum value index from an empty sequence")
    min_idx = 0
    for i in range(1, len(seq)):
        if seq[i] < seq[min_idx]:
            min_idx = i
    return min_idx
class TestDataEmptyArray:
    @staticmethod
    def get_array():
        return []

class TestDataUniqueValues:
    @staticmethod
    def get_array():
        return [5, 2, 3]  # Minimum at index 1

    @staticmethod
    def get_expected_result():
        return 1

class TestDataExactlyTwoDifferentMinimums:
    @staticmethod
    def get_array():
        return [1, 3, 1]  # Minimum at indices 0 and 2

    @staticmethod
    def get_expected_result():
        return 0  # Smallest index of the minimum

def TestWithEmptyArray():
    try:
        seq = TestDataEmptyArray.get_array()
        result = minimum_index(seq)
    except ValueError as e:
        pass
    else:
        assert False


def TestWithUniqueValues():
    seq = TestDataUniqueValues.get_array()
    assert len(seq) >= 2

    assert len(list(set(seq))) == len(seq)

    expected_result = TestDataUniqueValues.get_expected_result()
    result = minimum_index(seq)
    assert result == expected_result


def TestiWithExactyTwoDifferentMinimums():
    seq = TestDataExactlyTwoDifferentMinimums.get_array()
    assert len(seq) >= 2
    tmp = sorted(seq)
    assert tmp[0] == tmp[1] and (len(tmp) == 2 or tmp[1] < tmp[2])

    expected_result = TestDataExactlyTwoDifferentMinimums.get_expected_result()
    result = minimum_index(seq)
    assert result == expected_result

TestWithEmptyArray()
TestWithUniqueValues()
TestiWithExactyTwoDifferentMinimums()
print("OK")

