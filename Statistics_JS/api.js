window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

// Task: Measure the spread
// Given an array, arr, of n integers, calculate the respective first quartile (Q1), second quartile (Q2), and third quartile (Q3). 
// It is guaranteed that Q1, Q2, and Q3 are integers.
// Example:
// arr = [9,5,7,1,3]
// The sorted array is [1,3,5,7,9] which has an odd number of elements. The lower half consists of [1,3], and its median is (1 + 3) / 2 = 2. 
// The middle element is 5 and represents the second quartile. The upper half is [7,9] and its median is (7 + 9) / 2 = 8. Return [2,5,8].
// arr = [1,3,5,7]
// The array is already sorted. The lower half is [1,3] with a median = 2. The median of the entire array is (3 + 5) / 2 = 4, and of the upper half is (5 + 7) / 2 = 6. 
// Return [2,4,6].
// Function Description:
// Complete the quartiles function in the editor below.
// quartiles has the following parameters:
// -int arr[n]: the values to segregate
// Returns:
// -int[3]: the medians of the left half of arr, arr in total, and the right half of arr.
// Input Format:
// The first line contains an integer, n, the number of elements in arr.
// The second line contains n space-separated integers, each an arr[i].
// Constraints:
// 5 <= n <= 50
// 0 < arr[i] <= 100, where arr[i] is the i-th element of the array.

function quartiles(arr) {
    arr.sort((a, b) => a - b);
    const n = arr.length;
    const getMedian = (sortedArray) => {
        const len = sortedArray.length;
        if(len % 2 === 0) {
            return (sortedArray[len / 2 - 1] + sortedArray[len / 2]) / 2;

        } else {
            return sortedArray[Math.floor(len / 2)];
        }
    };
    const q2 = getMedian(arr);
    let lowerHalf, upperHalf;
    if(n % 2 === 0) {
        const mid = n / 2;
        lowerHalf = arr.slice(0, mid);
        upperHalf = arr.slice(mid);
    } else {
        const mid = Math.floor(n / 2);
        lowerHalf = arr.slice(0, mid);
        upperHalf = arr.slice(mid + 1);
    }
    const q1 = getMedian(lowerHalf);
    const q3 = getMedian(upperHalf);
    return [q1, q2, q3].map(num => Math.round(num));
}

// Example usage
// Example 1
const arr1 = [9, 5, 7, 1, 3];
console.log(quartiles(arr1)); 
// Output: [2, 5, 8]

// Example 2
const arr2 = [1, 3, 5, 7];
console.log(quartiles(arr2)); 
// Output: [2, 4, 6]

// Example 3 (even length with split)
const arr3 = [3, 7, 8, 5, 12, 14, 21, 13, 18];
// Sorted: [3,5,7,8,12,13,14,18,21]
// Lower half (exclude median 12): [3,5,7,8] → median (5+7)/2 = 6
// Upper half: [13,14,18,21] → median (14+18)/2 = 16
console.log(quartiles(arr3)); 
// Output: [6, 12, 16]

// Task: Standard Deviation
// Given an array, arr, of n integers, calculate and print the standard deviation. 
// Your answer should be in decimal form, rounded to a scale of 1 decimal place (i.e., 12.3 format). 
// An error margin of +-0.1 will be tolerated for the standard deviation.
// Example:
// arr = [2,5,2,7,4]
// The sum of the array values is 20 and there are 5 elements. The mean is 4.0.
// Subtract the mean from each element, square each result, and take their sum.
// (2 - 4)^2 = 4
// (5 - 4)^2 = 1
// (2 - 4)^2 = 4
// (7 - 4)^2 = 9
// (4 - 4)^2 = 0
// Their sum is 18. Take the square root of 18 / 5 to get 1.7, the standard deviation.
// Function Description:
// Complete the stdDev function in the editor below.
// stdDev has the following parameters:
// - int arr[n]: an array of integers
// Prints:
// - float: the standard deviation to 1 place after the decimal
// Input Format:
// The first line contains an integer, n, denoting the size of arr.
// The second line contains n space-separated integers that describe arr.
// Constraints:
// 5 <= n <= 100
// 0 < arr[i] <= 10^5

function stdDev(arr) {
    const n = arr.length;
    const mean = arr.reduce((sum, val) => sum + val, 0) / n;
    const variance = arr.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / n;
    const std = Math.sqrt(variance);
    console.log(std.toFixed(1));
}

// Example usage:
stdDev([2, 5, 2, 7, 4]);  // Output: 1.7
stdDev([10, 2, 38, 23, 38, 23, 21]); // Output: 13.3

// Task:
// The interquartile range of an array is the difference between its first (Q1) and third (Q3) quartiles (i.e., Q3 - Q1).
// Given an array, values, of n integers and an array, freqs, representing the respective frequencies of values's elements, 
// construct a data set, S, where each values[i] occurs at frequency freqs[i]. Then calculate and print S's interquartile range, 
// rounded to a scale of 1 decimal place (i.e., 12.3 format).
// Tip: Be careful to not use integer division when averaging the middle two elements for a data set with an even number of elements, 
// and be sure to not include the median in your upper and lower data sets.
// Example:
// values = [1,2,3]
// freqs = [3,2,1]
// Apply the frequencies to the values to get the expanded array S = [1,1,1,2,2,3]. Here left = [1,1,1], right = [2,2,3]. 
// The median of the left half, Q1 = 1.0, the middle element. 
// For the right half, Q3 = 2.0. Print the difference to one decimal place: Q3 - Q1 = 2.0 - 1.0 = 1, so print 1.0.
// Function Description:
// Complete the interQuartile function in the editor below.
// interQuartile has the following parameters:
// - int values[n]: an array of integers
// - int freqs[n]: values[i] occurs freqs[i] times in the array to analyze
// Prints:
// float: the interquartile range to 1 place after the decimal
// Input Format:
// The first line contains an integer, n, the number of elements in arrays values and freqs.
// The second line contains n space-separated integers describing the elements of array values.
// The third line contains n space-separated integers describing the elements of array freqs.
// Constraints:
// 5 <= n <= 50
// 0 < values[i] <= 100
// 0 < SUM(from n -1 to i = 0) of freqs[i] <= 10^3
// The number of elements in S is equal to SUM of freqs.

function interQuartile(values, freqs) {
    // Step 1: Expand the dataset S
    let S = [];
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < freqs[i]; j++) {
            S.push(values[i]);
        }
    }
    S.sort((a, b) => a - b);

    // Helper function to calculate the median of a sorted array
    function median(arr) {
        const n = arr.length;
        if (n % 2 === 0) {
            return (arr[n / 2 - 1] + arr[n / 2]) / 2;
        } else {
            return arr[Math.floor(n / 2)];
        }
    }

    // Step 2: Split into lower and upper halves
    const n = S.length;
    let lowerHalf, upperHalf;
    if (n % 2 === 0) {
        lowerHalf = S.slice(0, n / 2);
        upperHalf = S.slice(n / 2);
    } else {
        lowerHalf = S.slice(0, Math.floor(n / 2));
        upperHalf = S.slice(Math.floor(n / 2) + 1);
    }

    // Step 3: Calculate Q1 and Q3
    const Q1 = median(lowerHalf);
    const Q3 = median(upperHalf);

    // Step 4: Print the interquartile range
    console.log((Q3 - Q1).toFixed(1));
}

// Example usage:
const values = [1, 2, 3];
const freqs = [3, 2, 1];
// Expanded S = [1, 1, 1, 2, 2, 3]
// Sorted: [1, 1, 1, 2, 2, 3]
// Lower half: [1, 1, 1] → median = 1
// Upper half: [2, 2, 3] → median = 2
// Interquartile range: 2 - 1 = 1.0

console.log(interQuartile(values, freqs)); // Output: 1.0

// Task:
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// Example:
// arr = [1,3,5,7,9]
// The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. The function prints
// 16 24
// Function Description:
// Complete the miniMaxSum function in the editor below.
// miniMaxSum has the following parameter(s):
// arr: an array of 5 integers
// Print:
// Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.
// Input Format:
// A single line of five space-separated integers.
// Constraints:
// 1 <= arr[i] <= 10^9

function miniMaxSum(arr) {
    // Sort the array
    arr.sort((a, b) => a - b);
    // Minimum sum: sum of the first 4 elements
    const minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0);
    // Maximum sum: sum of the last 4 elements
    const maxSum = arr.slice(1, 5).reduce((a, b) => a + b, 0);
    // Print the results
    console.log(`${minSum} ${maxSum}`);
}

// Example usage
const arr01 = [1, 2, 3, 4, 5];
console.log(miniMaxSum(arr01));

const arr02 = [2, 15, 7, 12, 99, 482, 3, 519];
console.log(miniMaxSum(arr02));

