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

// Task:
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
// Example:
// s = 12:01:00PM
// Return '12:01:00'.
// s = 12:01:00AM
// Return '00:01:00'.
// Function Description:
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
// timeConversion has the following parameter(s):
// string s: a time in 12 hour format
// Returns:
// string: the time in 24 hour format
// Input Format:
// A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).
// Constraints:
// All input times are valid

function timeConversion(s) {
    let hour = parseInt(s.slice(0, 2));
    const rest = s.slice(2, 8);
    const ampm = s.slice(8, 10);
    if(ampm === "AM") {
        if(hour === 12) hour = 0;
    } else {
        if(hour !== 12) hour += 12;
    }
    const hourStr = hour.toString().padStart(2, '0');
    return hourStr + rest;
}

// Example usage
console.log(timeConversion("07:05:45PM")); // Output: 19:05:45
console.log(timeConversion("12:00:00AM")); // Output: 00:00:00
console.log(timeConversion("12:45:54PM")); // Output: 12:45:54
console.log(timeConversion("01:15:30AM")); // Output: 01:15:30
console.log(timeConversion("11:59:59PM")); // Output: 23:59:59

// Task:
// There is a collection of input strings and a collection of query strings. 
// For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
// Example:
// strings = ['ab',' ab','abc']
// queries = ['ab', 'abc', 'bc']
// There are 2 instances of 'ab', 1 of 'abc' and 0 of 'bc'. For each query, add an element to the return array, results = [2, 1, 0].
// Function Description:
// Complete the function matchingStrings in the editor below. The function must return an array of integers representing the 
// frequency of occurrence of each query string in strings.
// matchingStrings has the following parameters:
// string strings[n] - an array of strings to search
// string queries[q] - an array of query strings
// Returns:
// int[q]: an array of results for each query
// Input Format:
// The first line contains an integer n, the size of strings[].
// Each of the next n lines contains a string strings[i].
// The next line contains q, the size of queries[].
// Each of the next q lines contains a string queries[i].
// Constraints:
// 1 <= n <= 1000
// 1 <= q <= 1000
// 1 <= |strings[i]|, |queries[i]| <= 20

function matchingStrings(strings, queries) {
    const freqMap = {};
    for(const s of strings) {
        freqMap[s] = (freqMap[s] || 0) + 1;
    }
    return queries.map(q => freqMap[q] || 0);
}
// Example usage
const strings = ['ab', 'ab', 'abc'];
const queries = ['ab', 'abc', 'bc'];
console.log(matchingStrings(strings, queries)); // Output: [2, 1, 0]

// Objective:
// In this challenge, we learn about Arrays. Check out the attached tutorial for more details.
// Function Description:
// Complete the getSecondLargest function in the editor below.
// getSecondLargest has the following parameters:
// int nums[n]: an array of integers
// Returns:
// int: the second largest number in nums
// Input Format:
// The first line contains an integer, n, the size of the nums array.
// The second line contains n space-separated numbers that describe the elements in nums.
// Constraints:
// 1 <= n <= 10
// 0 <= nums[i] <= 100, where nums[i] is the number at index i.
// The numbers in nums may not be distinct. 

function getSecondLargest(nums) {
    // Remove duplicates by converting to a set, then back to an array
    const uniqueNums = Array.from(new Set(nums));
    // Sort in descending order
    uniqueNums.sort((a, b) => b - a);
    // Return the second element (second largest)
    return uniqueNums[1];
}
console.log(getSecondLargest([2, 3, 6, 6, 5])); // Output: 5
console.log(getSecondLargest([1, 2, 3, 4, 5])); // Output: 4
console.log(getSecondLargest([5, 5, 5, 5, 5])); // Output: undefined (since there is no second largest)


// Objective:
// In this challenge, we learn about switch statements. Check out the attached tutorial for more details.
// Task:
// Complete the getLetter(s) function in the editor. It has one parameter: a string, s, consisting of lowercase 
// English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:
// If the first character in string s is in the set {a,e,i,o,u}, then return A.
// If the first character in string s is in the set {b,c,d,f,g}, then return B.
// If the first character in string s is in the set {h,j,k,l,m}, then return C.
// If the first character in string s is in the set {n,p,q,r,s,t,v,w,x,y,z}, then return D.
// Hint: You can get the letter at some index i in s using the syntax s[i] or s.charAt(i).
// Function Description:
// Complete the getLetter function in the editor below.
// getLetter has the following parameters:
// string s: a string
// Returns:
// string: a single letter determined as described above
// Input Format:
// Stub code in the editor reads a single string denoting s from stdin.
// Constraints:
// 1 <= |s| <= 100, where |s| is the length of s.
// String s contains lowercase English alphabetic letters (i.e., a through z) only.

function getLetter(s) {
    let letter;
    switch(s[0]) {
        case 'a':
            case 'e':
                case 'i':
                    case 'o':
                        case 'u':
                            letter = 'A';
                            break;
                            case 'b':
                                case 'c':
                                    case 'd':
                                        case 'f':
                                            case 'g':
                                                letter = 'B';
                                                break;
                                                case 'h':
                                                    case 'j':
                                                        case 'k':
                                                            case 'l':
                                                                case 'm':
                                                                    letter = 'C';
                                                                    break;
                                                                    default:
                                                                        letter = 'D';
    }
    return letter;
}
// Example usage
console.log(getLetter('apple'));   // Output: A
console.log(getLetter('banana'));  // Output: B
console.log(getLetter('mango'));   // Output: C
console.log(getLetter('zebra'));   // Output: D

// Task:
// Complete the function in the editor. It has one parameter: an array, a, of objects. Each object in the array has two integer properties denoted by x and y. 
// The function must return a count of all such objects o in array a that satisfy o.x == o.y.
// Input Format:
// The first line contains an integer denoting n.
// Each of the n subsequent lines contains two space-separated integers describing the values of x and y.
// Constraints:
// 5 <= n <= 10
// 1 <= x,y <= 100

function getCount(objects) {
    return objects.filter(o => o.x === o.y).length;
}

// Example usage
const objects = [
    {x: 1, y: 1},
    {x: 2, y: 3},
    {x: 4, y: 4},
    {x: 5, y: 6},
    {x: 7, y: 7}
];

console.log(getCount(objects)); // Output: 3

// Objective:
// In this challenge, we practice using JavaScript classes. Check the attached tutorial for more details.
// Task:
// Create a Polygon class that has the following properties:
// A constructor that takes an array of integer values describing the lengths of the polygon's sides.
// A perimeter() method that returns the polygon's perimeter.
// Locked code in the editor tests the Polygon constructor and the perimeter method.
// Note: The perimeter method must be lowercase and spelled correctly.
// Input Format:
// There is no input for this challenge.

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
    area() {
        const n = this.sides.length;
        // Check if all sides are equal (regular polygon)
        if (!this.sides.every(side => side === this.sides[0])) {
            throw new Error("Area formula only applies to regular polygons (all sides equal).");
        }
        const s = this.sides[0];
        // Area formula for a regular polygon
        return (n * s * s) / (4 * Math.tan(Math.PI / n));
    }
}

// Example usage
const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log("Rectangle perimeter:", rectangle.perimeter());
console.log("Square perimeter:", square.perimeter());
console.log("Pentagon perimeter:", pentagon.perimeter());
const square1 = new Polygon([10, 10, 10, 10]);
console.log(square1.perimeter()); // 40
console.log(square1.area());      // 100

const pentagon1 = new Polygon([6, 6, 6, 6, 6]);
console.log(pentagon1.perimeter()); // 30
console.log(pentagon1.area());      // ~61.94

const rectangle1 = new Polygon([10, 20, 10, 20]);
console.log(rectangle1.perimeter()); // 60
try {
    console.log(rectangle1.area()); // Throws error
} catch (e) {
    console.log(e.message); // Area formula only applies to regular polygons (all sides equal).
}

// Objective:
// In this challenge, we practice using JavaScript Template Literals. Check the attached tutorial for more details.
// Task:
// The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. 
// Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's 
// respective expression values.
// Complete the function in the editor so that it does the following:
// 1) Finds the initial values of s1 and s2 by plugging the area and perimeter values into the formula:
// s = (P+-sqrt(P^2 - 16.A)) / 4
// where A is the rectangle's area and P is its perimeter.
// Creates an array consisting of s1 and s2 and sorts it in ascending order.
// Returns the sorted array.
// Input Format:
// The first line contains an integer denoting s1.
// The second line contains an integer denoting s2.
// Constraints:
// 1 <= s1, s2 <= 100

function sides(literals, ...expressions) {
    const [area, perimeter] = expressions;
    const s1 = (perimeter + Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
    const s2 = (perimeter - Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
    return [s1, s2].sort((a, b) => a - b);
}

// Example usage
// For area=140, perimeter=48, this returns [7, 20]
console.log(sides`The area is: ${140}.\nThe perimeter is: ${48}.`); // [7, 20]

// You will be given a list of 32 bit unsigned integers. Flip all the bits (1 --> 0 and 0 --> 1) and return the result as an unsigned integer.
// Example:
// n = 9[10]
// 9[10] = 1001[2]. We're working with 32 bits, so:
// 00000000000000000000000000001001[2] = 9[10]
// 11111111111111111111111111110110[2] = 4294967286[10]
// Return 4294967286.
// Function Description:
// Complete the flippingBits function in the editor below.
// flippingBits has the following parameter(s):
// int n: an integer
// Returns:
// int: the unsigned decimal integer result
// Input Format:
// The first line of the input contains q, the number of queries.
// Each of the next q lines contain an integer, n, to process.
// Constraints:
// 1 <= q <= 100
// 0 <= n < 2^32

function flippingBits(n) {
    // 0xFFFFFFFF is 32 bits of all 1s (4294967295)
    return (~n) >>> 0;
}

// Example usage
console.log("Flipping Bits 9:",flippingBits(9)); // Output: 4294967286
console.log("Flipping Bits 6:",flippingBits(6)); // 
console.log("Flipping Bits 4294967295:", flippingBits(4294967295)); // Output: 0
console.log("Flipping Bits 2147483647:", flippingBits(2147483647)); // 2147483648
console.log("Flipping Bits 1:",flippingBits(1));          // 4294967294
console.log("Flipping Bits 0:", flippingBits(0));          // 4294967295

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix arr is shown below:
// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.
// Function description:
// Complete the diagonalDifference function in the editor below.
// diagonalDifference takes the following parameter:
// int arr[n][m]: an array of integers
// Return:
// int: the absolute diagonal difference
// Input Format:
// The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
// Each of the next n lines describes a row, arr[i], and consists of n space-separated integers arr[i][j].
// Constraints:
// -100 <= arr[i][j] <= 100

function diagonalDifference(arr) {
    let n = arr.length;
    let primary = 0;
    let secondary = 0;
    for(let i = 0; i < n; i++) {
        primary += arr[i][i];
        secondary += arr[i][n - 1 - i];
    }
    return Math.abs(primary - secondary);
}

// Example usage
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];
console.log("Matrix:", arr);
console.log("The diagonal difference of the matrix is:", diagonalDifference(arr)); // Output: 2

// Comparison Sorting:
// Quicksort usually has a running time of n x log(n), but is there an algorithm that can sort even faster? 
// In general, this is not possible. Most sorting algorithms are comparison sorts, i.e. they sort a list just by comparing the elements to one another. 
// A comparison sort algorithm cannot beat n x log(n) (worst-case) running time, since n x log(n) represents the minimum number 
// of comparisons needed to know where to place each element. For more details, you can see these notes (PDF).
// Alternative Sorting:
// Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index range covers 
// the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. 
// At the end, run through your counting array, printing the value of each non-zero valued index that number of times.
// Example:
// arr = [1,1,3,2,1]
// All of the values are in the range [0...3], so create an array of zeros, result = [0,0,0,0]. The results of each iteration follow:
// i	arr[i]	result
// 0	1	[0, 1, 0, 0]
// 1	1	[0, 2, 0, 0]
// 2	3	[0, 2, 0, 1]
// 3	2	[0, 2, 1, 1]
// 4	1	[0, 3, 1, 1]
// The frequency array is [0,3,1,1]. These values can be used to create the sorted array as well: sorted = [1,1,1,2,3].
// Note:
// For this exercise, always return a frequency array with 100 elements. The example above shows only the first 4 elements, the remainder being zeros.
// Challenge:
// Given a list of integers, count and return the number of times each value appears as an array of integers.
// Function Description:
// Complete the countingSort function in the editor below.
// countingSort has the following parameter(s):
// arr[n]: an array of integers
// Returns:
// int[100]: a frequency array
// Input Format:
// The first line contains an integer n, the number of items in arr.
// Each of the next n lines contains an integer arr[i] where 0 <= i < n.
// Constraints:
// 100 <= n <= 10^6
// 0 <= arr[i] < 100

function countingSort(arr) {
    // Create a frequency array of 100 elements, all initialized to 0
    let frequency = new Array(100).fill(0);
    // Count the occurences of each value in arr
    for(let num of arr) {
        frequency[num]++;
    }
    return frequency;
}

// Example usage
const arr4 = [1, 1, 3, 2, 1];
console.log(countingSort(arr4)); 
// Output: [0, 3, 1, 1, 0, 0, ..., 0] (array of length 100)

// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. 
// Ignore case. Return either pangram or not pangram as appropriate.
// Example:
// s = 'The quick brown fox jumps over the lazy dog'
// The string contains all letters in the English alphabet, so return pangram.
// Function Description:
// Complete the function pangrams in the editor below. It should return the string pangram if the input string is a pangram. 
// Otherwise, it should return not pangram.
// pangrams has the following parameter(s):
// string s: a string to test
// Returns:
// string: either pangram or not pangram
// Input Format:
// A single line with string s.
// Constraints:
// 0 < length of s <= 10^3
// Each character of s, s[i] belongs to {a - z, A - z, space}

function pangram(s) {
    // Convert to lower case and remove spaces
    s = s.toLowerCase();
    // Use a Set to collect unique letters
    const letters = new Set();
    for(let char of s) {
        if(char >= 'a' && char <= 'z') {
            letters.add(char);
        }
    }
    // If all 26 letters are present, it's a pangram
    return letters.size === 26 ? "pangram" : "not pangram";
}

// Example usage
console.log("Is this sentence is a pangram: The quick brown fox jumps over the lazy dog?", pangram('The quick brown fox jumps over the lazy dog')); // pangram
console.log("Is this sentence is a pangram: Hello World!", pangram('Hello World')); // not pangram

// There are two n-element arrays of integers, A and B. Permute them into some A' and B' such that the relation A'[i] B'[i] >= k holds for all i where 0 <= i < n.
// There will be q queries consisting of A, B, and k. For each query, return YES if some permutation A', B' satisfying the relation exists. 
// Otherwise, return NO.
// Example:
// A = [0,1]
// B = [0,2]
// k = 1
// A valid A', B' is A' = [1,0] and B' = [0,2]: 1 + 0  >= 1 and 0 + 2 >= 1. Return YES.
// Function Description:
// Complete the twoArrays function in the editor below. It should return a string, either YES or NO.
// twoArrays has the following parameter(s):
// int k: an integer
// int A[n]: an array of integers
// int B[n]: an array of integers
// Returns:
// - string: either YES or NO
// Input Format:
// The first line contains an integer q, the number of queries.
// The next q sets of 3 lines are as follows:
// The first line contains two space-separated integers n and k, the size of both arrays A and B, and the relation variable.
// The second line contains n space-separated integers A[i].
// The third line contains n space-separated integers B[i].
// Constraints:
// 1 <= q <= 10
// 1 <= n <= 1000
// 1 <= k <= 10^9
// 0 <= A[i], B[i] <= 10^9

function twoArrays(k, A, B) {
    // Sort A ascending, B descending
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    // Check if for every i, A[i] + B[i] >= k
    for(let i = 0; i < A.length; i++) {
        if(A[i] + B[i] < k) {
            return "NO";
        }
    }
    return "YES"
}

// Example usage

console.log(twoArrays(1, [0, 1], [0, 2])); // YES
console.log(twoArrays(10, [2, 1, 3], [7, 8, 9])); // YES
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4])); // NO

// Objective:
// In this challenge, we learn about binomial distributions. 
// Task:
// The ratio of boys to girls for babies born in Russia is 1.09 : 1. If there is 1 child born per birth, what proportion of 
// Russian families with exactly 6 children will have at least 3 boys?
// Write a program to compute the answer using the above parameters. Then print your result, rounded to a scale of 3 decimal places (i.e., 1.234 format).
// Input Format:
// A single line containing the following values:
// 1.09 1

function processData(input) {
    //Parse input
    const [boyRatio, girlRatio] = input.trim().split(' ').map(Number);
    // Probability of boy
    const p = boyRatio / (boyRatio + girlRatio);
    // Number of children
    const n = 6;

    // Binomial coeficient function
    function binom(n, k) {
        let res = 1;
        for(let i = 1; i <= k; i++) {
            res *= (n - i + 1) / i;
        }
        return res;
    }
    // Calculate probability of at least 3 boys
    let prob = 0;
    for(let k = 3; k <= n; k++) {
        prob += binom(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
    }
    // Print the result rounded to 3 decimal places
    console.log(prob.toFixed(3));
}

// Example input: "1.09 1"
processData("1.09 1");
// Output: 0.696


// Task:
// The probability that a machine produces a defective product is 1/3. What is the probability that the 1st defect occurs the 5th item produced?
// Input Format:
// The first line contains the respective space-separated numerator and denominator for the probability of a defect, 
// and the second line contains the inspection we want the probability of being the first defect for:
// 1 3
// 5

function processData01(input) {
    const lines = input.trim().split('\n');
    const [num, den] = lines[0].split(' ').map(Number);
    const k = Number(lines[1]);
    const p = num / den;  // probability of defect
    const q = 1 - p; // probability of no defect
    // Probability that first defect is on the k-th item
    const result = Math.pow(q, k - 1) * p;
    // Print result rounded to 3 decimal places
    console.log(result.toFixed(3));
}

// Example usage:
processData01("1 3\n5");
// Output: 0.131

// Task:
// A manufacturer of metal pistons finds that, on average, 12% of the pistons they manufacture are rejected because they are incorrectly sized. 
// What is the probability that a batch of 10 pistons will contain:
// No more than 2 rejects?
// At least 2 rejects?
// Input Format:
// A single line containing the following values (denoting the respective percentage of defective pistons and the size of the current batch of pistons):
// 12 10

function processData02(input) {
    const [percent, n] = input.trim().split(' ').map(Number);
    const p = percent / 100;
    // Binomial coeficient
    function binom01(n, k) {
        let res = 1;
        for(let i = 1; i <= k; i++) {
            res *= (n - i + 1) / i;
        }
        return res;
    }
    // Binomial probability
    function binomialProb(k) {
        return binom01(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
    }
    // No more than 2 rejects: sum P(0), P(1), P(2)
    let noMoreThan2 = 0;
    for(let k = 0; k <= 2; k++) {
        noMoreThan2 += binomialProb(k);
    }
    // At least 2 rejects: 1 - P(0) - P(1)
    let atLeast2 = 1 -(binomialProb(0) + binomialProb(1));
    // Print each probability rounded to 3 decimal places
    console.log(noMoreThan2.toFixed(3));
    console.log(atLeast2.toFixed(3));
}

// Example input: "12 10"
processData02("12 10");


// Task:
// The probability that a machine produces a defective product is 1/3. What is the probability that the  defect is found during the first 5 inspections?
// Input Format:
// The first line contains the respective space-separated numerator and denominator for the probability of a defect, 
// and the second line contains the inspection we want the probability of the first defect being discovered by:
// 1 3
// 5

function processData03(input) {
    const lines = input.trim().split('\n');
    const [num, den] = lines[0].split(' ').map(Number);
    const n = Number(lines[1]);
    const p = num / den;

    // Probability that first defect is found during first n inspections
    // P(X <= n) = 1 - (1-p)^n
    const result = 1 - Math.pow(1 - p, n);

    // Print result rounded to 3 decimal places
    console.log(result.toFixed(3));
}

// Example usage:
processData03("1 3\n5");

// Task:
// A random variable, X, follows Poisson distribution with mean of 2.5. Find the probability with which the random variable X is equal to 5.
// Input Format:
// The first line contains X's mean. The second line contains the value we want the probability for:
// 2.5
// 5

function processData04(input) {
    const lines = input.trim().split('\n');
    const lambda = parseFloat(lines[0]);
    const k = parseInt(lines[1], 10);
    // Calculate k!
    function factorial(n) {
        let res = 1;
        for(let i = 2; i <= n; i++) res *= i;
        return res;
    }
    const prob = (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
    // Print result rounded to 3 decimal places
    console.log(prob.toFixed(3));
}

// Example usage
processData04("2.5\n5");

// Task:
// The manager of a industrial plant is planning to buy a machine of either type A or type B. For each day’s operation:

// The number of repairs, X, that machine A needs is a Poisson random variable with mean 0.88. The daily cost of operating A is C(A) = 160 + 40X^2.
// The number of repairs, Y, that machine B needs is a Poisson random variable with mean 1.55. The daily cost of operating B is C(B) = 128 + 40Y^2.
// Assume that the repairs take a negligible amount of time and the machines are maintained nightly to ensure that they operate like new at the 
// start of each day. Find and print the expected daily cost for each machine.
// Input Format:
// A single line comprised of 2 space-separated values denoting the respective means for A and B:
// 0.88 1.55

function processData05(input) {
    const [lambdaA, lambdaB] = input.trim().split(' ').map(Number);
    function expectedCost(base, lambda) {
        return base + 40 * (lambda + lambda * lambda);
    }
    const costA = expectedCost(160, lambdaA);
    const costB = expectedCost(128, lambdaB);
    console.log(costA.toFixed(3));
    console.log(costB.toFixed(3));
}

// Example input: "12 10"
processData05("0.88 1.55");

// Task:
// In a certain plant, the time taken to assemble a car is a random variable, X, having a normal distribution with a mean of 20 hours 
// and a standard deviation of 2 hours. What is the probability that a car can be assembled at this plant in:
// 1. Less than 19.5 hours?
// 2. Between 20 and 22 hours?
// Input Format:
// There are 3 lines of input (shown below):
// 20 2
// 19.5
// 20 22
// The first line contains 2 space-separated values denoting the respective mean and standard deviation for X. 
// The second line contains the number associated with question 1. 
// The third line contains 2 space-separated values describing the respective lower and upper range boundaries for question 2.

function processData06(input) {
    const lines = input.trim().split('\n');
    const [mean, std] = lines[0].split(' ').map(Number);
    const lessThan = parseFloat(lines[1]);
    const [low, high] = lines[2].split(' ').map(Number);

    // Error function approximation
    function erf(x) {
        // Abramowitz and Stegun formula 7.1.26
        const sign = x < 0 ? -1 : 1;
        x = Math.abs(x);

        const a1 =  0.254829592;
        const a2 = -0.284496736;
        const a3 =  1.421413741;
        const a4 = -1.453152027;
        const a5 =  1.061405429;
        const p  =  0.3275911;

        const t = 1.0/(1.0 + p*x);
        const y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-x*x);

        return sign*y;
    }

    // CDF for normal distribution
    function normalCDF(x, mean, std) {
        return 0.5 * (1 + erf((x - mean) / (std * Math.sqrt(2))));
    }

    // 1. P(X < lessThan)
    const prob1 = normalCDF(lessThan, mean, std);

    // 2. P(low < X < high) = CDF(high) - CDF(low)
    const prob2 = normalCDF(high, mean, std) - normalCDF(low, mean, std);

    // Print results rounded to 3 decimal places
    console.log(prob1.toFixed(3));
    console.log(prob2.toFixed(3));
}

// Example usage
processData06("20 2\n19.5\n20 22");
// Output:
// 0.266
// 0.341

// Task:
// The final grades for a Physics exam taken by a large group of students have a mean of mu = 70 and a standard deviation of sigma = 10. 
// If we can approximate the distribution of these grades by a normal distribution, what percentage of the students:
// 1. Scored higher than 80 (i.e., have a grade > 80)?
// 2. Passed the test (i.e., have a grade >= 60)?
// 3. Failed the test (i.e., have a grade < 60)?
// Find and print the answer to each question on a new line, rounded to a scale of 2 decimal places.
// Input Format:
// There are 3 lines of input (shown below):

// 70 10
// 80
// 60
// The first line contains 2 space-separated values denoting the respective mean and standard deviation for the exam. 
// The second line contains the number associated with question 1. 
// The third line contains the pass/fail threshold number associated with questions 2 and 3.

function processData07(input) {
    const lines = input.trim().split('\n');
    const [mean, std] = lines[0].split(' ').map(Number);
    const higherThan = parseFloat(lines[1]);
    const passMark = parseFloat(lines[2]);

    // Error function approximation
    function erf(x) {
        const sign = x < 0 ? -1 : 1;
        x = Math.abs(x);

        const a1 =  0.254829592;
        const a2 = -0.284496736;
        const a3 =  1.421413741;
        const a4 = -1.453152027;
        const a5 =  1.061405429;
        const p  =  0.3275911;

        const t = 1.0/(1.0 + p*x);
        const y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-x*x);

        return sign*y;
    }

    function normalCDF(x, mean, std) {
        return 0.5 * (1 + erf((x - mean) / (std * Math.sqrt(2))));
    }

    // 1. Percentage scored higher than higherThan
    const percentHigher = (1 - normalCDF(higherThan, mean, std)) * 100;

    // 2. Percentage passed (>= passMark)
    const percentPassed = (1 - normalCDF(passMark, mean, std)) * 100;

    // 3. Percentage failed (< passMark)
    const percentFailed = normalCDF(passMark, mean, std) * 100;

    // Print results rounded to 2 decimal places
    console.log(percentHigher.toFixed(2));
    console.log(percentPassed.toFixed(2));
    console.log(percentFailed.toFixed(2));
}

// Example UsaGE
processData07("70 10\n80\n60");

// Task:
// A large elevator can transport a maximum of 9800 pounds. Suppose a load of cargo containing 49 boxes must be transported via the elevator. 
// The box weight of this type of cargo follows a distribution with a mean of mu = 205 pounds and a standard deviation of sigma = 15 pounds. 
// Based on this information, what is the probability that all 49 boxes can be safely loaded into the freight elevator and transported?
// Input Format:
// There are 4 lines of input (shown below):
// 9800
// 49
// 205
// 15
// The first line contains the maximum weight the elevator can transport. 
// The second line contains the number of boxes in the cargo. 
// The third line contains the mean weight of a cargo box, and the fourth line contains its standard deviation.

function processData08(input) {
    const lines = input.trim().split('\n');
    const maxWeight = parseFloat(lines[0]);
    const n = parseInt(lines[1], 10);
    const mu = parseFloat(lines[2]);
    const sigma = parseFloat(lines[3]);

    // Central Limit Theorem
    const mu_sum = n * mu;
    const sigma_sum = Math.sqrt(n) * sigma;

    const z = (maxWeight - mu_sum) / sigma_sum;

    // Error function approximation
    function erf(x) {
        const sign = x < 0 ? -1 : 1;
        x = Math.abs(x);

        const a1 =  0.254829592;
        const a2 = -0.284496736;
        const a3 =  1.421413741;
        const a4 = -1.453152027;
        const a5 =  1.061405429;
        const p  =  0.3275911;

        const t = 1.0/(1.0 + p*x);
        const y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-x*x);

        return sign*y;
    }

    function normalCDF(z) {
        return 0.5 * (1 + erf(z / Math.sqrt(2)));
    }

    const prob = normalCDF(z);

    // Print result rounded to 4 decimal places
    console.log(prob.toFixed(4));
}

// Example usage
processData08("9800\n49\n205\n15");

//  Task:
// The number of tickets purchased by each student for the University X vs. University Y football game follows a distribution that has a mean of mu = 24 
// and a standard deviation of sigma = 2.0.
// A few hours before the game starts, 100 eager students line up to purchase last-minute tickets. 
// If there are only 250 tickets left, what is the probability that all 100 students will be able to purchase tickets?
// Input Format:
// There are 4 lines of input (shown below):
// 250
// 100
// 2.4
// 2.0
// The first line contains the number of last-minute tickets available at the box office. 
// The second line contains the number of students waiting to buy tickets. 
// The third line contains the mean number of purchased tickets, and the fourth line contains the standard deviation.

function processData09(input) {
    const lines = input.trim().split('\n');
    const ticketsAvailable = parseFloat(lines[0]);
    const n = parseInt(lines[1], 10);
    const mu = parseFloat(lines[2]);
    const sigma = parseFloat(lines[3]);

    // Central Limit Theorem
    const mu_sum = n * mu;
    const sigma_sum = Math.sqrt(n) * sigma;

    const z = (ticketsAvailable - mu_sum) / sigma_sum;

    // Error function approximation
    function erf(x) {
        const sign = x < 0 ? -1 : 1;
        x = Math.abs(x);

        const a1 =  0.254829592;
        const a2 = -0.284496736;
        const a3 =  1.421413741;
        const a4 = -1.453152027;
        const a5 =  1.061405429;
        const p  =  0.3275911;

        const t = 1.0/(1.0 + p*x);
        const y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-x*x);

        return sign*y;
    }

    function normalCDF(z) {
        return 0.5 * (1 + erf(z / Math.sqrt(2)));
    }

    const prob = normalCDF(z);

    // Print result rounded to 4 decimal places
    console.log(prob.toFixed(4));
}

// Example usage
processData09("250\n100\n2.4\n2.0");

// Objective:
// In this challenge, we practice solving problems based on the Central Limit Theorem. 
// Task:
// You have a sample of 100 values from a population with mean mu = 500 and with standard deviation sigma = 80. 
// Compute the interval that covers the middle 95% of the distribution of the sample mean; in other words, compute A and B such that P(A < x < B) = 0.95. 
// Use the value of z = 1.96. Note that z is the z-score.
// Input Format:
// There are five lines of input (shown below):
// 100
// 500
// 80
// .95
// 1.96
// The first line contains the sample size. The second and third lines contain the respective mean (mu) and standard deviation (sigma). 
// The fourth line contains the distribution percentage we want to cover (as a decimal), and the fifth line contains the value of z.

function processData10(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0], 10);
    const mu = parseFloat(lines[1]);
    const sigma = parseFloat(lines[2]);
    // const conf = parseFloat(lines[3]); // not used, since z is given
    const z = parseFloat(lines[4]);

    const SE = sigma / Math.sqrt(n);

    const A = mu - z * SE;
    const B = mu + z * SE;

    // Print A and B rounded to 2 decimal places
    console.log(A.toFixed(2));
    console.log(B.toFixed(2));
}

// Example usage
processData10("100\n500\n80\n.95\n1.96");

// Objective:
// In this challenge, we practice calculating the Pearson correlation coefficient. 
// Task:
// Given two n-element data sets, X and Y, calculate the value of the Pearson correlation coefficient.
// Input Format:
// The first line contains an integer, n, denoting the size of data sets X and Y.
// The second line contains n space-separated real numbers (scaled to at most one decimal place), defining data set X.
// The third line contains n space-separated real numbers (scaled to at most one decimal place), defining data set Y.
// Constraints:
// 10 <= n <= 100
// 1 <= x[i] <= 500, where x[i] is the i-th value of data set X.
// 1 <= y[i] <= 500, where y[i] is the i-th value of data set Y.
// Data set X contains unique values.
// Data set Y contains unique values.

function processData11(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0], 10);
    const X = lines[1].split(' ').map(Number);
    const Y = lines[2].split(' ').map(Number);

    // Calculate means
    const meanX = X.reduce((a, b) => a + b, 0) / n;
    const meanY = Y.reduce((a, b) => a + b, 0) / n;

    // Calculate numerator and denominators
    let numerator = 0;
    let sumSqX = 0;
    let sumSqY = 0;
    for (let i = 0; i < n; i++) {
        const dx = X[i] - meanX;
        const dy = Y[i] - meanY;
        numerator += dx * dy;
        sumSqX += dx * dx;
        sumSqY += dy * dy;
    }

    const denominator = Math.sqrt(sumSqX * sumSqY);

    const r = numerator / denominator;

    // Print result rounded to 3 decimal places
    console.log(r.toFixed(3));
}

// Example usage
processData11("10\n10 9.8 8 7.8 7.2 7 6.8 6.7 6.1 6\n200 44 32 24 17 15 12 8 4 2");

//  Objective:
// In this challenge, we practice calculating Spearman's rank correlation coefficient. 
// Task:
// Given two n-element data sets, X and Y, calculate the value of Spearman's rank correlation coefficient.
// Input Format:
// The first line contains an integer, n, denoting the number of values in data sets X and Y.
// The second line contains n space-separated real numbers (scaled to at most one decimal place) denoting data set X.
// The third line contains n space-separated real numbers (scaled to at most one decimal place) denoting data set Y.
// Constraints:
// 10 <= n <= 100
// 1 <= x[i] <= 500, where x[i] is the i-th value of data set X.
// 1 <= y[i] <= 500, where y[i] is the i-th value of data set Y.
// Data set X contains unique values.
// Data set Y contains unique values.

function processData12(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0], 10);
    const X = lines[1].split(' ').map(Number);
    const Y = lines[2].split(' ').map(Number);

    // Helper to get ranks of an array (unique values, so no ties)
    function getRanks(arr) {
        // Pair each value with its index
        const indexed = arr.map((v, i) => [v, i]);
        // Sort by value descending (largest gets rank 1)
        indexed.sort((a, b) => b[0] - a[0]);
        // Assign ranks (rank 1 for largest value)
        const ranks = Array(n);
        for (let i = 0; i < n; i++) {
            ranks[indexed[i][1]] = i + 1;
        }
        return ranks;
    }

    const rankX = getRanks(X);
    const rankY = getRanks(Y);

    // Compute sum of squared rank differences
    let d2sum = 0;
    for (let i = 0; i < n; i++) {
        const d = rankX[i] - rankY[i];
        d2sum += d * d;
    }

    // Spearman's rank correlation formula
    const rho = 1 - (6 * d2sum) / (n * (n * n - 1));

    // Print result rounded to 3 decimal places
    console.log(rho.toFixed(3));
}

// Example usage
processData12("10\n10 9.8 8 7.8 7.2 7 6.8 6.7 6.1 6\n200 44 32 24 17 15 12 8 4 2");

//  Subarray division
// Task:
// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
// Lily decides to share a contiguous segment of the bar selected such that:
// * The length of the segment matches Ron's birth month, and,
// * The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.
// Example:
// s = [2,2,1,3,2]
// d = 4
// m = 2
// Lily wants to find segments summing to Ron's birth day, d = 4 with a length equalling his birth month, m = 2. 
// In this case, there are two segments meeting her criteria: [2,2] and [1,3].
// Function Description:
// Complete the birthday function in the editor below.
// birthday has the following parameter(s):
// * int s[n]: the numbers on each of the squares of chocolate
// * int d: Ron's birth day
// * int m: Ron's birth month
// Returns:
// int: the number of ways the bar can be divided
// Input Format:
// The first line contains an integer n, the number of squares in the chocolate bar.
// The second line contains n space-separated integers s[i], the numbers on the chocolate squares where 0 <= i < n.
// The third line contains two space-separated integers, d and m, Ron's birth day and his birth month.
// Constraints:
// 1 <= n <= 100
// 1 <= s[i] <= 5, where (0 <= i < n)
// 1 <= d <= 31
// 1 <= m <= 12

function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            sum += s[i + j];
        }
        if (sum === d) {
            count++;
        }
    }
    return count;
}

// Example usage
// Example 1
const s1 = [2, 2, 1, 3, 2];
const d1 = 4;
const m1 = 2;
console.log(birthday(s1, d1, m1)); // Output: 2

// Example 2
const s2 = [1, 1, 1, 1, 1, 1];
const d2 = 3;
const m2 = 2;
console.log(birthday(s2, d2, m2)); // Output: 0

// Example 3
const s3 = [4];
const d3 = 4;
const m3 = 1;
console.log(birthday(s3, d3, m3)); // Output: 1


// XOR Strings 2
// Task:
// Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.
// Debug the given function strings_xor to find the XOR of the two given strings appropriately.
// Note: You can modify at most three lines in the given code and you cannot add or remove lines to the code.
// To restore the original code, click on the icon to the right of the language selector.
// Input Format:
// The input consists of two lines. The first line of the input contains the first string, s, and the second line contains the second string, t.
// Constraints:
// 1 <= |s| <= 10^4
// |s| = |t|

function strings_xor(s, t) {
    let res = "";
    for(let i = 0; i < s.length; i++) {
        if(s[i] === t[i]) {
            res += "0";
        }
        else {
            res += "1";
        }
    }
    return res;
}

// Example usage
const s4 = "10101";
const t4 = "00101";
console.log(strings_xor(s4, t4));

// The median of a list of numbers is essentially its middle element after sorting. The same number of elements
// occur after it as before. Given a list of numbers with an odd number of elements, find the median.
// Example:
// arr = [5,3,1,2,4]
// The sorted array arr' = [1,2,3,4,5]. The middle elements and the median is 3.
// Function description:
// Complete the findMedian function in the editor below.
// findMedian has the following parameters:
// int arr[n]: an unsorted array of integers
// Returns:
// int:the median of the array
// Input format:
// The first line contains the integer n, the size of arr.
// The second line contains n space-separated integers arr[i].
// Constraints:
// 1 <= n <= 1000001
// n is odd
// -10000 <= arr[i] <= 10000

function findMedian(arr) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    const mid = Math.floor(arr.length / 2);
    return arr[mid];
}

// Example 1
const arr10 = [5, 3, 1, 2, 4];
console.log(findMedian(arr10)); // Output: 3

// Example 2
const arr11 = [7, 9, 2, 6, 5];
console.log(findMedian(arr11)); // Output: 6

// Example 3
const arr12 = [-5, -1, -3];
console.log(findMedian(arr12)); // Output: -3


// Sean invented a game involving a 2n x 2n matrix where each cell of the matrix contains an integer. 
// He can reverse any of its rows or columns any number of times. The goal of the game is to maximize the sum of the elements in the n x n submatrix located in the
// upper-left quadrant of the matrix.
// Given the initial configurations for q matrices, help Sean reverse the
// rows and columns of each matrix in the best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.
// Example:
// matrix = [[1,2], [3,4]]
// 1 2
// 3 4
// It is 2 x 2 and we want to maximize the top left quadrant, a 1 x 1 matrix. Reverse row 1:
// 1 2
// 4 3
// And now reverse column 0:
// 4 2
// 1 3
// The maximal sum is 4.
// Function description:
// Complete the flippingMatrix function.
// flippingMatrix has the followinf parameters:
// * int matrix[2n][2n]: a 2-dimensional array of integers
// Returns:
// * int: the maximum sum possible
// Input format:
// The first line contains an integer q, the number of queries.
// The next q sets of lines are in the following format:
// * The first line of each query contains an integer, n.
// * Each of the next 2n lines contains 2n space-separated integers matrix[i][j] in row i of the matrix.
// Constraints:
// 1 <= q <= 16
// 1 <= n <=128
// 0 <= matrix[i][j] <= 4096, where 0 <= i, j < 2n.

function flippingMatrix(matrix) {
    const n = matrix.length / 2;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const a = matrix[i][j];
            const b = matrix[i][2 * n - 1 - j];
            const c = matrix[2 * n - 1 - i][j];
            const d = matrix[2 * n - 1 - i][2 * n - 1 - j];
            sum += Math.max(a, b, c, d);
        }
    }
    return sum;
}

const matrix3 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
console.log(flippingMatrix(matrix3)); // Output: 54

// Exceptions
// Objective:
// Yesterday's challenge taught you to manage exceptional situations by using try and catch blocks. 
// In today's challenge, you will practice throwing and propagating an exception. 
// Task:
// Write a Calculator class with a single method: int power(int,int). The power method takes two integers, n and p, as parameters and 
// returns the integer result of n^p. If either n or p is negative, then the method must throw an exception with the message: n and p should be non-negative.
// Note: Do not use an access modifier (e.g.: public) in the declaration for your Calculator class.
// Input Format:
// Input from stdin is handled for you by the locked stub code in your editor. The first line contains an integer, T, 
// the number of test cases. Each of the T subsequent lines describes a test case in 2 space-separated integers that denote n and p, respectively.
// Constraints:
// No Test Case will result in overflow for correctly written code.

//Write your code here
class Calculator {
    power(n, p) {
        if (n < 0 || p < 0) {
            throw "n and p should be non-negative";
        }
        return Math.pow(n, p);
    }
}
// Example usage
const myCalculator = new Calculator();

try {
    console.log(myCalculator.power(3, 5)); // Output: 243
    console.log(myCalculator.power(2, 4)); // Output: 16
    console.log(myCalculator.power(0, 0)); // Output: 1
    console.log(myCalculator.power(-1, 2)); // Throws exception
} catch (e) {
    console.log(e); // Output: n and p should be non-negative
}

try {
    console.log(myCalculator.power(2, -3)); // Throws exception
} catch (e) {
    console.log(e); // Output: n and p should be non-negative
}

// Exception
// Objective:
// Today, we're getting started with Exceptions by learning how to parse an integer from a string and print a custom error message. 
// Task:
// Read a string, S, and print its integer value; if S cannot be converted to an integer, print Bad String.
// Note: You must use the String-to-Integer and exception handling constructs built into your submission language. 
// If you attempt to use loops/conditional statements, you will get a 0 score.
// Input Format:
// A single string, S.
// Constraints:
// 1 <= |S| <= 6, where |S| is the length of string S.
// S is composed of either lowercase letters (a-z) or decimal digits (0-9).

function parseAndPrint(S) {
    try {
        if (isNaN(Number(S))) throw new Error();
        console.log(Number(S));
    } catch (e) {
        console.log("Bad String");
    }
}


// Example usage
parseAndPrint("1234");   // Output: 1234
parseAndPrint("007");    // Output: 7
parseAndPrint("abcd");   // Output: Bad String
parseAndPrint("12a34");  // Output: Bad String
parseAndPrint("42");     // Output: 42

// 2D Arrays
// Objective:
// Today, we are building on our knowledge of arrays by adding another dimension. 
// Context:
// Given a 6 x 6 2D Array, A:
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in A to be a subset of values with indices falling in this pattern in A's graphical representation:
// a b c
//   d
// e f g
// There are 16 hourglasses in A, and an hourglass sum is the sum of an hourglass' values.
// Task:
// Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.
// Example:
// In the array shown above, the maximum hourglass sum is 7 for the hourglass in the top left corner.
// Input Format:
// There are 6 lines of input, where each line contains 6 space-separated integers that describe the 2D Array A.
// Constraints:
// -9 <= A[i][j] <= 9
// 0 <= i,j <=5

function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let maxSum = -63; // Minimum possible hourglass sum: 7 * -9 = -63

    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            let sum = 
                arr[i][j]   + arr[i][j+1]   + arr[i][j+2] +
                              arr[i+1][j+1] +
                arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }

    console.log(maxSum);
}
// Example usage:
function maxHourglassSum(arr) {
    let maxSum = -63; // 7 cells, each min -9

    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            let sum = 
                arr[i][j]   + arr[i][j+1]   + arr[i][j+2] +
                              arr[i+1][j+1] +
                arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum;
}


const arr14 = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

console.log(maxHourglassSum(arr14)); // Output: 19


// Inheritance
// Task:
// You are given two classes, Person and Student, where Person is the base class and Student is the derived class. 
// Completed code for Person and a declaration for Student are provided for you in the editor. 
// Observe that Student inherits all the properties of Person.
// Complete the Student class by writing the following:
// A Student class constructor, which has 4 parameters:
// * A string, firstName.
// * A string, lastName.
// * An integer, idNumber.
// * An integer array (or vector) of test scores, scores.
// A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average:
// Input Format:
// The locked stub code in the editor reads the input and calls the Student class constructor with the necessary arguments. 
// It also calls the calculate method which takes no arguments.
// The first line contains firstName, lastName, and idNumber, separated by a space. The second line contains the number of test scores. 
// The third line of space-separated integers describes scores.
// Constraints:
// 1 <= length of firstName, length of lastName <= 10
// length of idNumber === 7
// 0 <= score <= 100

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id);
        this.scores = scores;
    }
    calculate() {
        let sum = this.scores.reduce((a, b) => a + b, 0);
        let avg = sum / this.scores.length;
        if (avg >= 90) return 'O';
        if (avg >= 80) return 'E';
        if (avg >= 70) return 'A';
        if (avg >= 55) return 'P';
        if (avg >= 40) return 'D';
        return 'T';
    }
}

// Example usage:
const student = new Student("Jane", "Doe", 1234567, [100, 80, 90, 75, 88]);
student.printPerson();
console.log('Grade: ' + student.calculate());

//  Stacks and Queues:
// Task:
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backwards and forwards. 
// Can you determine if a given string, s, is a palindrome?
// To solve this challenge, we must first take each character in s, enqueue it in a queue, and also push that same character onto a stack. 
// Once that's done, we must dequeue the first character from the queue and pop the top character off the stack, then compare the two characters 
// to see if they are the same; as long as the characters match, we continue dequeueing, popping, and comparing each character until our 
// containers are empty (a non-match means s isn't a palindrome).
// Write the following declarations and implementations:
// 1. Two instance variables: one for your stack, and one for your queue.
// 2. A void pushCharacter(char ch) method that pushes a character onto a stack.
// 3. A void enqueueCharacter(char ch) method that enqueues a character in the queue instance variable.
// 4. A char popCharacter() method that pops and returns the character at the top of the stack instance variable.
// 5. A char dequeueCharacter() method that dequeues and returns the first character in the queue instance variable.
// Input Format:
// You do not need to read anything from stdin. The locked stub code in your editor reads a single line containing string s. 
// It then calls the methods specified above to pass each character to your instance variables.
// Constraints:
// s is composed of lowercase English letters.

// Define the Solution class
function Solution() {
    this.stack = [];
    this.queue = [];

    this.pushCharacter = function(ch) {
        this.stack.push(ch);
    };

    this.enqueueCharacter = function(ch) {
        this.queue.push(ch);
    };

    this.popCharacter = function() {
        return this.stack.pop();
    };

    this.dequeueCharacter = function() {
        return this.queue.shift();
    };
}

// Example usage function
function isPalindrome(s) {
    var obj = new Solution();
    for (var i = 0; i < s.length; i++) {
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }
    for (var i = 0; i < s.length / 2; i++) {
        if (obj.popCharacter() !== obj.dequeueCharacter()) {
            return false;
        }
    }
    return true;
}

// Try with a palindrome
let word1 = "racecar";
console.log(`The word, ${word1}, is${isPalindrome(word1) ? "" : " not"} a palindrome.`);

// Try with a non-palindrome
let word2 = "hello";
console.log(`The word, ${word2}, is${isPalindrome(word2) ? "" : " not"} a palindrome.`);


// Abstract Classes:
// Task:
// Given a Book class and a Solution class, write a MyBook class that does the following:

// Inherits from Book
// Has a parameterized constructor taking these 3 parameters:
// 1. string title
// 2. string author
// 3. int price
// Implements the Book class' abstract display() method so it prints these 3 lines:
// 1. Title:, a space, and then the current instance's title.
// 2. Author:, a space, and then the current instance's author.
// 3. Price:, a space, and then the current instance's price.
// Note: Because these classes are being written in the same file, you must not use an access modifier (e.g.: public) when declaring 
// MyBook or your code will not execute.
// Input Format:
// You are not responsible for reading any input from stdin. The Solution class creates a Book object and calls the MyBook class constructor 
// (passing it the necessary arguments). It then calls the display method on the Book object.

// Abstract Book class
class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Do not attempt to directly instantiate an abstract class.');
        } else {
            this.title = title;
            this.author = author;
        }
    }
    display() {
        console.log('Implement the \'display\' method!');
    }
}

// MyBook class implementing Book
class MyBook extends Book {
    constructor(title, author, price) {
        super(title, author);
        this.price = price;
    }
    display() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price: ${this.price}`);
    }
}

// Example usage:
const book = new MyBook("The Alchemist", "Paulo Coelho", 248);
book.display();
const book01 = new MyBook("Idiot", "Dostoevski", 562);
book01.display();


// Scope (Python 3 version)
// The absolute difference between two integers, a and b, is written as |a - b|. The maximum absolute difference between two integers in a 
// set of positive integers, elements, is the largest absolute difference between any two integers in __elements.
// The Difference class is started for you in the editor. It has a private integer array (elements) for storing N non-negative integers, 
// and a public integer (maximumDifference) for storing the maximum absolute difference.
// Task:
// Complete the Difference class by writing the following:
// * A class constructor that takes an array of integers as a parameter and saves it to the __elements instance variable.
// * A computeDifference method that finds the maximum absolute difference between any 2 numbers in __elements and stores it in the maximumDifference instance variable.
// Input Format:
// You are not responsible for reading any input from stdin. The locked Solution class in the editor reads in 2 lines of input. 
// The first line contains N, the size of the elements array. The second line has N space-separated integers that describe the __elements array.
// Constraints:
// 1 <= N <= 10
// 1 <= __elements[i] <= 100, where 0 <= i <= N -1

// class Difference:
//     def __init__(self, a):
//         self.__elements = a

// 	# Add your code here
//     def computeDifference(self):
//         self.maximumDifference = max(self.__elements) - min(self.__elements)
// # End of Difference class

// _ = input()
// a = [int(e) for e in input().split(' ')]

// d = Difference(a)
// d.computeDifference()

// print(d.maximumDifferen

// Linked List
// A Node class is provided for you in the editor. A Node object has an integer data field, data, and a Node instance pointer, next, 
// pointing to another node (i.e.: the next node in the list).
// A Node insert function is also declared in your editor. It has two parameters: a pointer, head, pointing to the first node of a linked list, 
// and an integer, data, that must be added to the end of the list as a new Node object.
// Task:
// Complete the insert function in your editor so that it creates a new Node (pass data as the Node constructor argument) 
// and inserts it at the tail of the linked list referenced by the head parameter. Once the new node is added, return the reference to the head node.
// Note: The head argument is null for an empty list.
// Input Format:
// The first line contains T, the number of elements to insert.
// Each of the next T lines contains an integer to insert at the end of the list.

// Node class definition
function Node(data) {
    this.data = data;
    this.next = null;
}

// Solution class with insert and display methods
function Solution01() {
    this.insert = function(head, data) {
        let newNode = new Node(data);
        if (head === null) {
            return newNode;
        } else {
            let current = head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
            return head;
        }
    };

    this.display = function(head) {
        let current = head;
        let output = [];
        while (current) {
            output.push(current.data);
            current = current.next;
        }
        console.log(output.join(" "));
    };
}

// Example usage:
let myList = new Solution01();
let head = null;

// Insert values into the linked list
head = myList.insert(head, 5);
head = myList.insert(head, 10);
head = myList.insert(head, 15);
head = myList.insert(head, 76);
// Display the linked list
myList.display(head); // Output: 5 10 15 76


// Least Square Regression Line
// Task:
// A group of five students enrolls in Statistics immediately after taking a Math aptitude test. Each student's Math aptitude test score, x, 
// and Statistics course grade, y, can be expressed as the following list of (x, y) points:
// 1. (95, 85)
// 2. (85, 95)
// 3. (80, 70)
// 4. (70, 65)
// 5. (60, 70)
// If a student scored an 80 on the Math aptitude test, what grade would we expect them to achieve in Statistics? 
// Determine the equation of the best-fit line using the least squares method, then compute and print the value of y when x = 80.
// Input Format:
// There are five lines of input; each line contains two space-separated integers describing a student's respective x and y grades:
// 95 85
// 85 95
// 80 70
// 70 65
// 60 70

function processData13(input) {
    // Parse input
    let lines = input.trim().split('\n');
    let n = lines.length;
    let x = [], y = [];
    for (let i = 0; i < n; i++) {
        let [xi, yi] = lines[i].trim().split(' ').map(Number);
        x.push(xi);
        y.push(yi);
    }

    // Calculate means
    let meanX = x.reduce((a, b) => a + b, 0) / n;
    let meanY = y.reduce((a, b) => a + b, 0) / n;

    // Calculate slope (b) and intercept (a)
    let numerator = 0, denominator = 0;
    for (let i = 0; i < n; i++) {
        numerator += (x[i] - meanX) * (y[i] - meanY);
        denominator += (x[i] - meanX) ** 2;
    }
    let b = numerator / denominator;
    let a = meanY - b * meanX;

    // Predict y for x = 80
    let x_pred = 80;
    let y_pred = a + b * x_pred;

    // Print result rounded to 3 decimal places
    console.log(y_pred.toFixed(3));
}

// Example usage:
// Data: [x, y] pairs
const data = [
    [95, 85],
    [85, 95],
    [80, 70],
    [70, 65],
    [60, 70]
];

// Separate x and y arrays
const x = data.map(pair => pair[0]);
const y = data.map(pair => pair[1]);
const n = data.length;

// Calculate means
const meanX = x.reduce((a, b) => a + b, 0) / n;
const meanY = y.reduce((a, b) => a + b, 0) / n;

// Calculate slope (b) and intercept (a)
let numerator = 0, denominator = 0;
for (let i = 0; i < n; i++) {
    numerator += (x[i] - meanX) * (y[i] - meanY);
    denominator += (x[i] - meanX) ** 2;
}
const b = numerator / denominator;
const a = meanY - b * meanX;

// Predict y for x = 80
const x_pred = 80;
const y_pred = a + b * x_pred;

console.log(`Regression equation: y = ${a.toFixed(3)} + ${b.toFixed(3)}x`);
console.log(`Predicted y for x = 80: ${y_pred.toFixed(3)}`);


// Pearson Correlation Coeficient II
// The regression line of y on x is 3x + 4y + 8 = 0, and the regression line of x on y is 4x + 3y + 7 = 0. 
// What is the value of the Pearson correlation coefficient?
// a) 1
// b) -1
// c) 3 / 4
// d) -4 / 3
// e) 4 / 3
// f) -3 / 4 <--- correct answer


// Multiple Linear Regression
// Task:
// Andrea has a simple equation:
// Y = a + b1 . f1 + b1 . f2 + ... + bm . fm
// for (m + 1) real constants (a, f1, f2,..., fm). We can say that the value of Y depends on m features. 
// Andrea studies this equation for n different feature sets (f1, f2, f3, ... ,fm) 
// and records each respective value of Y. If she has q new feature sets, can you help Andrea find the value of Y for each of the sets?
// Note: You are not expected to account for bias and variance trade-offs.
// Input Format:
// The first line contains 2 space-separated integers, m (the number of observed features) and n (the number of feature sets Andrea studied), respectively.
// Each of the n subsequent lines contain m + 1 space-separated decimals; the first m elements are features (f1, f2, f3, ..., fm), 
// and the last element is the value of Y for the line's feature set.
// The next line contains a single integer, q, denoting the number of feature sets Andrea wants to query for.
// Each of the q subsequent lines contains m space-separated decimals describing the feature sets.
// Constraints:
// 1 <= m <= 10
// 5 <= n <= 100
// 0 <= x[i] <= 1
// 0 <= Y <= 10^6
// 1 <= q <= 100

// --- Paste the matrix helper functions and regression code here ---
function transpose(A) {
    return A[0].map((_, i) => A.map(row => row[i]));
}
function multiply(A, B) {
    let result = Array(A.length).fill(0).map(() => Array(B[0].length).fill(0));
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B[0].length; j++) {
            for (let k = 0; k < B.length; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}
function inverse(A) {
    let n = A.length;
    let I = [];
    for (let i = 0; i < n; i++) {
        I[i] = [];
        for (let j = 0; j < n; j++) {
            I[i][j] = (i === j) ? 1 : 0;
        }
    }
    for (let i = 0; i < n; i++) {
        let maxEl = Math.abs(A[i][i]);
        let maxRow = i;
        for (let k = i + 1; k < n; k++) {
            if (Math.abs(A[k][i]) > maxEl) {
                maxEl = Math.abs(A[k][i]);
                maxRow = k;
            }
        }
        [A[i], A[maxRow]] = [A[maxRow], A[i]];
        [I[i], I[maxRow]] = [I[maxRow], I[i]];
        let pivot = A[i][i];
        for (let j = 0; j < n; j++) {
            A[i][j] /= pivot;
            I[i][j] /= pivot;
        }
        for (let k = 0; k < n; k++) {
            if (k !== i) {
                let c = A[k][i];
                for (let j = 0; j < n; j++) {
                    A[k][j] -= c * A[i][j];
                    I[k][j] -= c * I[i][j];
                }
            }
        }
    }
    return I;
}

// --- Example data ---
const m = 2, n1 = 3;
const X = [
    [1, 0.18, 0.89],
    [1, 1.0, 0.26],
    [1, 0.92, 0.11]
];
const Y = [
    [109.85],
    [155.72],
    [137.66]
];
const queries1 = [
    [1, 0.49, 0.18],
    [1, 0.57, 0.83]
];

// --- Regression Calculation ---
const XT = transpose(X);
const XTX = multiply(XT, X);
const XTX_inv = inverse(XTX);
const XTY = multiply(XT, Y);
const B = multiply(XTX_inv, XTY); // Coefficients

// --- Prediction ---
for (let i = 0; i < queries1.length; i++) {
    let features = queries1[i];
    let y_pred = 0;
    for (let j = 0; j < B.length; j++) {
        y_pred += B[j][0] * features[j];
    }
    console.log(y_pred.toFixed(2));
}


// Interfaces(Python 3)
// Task:
// The AdvancedArithmetic interface and the method declaration for the abstract divisorSum(n) method are provided for you in the editor below.
// Complete the implementation of Calculator class, which implements the AdvancedArithmetic interface. 
// The implementation for the divisorSum(n) method must return the sum of all divisors of n.
// Example:
// n = 25
// The divisors of 25 are 1, 5, 25. Their sum is 31.
// n = 20
// The divisors of 20 are 1, 2, 4, 5, 10, 20 and their sum is 42.
// Input Format:
// A single line with an integer, n.
// Constraints:
// 1 <= n <= 1000

// Bubble Sort
// Consider the following version of Bubble Sort:

// for (int i = 0; i < n; i++) {
//     // Track number of elements swapped during a single array traversal
//     int numberOfSwaps = 0;
    
//     for (int j = 0; j < n - 1; j++) {
//         // Swap adjacent elements if they are in decreasing order
//         if (a[j] > a[j + 1]) {
//             swap(a[j], a[j + 1]);
//             numberOfSwaps++;
//         }
//     }
    
//     // If no elements were swapped during a traversal, array is sorted
//     if (numberOfSwaps == 0) {
//         break;
//     }
// }
// Task:
// Given an array, a, of size n distinct elements, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following 3 lines:
// 1. Array is sorted in numSwaps swaps.
// where numSwaps is the number of swaps that took place.
// 2. First Element: firstElement
// where firstElement is the first element in the sorted array.
// 3. Last Element: lastElement
// where lastElement is the last element in the sorted array.
// Hint: To complete this challenge, you will need to add a variable that keeps a running tally of all swaps that occur during execution.
// Example:
// a = [4, 3, 1, 2]
// original a: 4 3 1 2
// round 1  a: 3 1 2 4 swaps this round: 3
// round 2  a: 1 2 3 4 swaps this round: 2
// round 3  a: 1 2 3 4 swaps this round: 0
// In the first round, the 4 is swapped at each of the 3 comparisons, ending in the last position. In the second round, the 3 is swapped at 2 of the 3 comparisons. 
// Finally, in the third round, no swaps are made so the iterations stop. The output is the following:
// Array is sorted in 5 swaps.
// First Element: 1
// Last Element: 4
// Input Format:
// The first line contains an integer, n, the number of elements in array a.
// The second line contains n space-separated integers that describe a[0],a[1], ...,a[n - 1].
// Constraints:
// 2 <= n <= 600
// 1 <= a[i] <= 2x10^6, where 0 <= i < n.


// Simulate input
const input = `4
4 3 1 2
`.split('\n');
let currentLine = 0;
function readLine() {
    return input[currentLine++];
}

function bubbleSort() {
    const n = parseInt(readLine().trim(), 10);
    let a = readLine().replace(/\s+$/g, '').split(' ').map(Number);

    let totalSwaps = 0;
    for (let i = 0; i < n; i++) {
        let numberOfSwaps = 0;
        for (let j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                numberOfSwaps++;
            }
        }
        totalSwaps += numberOfSwaps;
        if (numberOfSwaps === 0) break;
    }

    console.log(`Array is sorted in ${totalSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
}

bubbleSort();

// Multiple Linear Regression
// Task:
// Andrea has a simple equation:
// Y = a + b1 . f1 + b1 . f2 + ... + bm . fm
// for (m + 1) real constants (a, f1, f2, ...,fm ). We can say that the value of Y depends on m features. 
// Andrea studies this equation for n different feature sets (f1, f2, f3, ..., fm) and records each respective value of Y. 
// If she has q new feature sets, can you help Andrea find the value of Y for each of the sets?
// Note: You are not expected to account for bias and variance trade-offs.
// Input Format:
// The first line contains 2 space-separated integers, m (the number of observed features) and n (the number of feature sets Andrea studied), respectively.
// Each of the n subsequent lines contain m + 1 space-separated decimals; the first m elements are features (f1, f2, f3, ...,fm), 
// and the last element is the value of Y for the line's feature set.
// The next line contains a single integer, q, denoting the number of feature sets Andrea wants to query for.
// Each of the q subsequent lines contains m space-separated decimals describing the feature sets.
// Constraints:
// 1 <= m <= 10
// 5 <= n <= 100
// 0 <= x[i] <= 1
// 0 <= Y <= 10^6
// 1 <= q <= 100

// Example input as a multi-line string
const input01 = `
2 7
0.18 0.89 109.85
1.0 0.26 155.72
0.92 0.11 137.66
0.07 0.37 76.17
0.85 0.16 139.75
0.99 0.41 162.6
0.87 0.47 151.77
4
0.49 0.18
0.57 0.83
0.56 0.64
0.76 0.18
`;

function multipleLinearRegression(input01) {
    let lines = input01.trim().split('\n');
    let [m, n] = lines[0].trim().split(' ').map(Number);
    let X = [];
    let Y = [];
    for (let i = 1; i <= n; i++) {
        let arr = lines[i].trim().split(' ').map(Number);
        X.push([1, ...arr.slice(0, m)]); // Add bias term
        Y.push([arr[m]]);
    }
    let q = parseInt(lines[n + 1]);
    let queries = [];
    for (let i = n + 2; i < n + 2 + q; i++) {
        let arr = lines[i].trim().split(' ').map(Number);
        queries.push([1, ...arr]); // Add bias term
    }
    function transpose(A) {
        return A[0].map((_, i) => A.map(row => row[i]));
    }
    function multiply(A, B) {
        let result = Array(A.length).fill(0).map(() => Array(B[0].length).fill(0));
        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < B[0].length; j++) {
                for (let k = 0; k < B.length; k++) {
                    result[i][j] += A[i][k] * B[k][j];
                }
            }
        }
        return result;
    }
    function inverse(A) {
        let n = A.length;
        let I = [];
        for (let i = 0; i < n; i++) {
            I[i] = [];
            for (let j = 0; j < n; j++) {
                I[i][j] = (i === j) ? 1 : 0;
            }
        }
        for (let i = 0; i < n; i++) {
            let maxEl = Math.abs(A[i][i]);
            let maxRow = i;
            for (let k = i + 1; k < n; k++) {
                if (Math.abs(A[k][i]) > maxEl) {
                    maxEl = Math.abs(A[k][i]);
                    maxRow = k;
                }
            }
            [A[i], A[maxRow]] = [A[maxRow], A[i]];
            [I[i], I[maxRow]] = [I[maxRow], I[i]];
            let pivot = A[i][i];
            for (let j = 0; j < n; j++) {
                A[i][j] /= pivot;
                I[i][j] /= pivot;
            }
            for (let k = 0; k < n; k++) {
                if (k !== i) {
                    let c = A[k][i];
                    for (let j = 0; j < n; j++) {
                        A[k][j] -= c * A[i][j];
                        I[k][j] -= c * I[i][j];
                    }
                }
            }
        }
        return I;
    }
    let XT = transpose(X);
    let XTX = multiply(XT, X);
    let XTX_inv = inverse(XTX);
    let XTY = multiply(XT, Y);
    let B = multiply(XTX_inv, XTY);
    for (let i = 0; i < queries.length; i++) {
        let features = queries[i];
        let y_pred = 0;
        for (let j = 0; j < B.length; j++) {
            y_pred += B[j][0] * features[j];
        }
        console.log(y_pred.toFixed(2));
    }
}

multipleLinearRegression(input01);



console.log(`What is Node.js primarily used for?
a) Running JavaScript in the browser
b) Running JS on the server side   <-------------
c) Managing client-side DOM manipulation
d) Writing HTML and CSS`);


console.log(`What is one advantage of utilizing Node.js?
a) Access to a diverse set of programming language
b) Ability to develop complex browser-based applications
c) Extensive ecosystem of packages <-----
d) Integration with hardware devices`);


console.log(`What is the main purpose of a package.json file in a Node.js project?
a) Storing JS code sniplets
b) Defining project dependencies and metadata  <------------
c) Configuring server-side routing
d) Managing database connections`);


console.log(`What is the role of GitHub in the context of sharing code?
a) Hosting Node.js packages
b) Backing up and version controlling code   <-----------------
c) Installing dependencies for Node.js projects
d) Managing client-side resources`);

console.log(`What is the primary function of NPM (Node Package Manager) in the Node.js ecosystem?
a) Hosting code repositories
b) Providing a platform for code execution
c) Managing and distributing Node.js packages   <--------
d) Generating HTML templates`);


console.log(`What is the purpose of the package.json file in a Node.js project?
a) To specify project dependencies <-----
b) To define project metadata
c) To store project documentation
d) To list project contributors`);


console.log(`Which command is used to initialize a Node.js project and create a package.json file with default settings without going through prompts?
a) npm init -y <--------
b) npm start
c) npm install
d) npm create`);


console.log(`What is the purpose of the node_modules directory in a Node.js project?
a) To store installed dependencies  <-------
b) To execute Node.js code
c) To cache JS files
d) To store project configuration`);


console.log(`How do you install a package named "faker" in a Node.js project using npm?
a) npm install faker  <--------
b) npm add faker
c) npm get faker
d) npm save faker
`);

console.log(`What is the purpose of the package-lock.json file in a Node.js project?
a) To lock dependency versions  <--------
b) To specify project metadata
c) To store project documentation
d) To list project contributors`);

// Sales by Match
// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// Example:
// n = 7
// ar = [1,2,1,2,1,3,2]
// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
// Function Description:
// Complete the sockMerchant function in the editor below.
// sockMerchant has the following parameter(s):
// * int n: the number of socks in the pile
// * int ar[n]: the colors of each sock
// Returns:
// int: the number of pairs
// Input Format:
// The first line contains an integer n, the number of socks represented in ar.
// The second line contains n space-separated integers, ar[i], the colors of the socks in the pile.
// Constraints:
// 1 <= n <= 100
// 1 <= ar[i] <= 100 where 0 <= i < n

function sockMerchant(n, ar) {
    // Create a map to count occurences of each color
    let colorCount = {};
    for(let color of ar) {
        colorCount[color] = (colorCount[color] || 0) + 1;
    }
    // Count pairs for each color
    let pairs = 0;
    for(let color in colorCount) {
        pairs += Math.floor(colorCount[color] / 2);
    }
    return pairs;
}

// Example input
let n01 = 7;
let ar = [1, 2, 1, 2, 1, 3, 2];

// Call the function and log the output
console.log(sockMerchant(n01, ar)); // Output: 2

// Binary Search Trees
// Task:
// A level-order traversal, also known as a breadth-first search, visits each level of a tree's nodes from left to right, top to bottom. You are given a pointer, root, 
// pointing to the root of a binary search tree. Complete the levelOrder function provided in your editor so that it prints the level-order traversal of the binary search tree.
// Hint: You'll find a queue helpful in completing this challenge.
// Function Description:
// Complete the levelOrder function in the editor below.
// levelOrder has the following parameter:
// - Node pointer root: a reference to the root of the tree
// Prints:
// - Print node.data items as space-separated line of integers. No return value is expected.
// Input Format:
// The locked stub code in your editor reads the following inputs and assembles them into a BST:
// The first line contains an integer, T (the number of test cases).
// The T subsequent lines each contain an integer, data, denoting the value of an element that must be added to the BST.
// Constraints:
// 1 <= N <= 20
// 1 <= node, data[i] <= 100

// Start of function Node
function Node_1(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            return new Node_1(data);
        }
        if (data <= root.data) {
            root.left = this.insert(root.left, data);
        } else {
            root.right = this.insert(root.right, data);
        }
        return root;
    };

    this.levelOrder = function(root) {
        const queue = [];
        const result = [];
        if (root !== null) {
            queue.push(root);
        }
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.data);
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        console.log(result.join(' '));
    };
}

// Example usage:
// Create tree and insert nodes
const tree = new BinarySearchTree();
let root = null;
const values01 = [3, 5, 4, 7, 2, 1];
for (let v of values) {
    root = tree.insert(root, v);
}

// Perform level-order traversal
tree.levelOrder(root); // Output: 3 2 5 1 4 7

// Generics:
// Task:( C++11)
// Write a single generic function named printArray; this function must take an array of generic elements as a parameter (the exception to this is C++, which takes a vector). 
// The locked Solution class in your editor tests your function.
// Note: You must use generics to solve this challenge. Do not write overloaded functions.
// Input Format:
// The locked Solution class in your editor will pass different types of arrays to your printArray function.
// Constraints:
// You must have exactly 1 function named printArray.
// Output Format:
// Your printArray function should print each element of its generic array parameter on a new line.
// #include <iostream>
// #include <vector>
// #include <string>

// using namespace std;

// /**
// *    Name: printArray
// *    Print each element of the generic vector on a new line. Do not return anything.
// *    @param A generic vector
// **/

// // Write your code here
// template <typename T>
// void printArray(const std::vector<T>& arr) {
//     for(const T& elem : arr) {
//         std::cout << elem << std::endl;
//     }
// }
// int main() {
// 	int n;
	
// 	cin >> n;
// 	vector<int> int_vector(n);
// 	for (int i = 0; i < n; i++) {
// 		int value;
// 		cin >> value;
// 		int_vector[i] = value;
// 	}
	
// 	cin >> n;
// 	vector<string> string_vector(n);
// 	for (int i = 0; i < n; i++) {
// 		string value;
// 		cin >> value;
// 		string_vector[i] = value;
// 	}

// 	printArray<int>(int_vector);
// 	printArray<string>(string_vector);

// 	return 0;
// }


// Binary Search Trees
// Task:
// The height of a binary search tree is the number of edges between the tree's root and its furthest leaf. 
// You are given a pointer, root, pointing to the root of a binary search tree. Complete the getHeight function provided in your editor 
// so that it returns the height of the binary search tree.
// Input Format:
// The locked stub code in your editor reads the following inputs and assembles them into a binary search tree:
// The first line contains an integer, n, denoting the number of nodes in the tree.
// Each of the n subsequent lines contains an integer, data, denoting the value of an element that must be added to the BST.

function Node_2(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinarySearchTree_1() {
    this.insert = function(root, data) {
        if (root === null) {
            return new Node_2(data);
        }
        if (data <= root.data) {
            root.left = this.insert(root.left, data);
        } else {
            root.right = this.insert(root.right, data);
        }
        return root;
    };

    this.getHeight = function(root) {
        if (root === null) {
            return -1;
        }
        let leftHeight = this.getHeight(root.left);
        let rightHeight = this.getHeight(root.right);
        return 1 + Math.max(leftHeight, rightHeight);
    };
}

const tree_1 = new BinarySearchTree_1();
let root_1 = null;
const values_1 = [3, 5, 2, 1, 4, 6, 7];
for (let v of values_1) {
    root_1 = tree_1.insert(root_1, v);
}

console.log(tree_1.getHeight(root_1)); // Output should be 3

// Given an array of n distinct integers, transform the array into a zig zag sequence by permuting the array elements. 
// A sequence will be called a zig zag sequence if the first k elements in the sequence are in increasing order and the last k elements are in decreasing order, 
// where k = (n + 1) / 2. You need to find the lexicographically smallest zig zag sequence of the given array.
// Example:
// a = [2,3,5,1,4]
// Now if we permute the array as [1,4,5,3,2], the result is a zig zag sequence.
// Debug the given function findZigZagSequence to return the appropriate zig zag sequence for the given input array.
// Note: You can modify at most three lines in the given code. You cannot add or remove lines of code.
// To restore the original code, click on the icon to the right of the language selector.
// Input Format:
// The first line contains t the number of test cases. The first line of each test case contains an integer n, 
// denoting the number of array elements. The next line of the test case contains n elements of array a.
// Constraints:
// 1 <= t <= 20
// 1 <= n <= 10000 (n is always odd)
// 1 <= a[i] <= 10^9

function findZigZagSequence(a, n) {
    a.sort((x, y) => x - y);
    let mid = Math.floor((n - 1) / 2);
    // Swap middle and last element
    let temp = a[mid];
    a[mid] = a[n - 1];
    a[n - 1] = temp;
    // Reverse the second half after the middle element
    let st = mid + 1;
    let ed = n - 2;
    while (st <= ed) {
        let tmp = a[st];
        a[st] = a[ed];
        a[ed] = tmp;
        st++;
        ed--;
    }
    return a;
}
// Example input
let arry = [2, 3, 5, 1, 4];
let n12 = arr.length;
let zigzag = findZigZagSequence(arr, n);
console.log(zigzag.join(' ')); // Output: 1 2 5 4 3
let arry2 = [1, 2, 3, 4, 5, 6, 7];
let n2 = arry2.length;
let zigzag2 = findZigZagSequence(arr2, n2);
console.log(zigzag2.join(' ')); // Output: 1 2 3 7 6 5 4

let arry3 = [10, 20, 30, 40, 50];
console.log(findZigZagSequence(arry3, arry3.length).join(' '));
// Output: 10 20 50 40 30

// Linked Lists
// Task:
// A Node class is provided for you in the editor. A Node object has an integer data field, data, and a Node instance pointer, next, 
// pointing to another node (i.e.: the next node in a list).
// A removeDuplicates function is declared in your editor, which takes a pointer to the head node of a linked list as a parameter. 
// Complete removeDuplicates so that it deletes any duplicate nodes from the list and returns the head of the updated list.
// Note: The head pointer may be null, indicating that the list is empty. Be sure to reset your next pointer when performing deletions to avoid breaking the list.
// Input Format:
// You do not need to read any input from stdin. The following input is handled by the locked stub code and passed to the removeDuplicates function:
// The first line contains an integer, N, the number of nodes to be inserted.
// The N subsequent lines each contain an integer describing the data value of a node being inserted at the list's tail.
// Constraints:
// The data elements of the linked list argument will always be in non-decreasing order.

function Node_3(data) {
    this.data = data;
    this.next = null;
}
function Solution02() {
    this.insert = function(head, data) {
        var p = new Node_3(data);
        if(head == null) {
            head = p;
        } else if (head.next == null) {
            head.next = p;
        } else {
            var start = head;
            while(start.next != null) {
                start = start.next;
            }
            start.next = p;
        }
        return head;
    };
    this.removeDuplicates = function(head) {
        let current = head;
        while(current !== null && current.next !== null) {
            if(current.data === current.next.data) {
                current.next = current.next.next; // Skip the duplicate node
            } else {
                current = current.next;
            }
        }
        return head;
    };
    this.display = function(head) {
        let result = [];
        let start = head;
        while(start) {
            result.push(start.data);
            start = start.next;
        }
        console.log(result.join(' '));
    };
}

// Example usage:
let myList01 = new Solution02();
let head01 = null;
let values02 = [1, 2, 2, 3, 3, 4, 5, 5];
for(let v of values02) {
    head01 = myList01.insert(head01, v);
}
console.log("Original list:");
myList01.display(head01); // Output: 1 2 2 3 3 4 5 5
head01 = myList01.removeDuplicates(head01);
console.log("After removing duplicates:");
myList01.display(head01); // Output: 1 2 3 4 5

// Change values to test other cases
let values03 = [1, 1, 1, 1, 1];
let head02 = null;
for(let v of values03) {
    head02 = myList01.insert(head02, v);
}
myList01.display(myList01.removeDuplicates(head02)); // Output: 1

// Drawing Book:
// A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. 
// They always turn pages one at a time. When they open the book, page 1 is always on the right side.
// When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. 
// The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a student wants to turn to page p, 
// what is the minimum number of pages to turn? They can start at the beginning or the end of the book.
// Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.
// Example:
// n = 5
// p = 3
// Using the diagram above, if the student wants to get to page 3, they open the book to page 1, 
// flip 1 page and they are on the correct page. If they open the book to the last page, page 5, 
// they turn 1 page and are at the correct page. Return 1.
// Function Description:
// Complete the pageCount function in the editor below.
// pageCount has the following parameter(s):
// * int n: the number of pages in the book
// * int p: the page number to turn to
// Returns:
// * int: the minimum number of pages to turn
// Input Format:
// The first line contains an integer n, the number of pages in the book.
// The second line contains an integer, p, the page to turn to.
// Constraints:
// 1 <= n <= 10^5
// 1 <= p <= n

function pageCount(n, p) {
    const fromFront = Math.floor(p / 2);
    const fromBack = Math.floor(n / 2) - Math.floor(p / 2);
    return Math.min(fromFront, fromBack);
}

// Example usage
console.log(pageCount(5, 3)); // Output: 1
console.log(pageCount(6, 2)); // Output: 1
console.log(pageCount(7, 6)); // Output: 1
console.log(pageCount(100, 99)); // Output: 1

console.log(pageCount(15, 4)); // Output: 2
console.log(pageCount(15, 14)); // Output: 0


// Tower Breakers
// Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play 
// optimally.The rules of the game are as follows:
// * Initially there are n towers.
// * Each tower is of height m.
// * The players move in alternating turns.
// * In each turn, a player can choose a tower of height x and reduce its height to y, where 1 <= y < x 
// and y evenly divides x.
// * If the current player is unable to make a move, they lose the game.
// Given the values of n and m, determine which player will win. If the first player wins, return 1. Otherwise, return 2.
// Example: 
// n = 2
// m = 6
// There are 2 towers, each 6 units tall. Player 1 has a choice of two moves:
// - remove 3 pieces from a tower to leave 3 as 6 modulo 3 = 0.
// - remove 5 pieces to leave 1.
// Let Player 1 remove 3. Now the towers are 3 and 6 units tall.
// Player 2 matches the move. Now the towers are both 3 units tall.
// Now Player 1 has only one move.
// Player 1 removes 2 pieces leaving 1. Towers are 1 and 2 units tall.
// Player 2 matches again. Towers are both 1 unit tall.
// Player 1 has no move and loses. Return 2.
// Function Description:
// Complete the towerBreakers function in the editor below.
// towerBreakers has the following paramter(s):
// * int n: the number of towers
// * int m: the height of each tower
// Returns:
// * int: the winner of the game
// Input Format:
// The first line contains a single integer t, the number of test cases.
// Each of the next t lines describes a test case in the form of 2 space-separated integers, n and m.
// Constraints:
// 1 <= t <= 100
// 1 <= n,m <= 10^6

function towerBreakers(n, m) {
    if(m === 1) {
        return 2; // If m is 1, Player 1 cannot make a move, Player 2 wins
    } else if(n % 2 === 0) {
        return 2; // If n is even, Player 2 can always mirror Player 1's moves
    } else {
        return 1; // If n is odd and m > 1, Player 1 can always win
    }
}
// Example usage
console.log(towerBreakers(2, 6)); // Output: 2
console.log(towerBreakers(3, 5)); // Output: 1
console.log(towerBreakers(4, 1)); // Output: 2
console.log(towerBreakers(5, 10)); // Output: 1


// Max Min
// You will be given a list of integers, arr, and a single integer k. You must create an array of length k 
// from elements of arr such that its unfairness is minimized. Call that array arr'. Unfairness of an array is calculated as
// max(arr') - min(arr')
// Where:
// - max denotes the largest integer in arr'.
// - min denotes the smallest integer in arr'.
// Example:
// arr = [1,4,7,2]
// k = 2
// Pick any two elements, say arr' = [4,7].
// unfairness = max(4,7) - min(4,7) = 7 - 4 = 3
// Testing for all pairs, the solution [1,2] provides the minimum unfairness.
// Note: Integers in arr may not be unique.
// Function Description:
// Complete the maxMin function in the editor below.
// maxMin has the following parameter(s):
// * int k: the number of elements to select
// * int arr[n]:: an array of integers
// Returns:
// * int: the minimum possible unfairness
// Input Format:
// The first line contains an integer n, the number of elements in array arr.
// The second line contains an integer k.
// Each of the next n lines contains an integer arr[i] where 0 <= i < n.
// Constraints:
// 2 <= n <= 10^5
// 2 <= k <= n
// 0 <= arr[i] <= 10^9

function maxMin(k, arr) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    let minUnfairness = Infinity; // Initialize minUnfairness to a large value

    for (let i = 0; i <= arr.length - k; i++) {
        let currentUnfairness = arr[i + k - 1] - arr[i]; // Calculate unfairness for the current window
        if (currentUnfairness < minUnfairness) {
            minUnfairness = currentUnfairness; // Update minUnfairness if current is smaller
        }
    }
    return minUnfairness; // Return the minimum unfairness found
}
// Example usage
console.log(maxMin(2, [1, 4, 7, 2])); // Output: 1
console.log(maxMin(3, [10, 100, 300, 200, 1000])); // Output: 200
console.log(maxMin(3, [10, 100, 300, 200, 1000, 20, 30])); // Output: 20


// Dynamic Array
// Declare a 2-dimensional array, arr, of n empty arrays. All arrays are zero indexed.
// Declare an integer, lastAnswer, and initialize it to 0.
// There are 2 types of queries, given as an array of strings for you to parse:
// 1. Query: 1 x y
// 1.1. Let idx = (( x ^ lastAnswer) % n).
// 1.2. Append the integer y to arr[idx].
// 2. Query: 2 x y
// 2.1. Let idx = (( x ^ lastAnswer) % n).
// 2.2. Assign the value arr[idx][y % size(arr[idx])] to lastAnswer.
// 2.3. Store the new value of lastAnswer to an answers array.
// Note: ^ is the bitwise XOR operation, which corresponds to the ^ operator in most languages. Learn more about it on Wikipedia. % is the modulo operator.
// Finally, size(arr[idx]) is the number of elements in arr[idx]
// Function Description:
// Complete the dynamicArray function below.
// dynamicArray has the following parameters:
// - int n: the number of empty arrays to initialize in arr.
// - string queries[q]: query strings that contain 3 space-separated integers.
// Returns:
// * int[]: the results of each type 2 query in the order they are presented
// Input Format:
// The first line contains two space-separated integers, n, the size of arr to create, and q, the number of queries, respectively.
// Each of the q subsequent lines contains a query string, queries[i].
// Constraints:
// 1 <= n,q <= 10^5
// 0 <= x,y <= 10^9
// It is guaranteed that query type 2 will never query an empty array or index.

function dynamicArray(n, queries) {
    const arr = Array.from({length: n}, () => []);
    let lastAnswer = 0;
    const answers = [];
    
    for (let i = 0; i < queries.length; i++) {
        const [type, x, y] = queries[i];
        const idx = (x ^ lastAnswer) % n;
        if (type === 1) {
            arr[idx].push(y);
        } else if (type === 2) {
            lastAnswer = arr[idx][y % arr[idx].length];
            answers.push(lastAnswer);
        }
    }
    return answers;
}
// Example usage
let n3 = 2;
let queries3 = [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1]
];
console.log(dynamicArray(n3, queries3)); // Output: [7, 3]

// Running Time and Complexity
// Task:
// A prime is a natural number greater than 1 that has no positive divisors other than  and itself. 
// Given a number, n, determine and print whether it is Prime or Not prime.
// Note: If possible, try to come up with a O(sqrt of n) primality algorithm, 
// or see what sort of optimizations you come up with for an O(n) algorithm. 
// Input Format:
// The first line contains an integer, T, the number of test cases.
// Each of the T subsequent lines contains an integer, n, to be tested for primality.
// Constraints:
// 1 <= T <= 30
// 1 <= n <= 2x10^9

function isPrime(n4) {
    if(n4 <= 1) return false;
    if(n4 === 2) return true;
    if(n4 % 2 === 0) return false;
    const sqrtN = Math.sqrt(n4);
    for(let i = 3; i <= sqrtN; i +=2) {
        if(n4 % i === 0) return false;
    }
    return true;
}
// Example usage
console.log(isPrime(12) ? 'Prime' : 'Not prime'); // Not prime
console.log(isPrime(5) ? 'Prime' : 'Not prime');  // Prime
console.log(isPrime(7) ? 'Prime' : 'Not prime');  // Prime
console.log(isPrime(1) ? 'Prime' : 'Not prime');  // Not prime
console.log(isPrime(2) ? 'Prime' : 'Not prime');  // Prime
console.log(isPrime(97) ? 'Prime' : 'Not prime'); // Prime
// Test an Array of values
let numbers = [12, 5, 7, 1, 2, 97, 1000000007];
numbers.forEach(n5 => {
    console.log(n5 + ': ' + (isPrime(n5) ? 'Prime' : 'Not prime'));
});
// Grid Challenge
// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. 
// Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.
// Example:
// grid = ['abc','ade','efg']
// The grid is illustrated below.
// a b c
// a d e
// e f g
// The rows are already in alphabetical order. The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES. 
// Only elements within the same row can be rearranged. They cannot be moved to a different row.
// Function Description:
// Complete the gridChallenge function in the editor below.
// gridChallenge has the following parameter(s):
// * string grid[n]: an array of strings
// Returns:
// * string: either YES or NO
// Input Format:
// The first line contains t, the number of testcases.
// Each of the next t sets of lines are described as follows:
// - The first line contains n, the number of rows and columns in the grid.
// - The next n lines contains a string of length n.
// Constraints:
// 1 <= t <= 100
// 1 <= n <= 100
// Each string consists of lowercase letters in the range ascii[a-z]

function gridChallenge(grid) {
    // Step 1: Sort each row
    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split('').sort().join('');
    }

    // Step 2: Check columns
    let n = grid.length;
    for (let col = 0; col < n; col++) {
        for (let row = 1; row < n; row++) {
            if (grid[row][col] < grid[row - 1][col]) {
                return "NO";
            }
        }
    }
    return "YES";
}
// Example usage
console.log(gridChallenge(['abc','ade','efg'])); // YES
console.log(gridChallenge(['ebacd','fghij','olmkn','trpqs','xywuv'])); // YES
console.log(gridChallenge(['mpxz','abcd','wlmf'])); // NO
console.log(gridChallenge(['abc','xyz','def'])); // YES
console.log(gridChallenge(['zyx','wvu','tsr'])); // NO

// Prime Dates
// Given two dates each in the format dd-mm-yyyy, you have to find the number of lucky dates between them (inclusive). 
// To see if a date is lucky,
// * Firstly, sequentially concatinate the date, month and year, into a new integer x erasing the leading zeroes.
// * Now if x is divisible by either 4 or 7, then we call the date a lucky date.
// For example, let's take the date "02-08-2024". After concatinating the day, month and year, we get x = 2082024. 
// As x is divisible by 4 so the date "02-08-2024" is called a lucky date.
// Debug the given function findPrimeDates and/or other lines of code, to find the correct lucky dates from the given input.
// Note: You can modify at most five lines in the given code and you cannot add or remove lines to the code.
// To restore the original code, click on the icon to the right of the language selector.
// Input Format:
// The only line of the input contains two strings u and v denoting the two dates following the format dd-mm-yyyy. 
// Consider, d is the day number, m is the month number and y is the year number.
// Note: Here m = 01 means January, m = 02 means February, m = 03 means March and so on and all the dates 
// follow the standard structure of English calender including the leap year.
// Constraints:
// 1 <= d1,d2 <= 31
// 1 <= m1,m2 <= 12
// 1000 <= y1 <= y2 <= 9999

function isLuckyDate(d, m, y) {
    // Concatenate day, month, year without leading zeros
    let x = Number(d) + '' + Number(m) + '' + Number(y);
    x = parseInt(x, 10);
    return (x % 4 === 0 || x % 7 === 0);
}

function nextDate(d, m, y) {
    const daysInMonth = [
        31,
        (y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)) ? 29 : 28,
        31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];
    d++;
    if (d > daysInMonth[m - 1]) {
        d = 1;
        m++;
        if (m > 12) {
            m = 1;
            y++;
        }
    }
    return [d, m, y];
}

function countLuckyDates(start, end) {
    // start and end are strings in 'dd-mm-yyyy' format
    let [d1, m1, y1] = start.split('-').map(Number);
    let [d2, m2, y2] = end.split('-').map(Number);

    let count = 0;
    while (true) {
        if (isLuckyDate(d1, m1, y1)) count++;
        if (d1 === d2 && m1 === m2 && y1 === y2) break;
        [d1, m1, y1] = nextDate(d1, m1, y1);
    }
    return count;
}
// Example usage
console.log(countLuckyDates('02-08-2024', '04-08-2024')); // Output: 2
console.log(countLuckyDates('01-01-2025', '10-01-2025')); // Try a range!
console.log(countLuckyDates('02-08-2025', '04-09-2025')); // Output: 5
console.log(countLuckyDates('02-08-2024', '04-08-2024'));
// Output: 2

console.log(countLuckyDates('02-08-2025', '04-09-2025'));
// Output: 5

// Watson gives Sherlock an array of integers. His challenge is to find an element of the array such 
// that the sum of all elements to the left is equal to the sum of all elements to the right.
// Example:
// arr = [5,6,8,11]
// 8 is between two subarrays that sum to 11.
// arr =[1]
// The answer is [1] since left and right sum to 0.
// You will be given arrays of integers and must determine whether there is an element that meets the criterion. 
// If there is, return YES. Otherwise, return NO.
// Function Description:
// Complete the balancedSums function in the editor below.
// balancedSums has the following parameter(s):
// * int arr[n]: an array of integers
// Returns:
// * string: either YES or NO
// Input Format:
// The first line contains T, the number of test cases.
// The next T pairs of lines each represent a test case.
// - The first line contains n, the number of elements in the array arr.
// - The second line contains n space-separated integers arr[i] where 0 <= i < n.
// Constraints:
// 1 <= T <= 10
// 1 <= n <= 10^5
// 1 <= arr[i] <= 2x10^4
// 0 <= i < n

function balancedSums(arr) {
    let totalSum = arr.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (leftSum === totalSum - leftSum - arr[i]) {
            return "YES";
        }
        leftSum += arr[i];
    }
    return "NO";
}

// Example usage
console.log(balancedSums([5, 6, 8, 11])); // YES (8 is the pivot)
console.log(balancedSums([1]));           // YES (only one element)
console.log(balancedSums([1, 2, 3]));     // NO
console.log(balancedSums([2, 0, 0, 0]));  // YES (2 is the pivot)

// Recursive Digit Sum
// We define super digit of an integer  using the following rules:
// Given an integer, we need to find the super digit of the integer.
// * If x has only 1 digit, then its super digit is x.
// * Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
// For example, the super digit of 9875 will be calculated as:

// 	super_digit(9875)   	9+8+7+5 = 29 
// 	super_digit(29) 	2 + 9 = 11
// 	super_digit(11)		1 + 1 = 2
// 	super_digit(2)		= 2  
// Example:
// n =' 9875'
// k = 4
// The number p is created by concatenating the string  n k times so the initial p = 9875987598759875.

//     superDigit(p) = superDigit(9875987598759875)
//                   9+8+7+5+9+8+7+5+9+8+7+5+9+8+7+5 = 116
//     superDigit(p) = superDigit(116)
//                   1+1+6 = 8
//     superDigit(p) = superDigit(8)
// All of the digits of p sum to 116. The digits of 116 sum to 8. 8 is only one digit, so it is the super digit.
// Function Description:
// Complete the function superDigit in the editor below. It must return the calculated super digit as an integer.
// superDigit has the following parameter(s):
// * string n: a string representation of an integer.
// * int k: the times to concatenate n to make p.
// Returns:
// * int: the super digit of n repeated k times.
// Input Format:
// The first line contains two space separated integers, n and k.
// Constraints:
// 1 <= n < 10^100000
// 1 <= k <= 10^5

function superDigit(n, k) {
    // Helper function to recursively compute super digit
    function helper(str) {
        if (str.length === 1) return parseInt(str, 10);
        let sum = 0;
        for (let c of str) sum += parseInt(c, 10);
        return helper(sum.toString());
    }
    // Initial sum of digits of n, then multiply by k
    let initialSum = 0;
    for (let c of n) initialSum += parseInt(c, 10);
    let p = (initialSum * k).toString();
    return helper(p);
}
// Example usage
console.log(superDigit("148", 3)); // Output: 3
console.log(superDigit("9875", 4)); // Output: 8
console.log(superDigit("123", 3)); // Output: 9

// Counter Game
// Louise and Richard have developed a numbers game. They pick a number and check to see if it is a power of 2. 
// If it is, they divide it by 2. If not, they reduce it by the next lower number which is a power of 2. 
// Whoever reduces the number to 1 wins the game. Louise always starts.
// Given an initial value, determine who wins the game.
// Example:
// n = 132
// It's Louise's turn first. She determines that 132 is not a power of 2. The next lower power of 2 is 128, 
// so she subtracts that from 132 and passes 4 to Richard. 4 is a power of 2, so Richard divides it by 2 and passes 2 to Louise. 
// Likewise, 2 is a power so she divides it by 2 and reaches 1. She wins the game.
// Update If they initially set counter to 1, Richard wins. Louise cannot make a move so she loses.
// Function Description:
// Complete the counterGame function in the editor below.
// counterGame has the following parameter(s):
// * int n: the initial game counter value
// Returns:
// * string: either Richard or Louise
// Input Format:
// The first line contains an integer t, the number of testcases.
// Each of the next t lines contains an integer n, the initial value for each game.
// Constraints:
// 1 <= t <= 10
// 1 <= n <= 2^64 - 1

function counterGame(n) {
    n = BigInt(n);
    let moves = 0;
    while (n > 1n) {
        // If n is a power of 2
        if ((n & (n - 1n)) === 0n) {
            n = n / 2n;
        } else {
            // Reduce by the largest power of 2 less than n
            let p = 1n;
            while (p * 2n < n) {
                p *= 2n;
            }
            n -= p;
        }
        moves++;
    }
    return (moves % 2 === 0) ? "Javor" : "Pepa";
}
// Example usage
console.log(counterGame(132)); // "Louise"
console.log(counterGame(1));   // "Richard"
console.log(counterGame(6));   // "Richard"
console.log(counterGame(1560834904)); // "Richard"
console.log(counterGame(1000000000000000000)); // "Louise"

// Nested Logic
// Task:
// Your local library needs your help! Given the expected and actual return dates for a library book, 
// create a program that calculates the fine (if any). The fee structure is as follows:
// 1. If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0).
// 2. If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, 
//   fine = 15 Hackos X (the number of days late).
// 3. If the book is returned after the expected return month but still within the same calendar year as the expected return date, the 
//   fine = 500 Hackos X (the number of months late).
// 4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000 Hackos.
// Example:
// d1, m1, y1 = 12312014 returned date
// d2, m2, y2 = 112015 due date
// The book is returned on time, so no fine is applied.
// d1, m1, y1 = 112015 returned date
// d2, m2, y2 = 12312014 due date
// The book is returned in the following year, so the fine is a fixed 10000.
// Input Format:
// The first line contains 3 space-separated integers denoting the respective day, month, and year on which the book was actually returned.
// The second line contains 3 space-separated integers denoting the respective day, month, and year on which the book was expected to be returned (due date).
// Constraints:
// 1 <= D <= 31
// 1 <= M <= 12
// 1 <= Y <= 3000
// It is guaranteed that the dates will be valid Gregorian calendar dates.

function libraryFine(actual, due) {
    // actual and due are arrays: [day, month, year]
    const [d1, m1, y1] = actual;
    const [d2, m2, y2] = due;
    let fine = 0;

    if (y1 > y2) {
        fine = 10000;
    } else if (y1 === y2 && m1 > m2) {
        fine = 500 * (m1 - m2);
    } else if (y1 === y2 && m1 === m2 && d1 > d2) {
        fine = 15 * (d1 - d2);
    }
    return fine;
}
// Example usage
console.log(libraryFine([31, 12, 2014], [1, 1, 2015])); // 0 (returned early)
console.log(libraryFine([1, 2, 2015], [1, 1, 2015]));   // 500 (1 month late)
console.log(libraryFine([2, 1, 2016], [1, 1, 2015]));   // 10000 (1 year late)
console.log(libraryFine([1, 1, 2015], [1, 1, 2015]));   // 0 (on time)
console.log(libraryFine([9, 6, 2015], [6, 6, 2015]));   // 45 (3 days late)
console.log(libraryFine([9, 6, 2015], [6, 6, 2015])); // Output: 45
console.log(libraryFine([1, 1, 2015], [1, 1, 2015])); // Output: 0

// RegEx, Patterns, and Intro to Databases
// Task
// Consider a database table, Emails, which has the attributes First Name and Email ID. 
// Given N rows of data simulating the Emails table, print an alphabetically-ordered list of people 
// whose email address ends in @gmail.com.
// Input Format:
// The first line contains an integer, N, total number of rows in the table.
// Each of the N subsequent lines contains 2 space-separated strings denoting a person's first name and email ID, respectively.
// Constraints:
// 2 <= N <= 30
// Each of the first names consists of lower case letters [a-z] only.
// Each of the email IDs consists of lower case letters [a-z], @ and . only.
// The length of the first name is no longer than 20.
// The length of the email ID is no longer than 50.

function filterAndSortByGmail(namesEmails) {
    // namesEmails: array of [firstName, email] arrays
    const validNames = [];
    for (const [name, email] of namesEmails) {
        if (email.endsWith('@gmail.com')) {
            validNames.push(name);
        }
    }
    validNames.sort();
    return validNames;
}

// Example usage
const data02 = [
    ['riya', 'riya@gmail.com'],
    ['julia', 'julia@yahoo.com'],
    ['jane', 'jane@gmail.com'],
    ['javor', 'j.mladenoff@gmail.com'],
    ['alice', 'alice@outlook.com'],
    ['bob', 'bob@gmail.com']
];

const result = filterAndSortByGmail(data02);
console.log(result); // Output: ['bob', 'jane', 'riya']

// Bitwise AND
// Task:
// Given set S = {1,2,3,...,N}. Find two integers, A and B (where A < B), from set S such that the value of A & B is 
// the maximum possible and also less than a given integer, K. In this case, & represents the bitwise AND operator.
// Function Description:
// Complete the bitwiseAnd function in the editor below.
// bitwiseAnd has the following paramter(s):
// - int N: the maximum integer to consider
// - int K: the limit of the result, inclusive
// Returns:
// - int: the maximum value of A & B within the limit.
// Input Format:
// The first line contains an integer, T, the number of test cases.
// Each of the T subsequent lines defines a test case as 2 space-separated integers, N and K, respectively.
// Constraints:
// 1 <= T <= 10^3
// 2 <= N <= 10^3
// 2 <= K <= N

function bitwiseAnd(N, K) {
    // If (K-1 | K) <= N, then K-1 is achievable as A & B
    // Otherwise, the best we can do is K-2 or lower
    let candidate = (K - 1) | K;
    if (candidate <= N) {
        return K - 1;
    } else {
        return K - 2;
    }
}

// Example usage
console.log(bitwiseAnd(5, 2)); // Output: 1
console.log(bitwiseAnd(8, 5)); // Output: 4
console.log(bitwiseAnd(2, 2)); // Output: 0


// Sum vs XOR
// Given an integer n, find each x such that:
// * 0 <= x <= n
// n + x = n (+) x
// where (+) denotes the bitwise XOR operator. Return the number of x's satisfying the criteria.
// Example:
// n = 4
// There are four values that meet the criteria:
// 4 + 0 = 4 (+) 0 = 4
// 4 + 1 = 4 (+) 1 = 5
// 4 + 2 = 4 (+) 2 = 6
// 4 + 3 = 4 (+) 3 = 7
// Return 4.
// Function Description:
// Complete the sumXor function in the editor below.
// sumXor has the following parameter(s):
// - int n: an integer
// Returns:
// - int: the number of values found
// Input Format
// A single integer, n.
// Constraints:
// 0 <= n <= 10^15
// Subtasks:
// 0 <= n <= 100 for 60% of the maximum score

function sumXor(n) {
    if (n === 0) return 1;
    let count = 0;
    while (n > 0) {
        if ((n & 1) === 0) count++;
        n = n >> 1;
    }
    return 1 << count;
}

// Example usage
console.log(sumXor(4)); // Output: 4
console.log(sumXor(5)); // Output: 2
console.log(sumXor(0)); // Output: 1

// Palindrome Index
// Given a string of lowercase letters in the range ascii[a-z], determine
// the index of a character that can be removed to make the string a palindrome.
// There may be more than one solution, but any will do.
// If the word is already a palindrome or there is no solution, return -1.
// Otherwise, return the index of a character to remove.
// Example:
// s = 'bcbc'
// Either remove 'b' at index 0 or 'c' at index 3.
// Function Description:
// Complete the palindromeindex function in the editor below.
// It has the following parameters:
// * string s: a string to analyze.
// Returns:
// * int: the index of the character to remove or -1
// Input format:
// The first line contains an integer q, the number of queries.
// Each of the next q lines contains a query string s.
// Constraints:
// 1 <= q <= 20
// 1 <= length of s <= 10^5 + 5
// All characters are in the range ascii[a-z]
function isPalindrome01(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}
function palindromeIndex(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            if (isPalindrome01(s, left + 1, right)) return left;
            if (isPalindrome01(s, left, right - 1)) return right;
            return -1;
        }
        left++;
        right--;
    }
    return -1;
}

// Example usage
console.log(palindromeIndex('bcbc')); // Output: 0 or 3
console.log(palindromeIndex('aaab')); // Output: 3
console.log(palindromeIndex('baa'));  // Output: 0
console.log(palindromeIndex('aaa'));  // Output: -1

// Between Two Sets
// There will be two arrays of integers. Determine all integers
// that satisfy the following two conditions:
// 1. The elements of the first array all factors of the integer being considered.
// 2. The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays.
// Determine how many such numbers exist.
// Example:
// a = [2,6]
// b = [24,36]
// There are two numbers between the arrays: 6 and 12
// 6%2 = 0,6%6 = 0,24%6 = 0 and 36%6 = 0 for the first value.
// 12%2 = 0,12%6 = 0 and 24%12 = 0, 36%12 = 0 for the second value. Return 2
// Function Description:
// Complete the getTotalX function below. It should return
// the number of integers that are between the sets,
// getTotalX has the following parameters:
// * int a[n]: an array of integers
// * int b[m]: an array of integers
// Returns:
// * int: the number of integers that are between the sets
// Input format:
// The first line contains two space-separated integers, n and m, the number of elements
// in arrays a and b.
// The second line contains n distinct space-separated integers a[i] where ) <= i < n.
// The third line contains m distinct space-separated integers b[j] where ) <=j < m.
// Constraints:
// 1 <= n,m <= 10
// 1 <= a[i] <= 100
// 1 <= b[j] <= 100

function gcd(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function getTotalX(a, b) {
    // Step 1: LCM of all elements in a
    let l = a.reduce((acc, val) => lcm(acc, val));
    // Step 2: GCD of all elements in b
    let g = b.reduce((acc, val) => gcd(acc, val));
    // Step 3: Count multiples of l that exactly divide g
    let count = 0;
    for (let x = l; x <= g; x += l) {
        if (g % x === 0) count++;
    }
    return count;
}

// Example usage
console.log(getTotalX([2, 6], [24, 36])); // Output: 2


// Anagram
// Two words are anagrams of one another if their letters can be rearranged to form the other word.
// Given a string, split it into two contiguous substrings of equal length.
// Determine the minimum number of characters to change to make
// the two substrings into anagrams of one another.
// Example:
// s = abccde
// Break s into two parts: 'abc' and 'cde'. Note that all letters have been
// used, the substrings are contiguous and their lengths are equal.
// Now you can change 'a' and 'b' in the first substring to 'd' and 'e'
// to have 'dec' and 'cde' which are anagrams. Two changes were necessary.
// Function description:
// Complete the anagram function in the editor below.
// anagram has the following parameters:
// * string s: a string
// Returns:
// * int: the minimum number of characters to change or -1.
// Input format:
// The first line will contain an integer, q, the number of test cases.
// Each test case will contain a string s.
// Constraints:
// 1 <= q <= 100
// 1 <= |s| <= 10^4
// s consists only of characters in the range ascii[a-z]

function anagram(s) {
    if (s.length % 2 !== 0) return -1;
    const mid = s.length / 2;
    const a = s.slice(0, mid);
    const b = s.slice(mid);

    // Frequency count for a and b
    const countA = Array(26).fill(0);
    const countB = Array(26).fill(0);

    for (let i = 0; i < mid; i++) {
        countA[a.charCodeAt(i) - 97]++;
        countB[b.charCodeAt(i) - 97]++;
    }

    // Count how many letters in a are not matched in b
    let changes = 0;
    for (let i = 0; i < 26; i++) {
        if (countA[i] > countB[i]) {
            changes += countA[i] - countB[i];
        }
    }
    return changes;
}
// Example usage
console.log(anagram("abccde")); // Output: 2
console.log(anagram("aaabbb")); // Output: 3
console.log(anagram("mnop"));   // Output: 2
console.log(anagram("xyyx"));   // Output: 0
console.log(anagram("xaxbbbxx")); // Output: 1
console.log(anagram("abc"));    // Output: -1

// XOR Strings 2
// Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.
// To know more about XOR Click Here
// Debug the given function strings_xor to find the XOR of the two given strings appropriately.
// Note: You can modify at most three lines in the given code and you cannot add or remove lines to the code.
// To restore the original code, click on the icon to the right of the language selector.
// Input Format:
// The input consists of two lines. The first line of the input contains the first string, s, 
// and the second line contains the second string, t.
// Constraints:
// 1 <= |s| <= 10^4
// |s| = |t|

function strings_xor02(s, t) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[i]) {
            res += "0";
        } else {
            res += "1";
        }
    }
    return res;
}
// Example usage
console.log(strings_xor02("10101", "00101")); // Output: "10000"
console.log(strings_xor02("1111", "0000"));   // Output: "1111"
console.log(strings_xor02("1100", "1010"));   // Output: "0110"
console.log(strings_xor02("0000", "0000"));   // Output: "0000"
console.log(strings_xor02("1111", "1111"));   // Output: "0000"


// Bomberman
// Bomberman lives in a rectangular grid. Each cell in the grid either contains a bomb or nothing at all.
// Each bomb can be planted in any cell of the grid but once planted, it will detonate after exactly 3 seconds. 
// Once a bomb detonates, it's destroyed — along with anything in its four neighboring cells. 
// This means that if a bomb detonates in cell i,j, any valid cells (i+-1,j) and (i,j+-1) are cleared. 
// If there is a bomb in a neighboring cell, the neighboring bomb is destroyed without detonating, so there's no chain reaction.
// Bomberman is immune to bombs, so he can move freely throughout the grid. Here's what he does:
// 1. Initially, Bomberman arbitrarily plants bombs in some of the cells, the initial state.
// 2. After one second, Bomberman does nothing.
// 3. After one more second, Bomberman plants bombs in all cells without bombs, thus filling the whole grid with bombs. No bombs detonate at this point.
// 4. After one more second, any bombs planted exactly three seconds ago will detonate. Here, Bomberman stands back and observes.
// 5. Bomberman then repeats steps 3 and 4 indefinitely.
// Note that during every second Bomberman plants bombs, the bombs are planted simultaneously (i.e., at the exact same moment), 
// and any bombs planted at the same time will detonate at the same time.
// Given the initial configuration of the grid with the locations of Bomberman's first batch of planted bombs, 
// determine the state of the grid after N seconds.
// For example, if the initial grid looks like:

// ...
// .O.
// ...
// it looks the same after the first second. After the second second, Bomberman has placed all his charges:

// OOO
// OOO
// OOO
// At the third second, the bomb in the middle blows up, emptying all surrounding cells:

// O.O
// ...
// O.O
// Function Description:
// Complete the bomberMan function in the editory below.
// bomberMan has the following parameter(s):
// * int n: the number of seconds to simulate
// * string grid[r]: an array of strings that represents the grid
// Returns:
// * string[r]: n array of strings that represent the grid in its final state
// Input Format:
// The first line contains three space-separated integers r, c, and n, The number of rows, columns and seconds to simulate.
// Each of the next r lines contains a row of the matrix as a single string of c characters. 
// The . character denotes an empty cell, and the O character (ascii 79) denotes a bomb.
// Constraints:
// 1 <= r,c <= 200
// 1 <= n <= 10^9
// Subtask:
// 1 <= n <= 200 for 40% of the maximum score.

function bomberMan(n, grid) {
    if (n === 1) return grid;
    if (n % 2 === 0) {
        // Full grid of bombs
        return grid.map(row => 'O'.repeat(row.length));
    }

    // Helper to detonate bombs
    function detonate(g) {
        const r = g.length, c = g[0].length;
        let result = Array.from({length: r}, () => Array(c).fill('O'));
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (g[i][j] === 'O') {
                    result[i][j] = '.';
                    if (i > 0) result[i-1][j] = '.';
                    if (i < r-1) result[i+1][j] = '.';
                    if (j > 0) result[i][j-1] = '.';
                    if (j < c-1) result[i][j+1] = '.';
                }
            }
        }
        return result.map(row => row.join(''));
    }

    // First detonation
    let first = detonate(grid);
    // Second detonation
    let second = detonate(first);

    // Pattern repeats every 4 after n=3
    if (n % 4 === 3) {
        return first;
    } else {
        return second;
    }
}
// Example usage
console.log(bomberMan(3, ['.O.', 'OOO', '.O.'])); // Output: ['O.O', '...', 'O.O']
console.log(bomberMan(5, ['.O.', 'OOO', '.O.'])); // Output: ['OOO', 'OOO', 'OOO']
console.log(bomberMan(1, ['.O.', 'OOO', '.O.'])); // Output: ['.O.', 'OOO', '.O.']
// Additional test cases
console.log(bomberMan(2, ['.O.', 'OOO', '.O.'])); // Output: ['OOO', 'OOO', 'OOO']
console.log(bomberMan(4, ['.O.', 'OOO', '.O.'])); // Output: ['O.O', '...', 'O.O']
// Additional test cases
console.log(bomberMan(6, ['.O.', 'OOO', '.O.'])); // Output: ['OOO', 'OOO', 'OOO']

// New Year Chaos
// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. 
// Each person wears a sticker indicating their initial position in the queue from 1 to n. 
// Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. 
// One person can bribe at most two others.
// Determine the minimum number of bribes that took place to get to a given queue order. 
// Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.
// Example:
// q = [1,2,3,5,4,6,7,8]
// If person 5 bribes person 4, the queue will look like this: 1,2,3,5,4,6,7,8. Only 1 bribe is required. Print 1.
// q = [4,1,2,3]
// Person 4 had to bribe 3 people to get to the current position. Print Too chaotic.
// Function Description:
// Complete the function minimumBribes in the editor below.
// minimumBribes has the following parameter(s):
// * int q[n]: the positions of the people after all bribes
// Returns:
// * No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than 2 people.
// Input Format:
// The first line contains an integer t, the number of test cases.
// Each of the next t pairs of lines are as follows:
// - The first line contains an integer t, the number of people in the queue
// - The second line has n space-separated integers describing the final state of the queue.
// Constraints:
// 1 <= t <= 10
// 1 <= n <= 10^5
// Subtasks:
// For 60% score 1 <= n <= 10^3
// For 100% score 1 <= n <= 10^5

function minimumBribes(q) {
    let bribes = 0;
    let chaotic = false;
    for (let i = 0; i < q.length; i++) {
        // Check if any person has moved more than 2 positions ahead
        if (q[i] - (i + 1) > 2) {
            console.log("Too chaotic");
            return;
        }
        // Only check positions where a bribe could have happened
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) bribes++;
        }
    }
    console.log(bribes);
}
// Example usage
minimumBribes([2, 1, 5, 3, 4]); // Output: 3
minimumBribes([2, 5, 1, 3, 4]); // Output: Too chaotic
// Additional test cases
minimumBribes([1, 2, 3, 4, 5]); // Output: 0 (no bribes)
minimumBribes([5, 1, 2, 3, 4]); // Output: Too chaotic


// Sherlock and the Valid String
// Sherlock considers a string to be valid if all characters of the string appear the same number of times. 
// It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. 
// Given a string s, determine if it is valid. If so, return YES, otherwise return NO.
// Example:
// s = abc
// This is a valid string because frequencies are {a:1,b:1,c:1}.
// s = abcc
// This is a valid string because we can remove one c and have 1 of each character in the remaining string.
// s = abccc
// This string is not valid as we can only remove 1 occurrence of c. 
// That leaves character frequencies of {a:1,b:1,c:2}.
// Function Description:
// Complete the isValid function in the editor below.
// isValid has the following parameter(s):
// * string s: a string
// Returns:
// * string: either YES or NO
// Input Format:
// A single string s.
// Constraints:
// 1 <= |s| <= 10^5
// Each character s[i] belongs to ascii[a-z]

function isValid(s) {
    // Count frequency of each character
    const freq = {};
    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Count frequencies of the frequencies
    const countFreq = {};
    for (const count of Object.values(freq)) {
        countFreq[count] = (countFreq[count] || 0) + 1;
    }

    const keys = Object.keys(countFreq).map(Number);

    if (keys.length === 1) {
        // All characters occur the same number of times
        return "YES";
    }
    if (keys.length === 2) {
        // Two different frequencies
        const [f1, f2] = keys;
        const [c1, c2] = [countFreq[f1], countFreq[f2]];

        // Check if one frequency occurs once and is either 1 or differs by 1 from the other
        if (
            (c1 === 1 && (f1 - 1 === 0 || f1 - 1 === f2)) ||
            (c2 === 1 && (f2 - 1 === 0 || f2 - 1 === f1))
        ) {
            return "YES";
        }
    }
    return "NO";
}
// Example usage
console.log(isValid("aabbcc")); // Output: "YES"
console.log(isValid("aabbc"));  // Output: "YES"
console.log(isValid("aabbccdde")); // Output: "NO"
console.log(isValid("abc"));    // Output: "YES"
console.log(isValid("abcc"));   // Output: "YES"
console.log(isValid("abccc"));  // Output: "NO"

// Climbing the Leaderboard
// An arcade game player wants to climb to the top of the leaderboard and track their ranking. 
// The game uses Dense Ranking, so its leaderboard works like this:
// * The player with the highest score is ranked number 1 on the leaderboard.
// * Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
// Example:
// ranked = [100,90,90,80]
// player = [70,80,105]
// The ranked players will have ranks 1, 2, 2, and 3, respectively. If the player's scores are 70, 80 and 105, 
// their rankings after each game are 4th, 3rd and 1st. Return [4,3,1].
// Function Description:
// Complete the climbingLeaderboard function in the editor below.
// climbingLeaderboard has the following parameter(s):
// * int ranked[n]: the leaderboard scores
// * int player[m]: the player's scores
// Returns:
// * int[m]: the player's rank after each new score
// Input Format:
// The first line contains an integer n, the number of players on the leaderboard.
// The next line contains n space-separated integers ranked[i], the leaderboard scores in decreasing order.
// The next line contains an integer, m, the number games the player plays.
// The last line contains m space-separated integers player[j], the game scores.
// Constraints:
// 1 <= n <= 2x10^5
// 1 <= m <= 2x10^5
// 0 <= ranked[i] <= 10^9 for 0 <= i < n
// 0 <= player[j] <= 10^9 for 0 <= j < m
// The existing leaderboard, ranked, is in descending order.
// The player's scores, player, are in ascending order.
// Subtask:
// For 60% of the maximum score:
// 1 <= n <= 200
// 1 <= m <= 200
function climbingLeaderboard(ranked, player) {
    // Remove duplicates from ranked to get unique scores in descending order
    const uniqueRanked = [];
    for (let i = 0; i < ranked.length; i++) {
        if (i === 0 || ranked[i] !== ranked[i - 1]) {
            uniqueRanked.push(ranked[i]);
        }
    }

    const result = [];
    let i = uniqueRanked.length - 1;
    for (const score of player) {
        // Move up the leaderboard as long as player score >= ranked score
        while (i >= 0 && score >= uniqueRanked[i]) {
            i--;
        }
        // Rank is index + 2 (since index is 0-based and we want next rank after last checked)
        result.push(i + 2);
    }
    return result;
}
// Example usage
console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105])); // Output: [4, 3, 1]
console.log(climbingLeaderboard([100, 90, 90, 80], [50, 60, 70])); // Output: [5, 5, 4]
// Additional test cases
console.log(climbingLeaderboard([200, 150, 150, 100], [50, 100, 200])); // Output: [4, 3, 1]
console.log(climbingLeaderboard([300, 200, 100], [400, 250, 150])); // Output: [1, 2, 3]

// Reverse a linked list
// Given the pointer to the head node of a linked list, change the next pointers of the nodes so that their order is reversed. 
// The head pointer given may be null meaning that the initial list is empty.
// Example:
// head references the list 1 --> 2 --> 3 --> NULL
// Manipulate the next pointers of each node in place and return head, now referencing the head of the list 3 --> 2 --> 1 --> NULL.
// Function Description:
// Complete the reverse function in the editor below.
// reverse has the following parameter:
// * SinglyLinkedListNode pointer head: a reference to the head of a list
// Returns:
// * SinglyLinkedListNode pointer: a reference to the head of the reversed list
// Input Format:
// The first line contains an integer t, the number of test cases.
// Each test case has the following format:
// The first line contains an integer n, the number of elements in the linked list.
// Each of the next n lines contains an integer, the data values of the elements in the linked list.
// Constraints:
// 1 <= t <= 10
// 1 <= n <= 1000
// 1 <= list[i] <= 1000, where list[i] is the i-th element in the list.

function reverse(llist) {
    let prev = null;
    let current = llist;
    while (current !== null) {
        let nextNode = current.next; // Store next node
        current.next = prev;         // Reverse current node's pointer
        prev = current;              // Move prev to current node
        current = nextNode;          // Move to next node
    }
    return prev; // New head of reversed list
}
// Example usage
// Node constructor
function SinglyLinkedListNode(data) {
    this.data = data;
    this.next = null;
}

// Build a linked list from an array
function buildLinkedList(arr) {
    let head = null, tail = null;
    for (let val of arr) {
        let node = new SinglyLinkedListNode(val);
        if (!head) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
    }
    return head;
}

// Print linked list to console
function printLinkedList(head) {
    let res = [];
    while (head) {
        res.push(head.data);
        head = head.next;
    }
    console.log(res.join(' -> '));
}
// Example usage
// Create a linked list: 1 -> 2 -> 3
(function() {
    let head = buildLinkedList([1, 2, 3]);
    console.log("Original list:");
    printLinkedList(head);

    // Reverse the list
    let reversedHead = reverse(head);
    console.log("Reversed list:");
    printLinkedList(reversedHead);
})();
// Additional test cases
(function() {
    // Create a linked list: 4 -> 5 -> 6
    let head = buildLinkedList([4, 5, 6]);
    console.log("Original list:");
    printLinkedList(head);

    // Reverse the list
    let reversedHead = reverse(head);
    console.log("Reversed list:");
    printLinkedList(reversedHead);
})();
// Create a linked list: 7 -> 8 -> 9
(function() {
    let head = buildLinkedList([7, 8, 9]);
    console.log("Original list:");
    printLinkedList(head);

    // Reverse the list
    let reversedHead = reverse(head);
    console.log("Reversed list:");
    printLinkedList(reversedHead);
})();

// Reverse a doubly linked list
// Given the pointer to the head node of a doubly linked list, reverse the order of the nodes in place. 
// That is, change the next and prev pointers of the nodes so that the direction of the list is reversed. 
// Return a reference to the head node of the reversed list.
// Note: The head node might be NULL to indicate that the list is empty.
// Function Description:
// Complete the reverse function in the editor below.
// reverse has the following parameter(s):
// * DoublyLinkedListNode head: a reference to the head of a DoublyLinkedList
// Returns:
// * DoublyLinkedListNode: a reference to the head of the reversed list
// Input Format:
// The first line contains an integer t, the number of test cases.
// Each test case is of the following format:
// The first line contains an integer n, the number of elements in the linked list.
// The next n lines contain an integer each denoting an element of the linked list.
// Constraints:
// 1 <= t <= 10
// 0 <= n <= 1000
// 0 <= DoublyLinkedListNode.data <= 1000

function reverse01(llist) {
    // Write your code here
	let current = llist;
	let temp = null;
	let newHead = null;
	while(current !== null) {
		// Swap next and prev for current node
		temp = current.prev;
		current.prev = current.next;
		current.next = temp;
		// Move to the next node in the original list(which is prev now)
		newHead = current;
		current = current.prev;
	}
	return newHead;
}
// Example usage
// Node constructor 
function DoublyLinkedListNode(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}
// Build a doubly linked list from an array
function buildDoublyLinkedList(arr) {
    let head = null, tail = null;
    for (let val of arr) {
        let node = new DoublyLinkedListNode(val);
        if (!head) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            node.prev = tail;
            tail = node;
        }
    }
    return head;
}
// Print doubly linked list to console
function printDoublyLinkedList(head) {
    let res = [];
    while (head) {
        res.push(head.data);
        head = head.next;
    }
    console.log(res.join(' <-> '));
}
// Example usage
(function() {
    // Create a doubly linked list: 1 <-> 2 <-> 3
    let head = buildDoublyLinkedList([1, 2, 3]);
    console.log("Original list:");
    printDoublyLinkedList(head);

    // Reverse the list
    let reversedHead = reverse01(head);
    console.log("Reversed list:");
    printDoublyLinkedList(reversedHead);
})();
// Additional test cases
(function() {
    // Create a doubly linked list: 4 <-> 5 <-> 6
    let head = buildDoublyLinkedList([4, 5, 6]);
    console.log("Original list:");
    printDoublyLinkedList(head);

    // Reverse the list
    let reversedHead = reverse01(head);
    console.log("Reversed list:");
    printDoublyLinkedList(reversedHead);
})();
(function() {
    // Create a doubly linked list: 7 <-> 8 <-> 9
    let head = buildDoublyLinkedList([7, 8, 9]);
    console.log("Original list:");
    printDoublyLinkedList(head);

    // Reverse the list
    let reversedHead = reverse01(head);
    console.log("Reversed list:");
    printDoublyLinkedList(reversedHead);
})();

// Insert a node at a specific position in a linked list
// Given the pointer to the head node of a linked list and an integer to insert at a certain position, create a new node 
// with the given integer as its data attribute, insert this node at the desired position and return the head node.
// A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. 
// The head pointer given may be null meaning that the initial list is empty.
// Example:
// head refers to the first node in the list 1 --> 2 --> 3
// data = 4
// position = 2
// Insert a node at position 2 with data = 4. The new list is 1 --> 2 --> 4 --> 3
// Function Description: 
// Complete the function insertNodeAtPosition in the editor below. It must return a reference to the head node of your finished list.
// insertNodeAtPosition has the following parameters:
// * head: a SinglyLinkedListNode pointer to the head of the list
// * data: an integer value to insert as data in your new node
// * position: an integer position to insert the new node, zero based indexing
// Returns:
// * SinglyLinkedListNode pointer: a reference to the head of the revised list
// Input Format:
// The first line contains an integer n, the number of elements in the linked list.
// Each of the next n lines contains an integer SinglyLinkedListNode[i].data.
// The next line contains an integer data, the data of the node that is to be inserted.
// The last line contains an integer position.
// Constraints:
// 1 <= n <= 1000
// 1 <= SinglyLinkedListNode[i].data <= 1000, where SinglyLinkedListNode[i] is the i-th element of the linked list
// 0 <= position <= n

function insertNodeAtPosition(llist, data, position) {
    const newNode = new SinglyLinkedListNode(data);

    // Inserting at the head (position 0)
    if (position === 0) {
        newNode.next = llist;
        return newNode;
    }

    let current = llist;
    let currentPosition = 0;

    // Traverse to the node just before the insertion point
    while (current !== null && currentPosition < position - 1) {
        current = current.next;
        currentPosition++;
    }

    // Insert the new node
    newNode.next = current.next;
    current.next = newNode;

    return llist;
}
// Example usage
// Node constructor
function SinglyLinkedListNode01(data) {
    this.data = data;
    this.next = null;
}
// Build a linked list from an array
function buildLinkedList01(arr) {
    let head = null, tail = null;
    for (let val of arr) {
        let node = new SinglyLinkedListNode01(val);
        if (!head) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
    }
    return head;
}
// Print linked list to console
function printLinkedList01(head) {
    let res = [];
    while (head) {
        res.push(head.data);
        head = head.next;
    }
    console.log(res.join(' -> '));
}
// Example usage
(function() {
    // Create a linked list: 1 -> 2 -> 3
    let head = buildLinkedList01([1, 2, 3]);
    console.log("Original list:");
    printLinkedList01(head);

    // Insert a new node with data = 4 at position 2
    head = insertNodeAtPosition(head, 4, 2);
    console.log("List after insertion:");
    printLinkedList01(head);
})();
// Additional test cases
(function() {
    // Create a linked list: 5 -> 6 -> 7
    let head = buildLinkedList01([5, 6, 7]);
    console.log("Original list:");
    printLinkedList01(head);

    // Insert a new node with data = 8 at position 1
    head = insertNodeAtPosition(head, 8, 1);
    console.log("List after insertion:");
    printLinkedList01(head);
})();
(function() {
    // Create a linked list: 9 -> 10 -> 11
    let head = buildLinkedList01([9, 10, 11]);
    console.log("Original list:");
    printLinkedList01(head);

    // Insert a new node with data = 12 at position 0 (head)
    head = insertNodeAtPosition(head, 12, 0);
    console.log("List after insertion:");
    printLinkedList01(head);
})();


// Merge two sorted linked lists
// Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. 
// Either head pointer may be null meaning that the corresponding list is empty.
// Example:
// headA refers to 1 --> 3 --> 7 --> NULL
// headB refers to 1 --> 2 --> NULL
// The new list is 1 --> 1 --> 2 --> 3 --> 7 --> NULL
// Function Description:
// Complete the mergeLists function in the editor below.
// mergeLists has the following parameters:
// * SinglyLinkedListNode pointer headA: a reference to the head of a list
// * SinglyLinkedListNode pointer headB: a reference to the head of a list
// Returns:
// * SinglyLinkedListNode pointer: a reference to the head of the merged list
// Input Format:
// The first line contains an integer t, the number of test cases.
// The format for each test case is as follows:
// The first line contains an integer n, the length of the first linked list.
// The next n lines contain an integer each, the elements of the linked list.
// The next line contains an integer m, the length of the second linked list.
// The next m lines contain an integer each, the elements of the second linked list.
// Constraints:
// 1 <= t <= 10
// 1 <= n,m <= 1000
// 1 <= list[i] <= 1000, where list[i] is the i-th element of the list

function mergeLists(head1, head2) {
    // Create a dummy node to simplify edge cases
    let dummy = new SinglyLinkedListNode02(0);
    let tail = dummy;

    let a = head1;
    let b = head2;

    while (a !== null && b !== null) {
        if (a.data <= b.data) {
            tail.next = a;
            a = a.next;
        } else {
            tail.next = b;
            b = b.next;
        }
        tail = tail.next;
    }

    // Attach the remaining nodes, if any
    if (a !== null) {
        tail.next = a;
    } else if (b !== null) {
        tail.next = b;
    }

    // Return the merged list, skipping the dummy node
    return dummy.next;
}
// Node constructor
function SinglyLinkedListNode02(data) {
    this.data = data;
    this.next = null;
}
// Build a linked list from an array
function buildLinkedList02(arr) {
    let head = null, tail = null;
    for (let val of arr) {
        let node = new SinglyLinkedListNode02(val);
        if (!head) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
    }
    return head;
}
// Print linked list to console
function printLinkedList02(head) {
    let res = [];
    while (head) {
        res.push(head.data);
        head = head.next;
    }
    console.log(res.join(' -> '));
}
// Example usage
(function() {
    // Create two linked lists: 1 -> 3 -> 7 and 1 -> 2
    let headA = buildLinkedList02([1, 3, 7]);
    let headB = buildLinkedList02([1, 2]);
    console.log("List A:");
    printLinkedList02(headA);
    console.log("List B:");
    printLinkedList02(headB);

    // Merge the lists
    let mergedHead = mergeLists(headA, headB);
    console.log("Merged list:");
    printLinkedList02(mergedHead);
})();
// Additional test cases
(function() {
    // Create two linked lists: 4 -> 5 -> 6 and 1 -> 2 -> 3
    let headA = buildLinkedList02([4, 5, 6]);
    let headB = buildLinkedList02([1, 2, 3]);
    console.log("List A:");
    printLinkedList02(headA);
    console.log("List B:");
    printLinkedList02(headB);

    // Merge the lists
    let mergedHead = mergeLists(headA, headB);
    console.log("Merged list:");
    printLinkedList02(mergedHead);
})();

// Ice Cream Parlor
// Two friends like to pool their money and go to the ice cream parlor. T
// hey always choose two distinct flavors and they spend all of their money.
// Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.
// Example: m = 6 cost=[1,3,4,5,6] 
// The two flavors that cost 1 and 5 meet the criteria. Using 1-based indexing, they are at indices 1 and 4.
// Function Description:
// Complete the icecreamParlor function in the editor below.
// icecreamParlor has the following parameter(s):
// * int m: the amount of money they have to spend
// * int cost[n]: the cost of each flavor of ice cream
// Returns:
// * int[2]: the indices of the prices of the two flavors they buy, sorted ascending
// Input Format:
// The first line contains an integer, t, the number of trips to the ice cream parlor. The next t sets of lines each describe a visit.
// Each trip is described as follows:
// 1. The integer m, the amount of money they have pooled.
// 2. The integer n, the number of flavors offered at the time.
// 3. n space-separated integers denoting the cost of each flavor: cost[cost[1],cost[2],...,cost[n]].
// Note: The index within the cost array represents the flavor of the ice cream purchased.
// Constraints:
// 1 <= t <= 50
// 2 <= m <= 10^4
// 2 <= n <= 10^4
// 1 <= cost[i] <= 10^4, for each i that belongs to [1,n]
// There will always be a unique solution.

function icecreamParlor(m, arr) {
    const flavorMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        const complement = m - arr[i];
        if (flavorMap.has(complement)) {
            return [flavorMap.get(complement), i + 1].sort((a, b) => a - b);
        }
        flavorMap.set(arr[i], i + 1);
    }
    return [];
}
// Example usage
console.log(icecreamParlor(6, [1, 3, 4, 5, 6])); // Output: [1, 4]
console.log(icecreamParlor(8, [2, 2, 4, 3])); // Output: [1, 2]
// Additional test cases
console.log(icecreamParlor(10, [1, 2, 3, 4, 5])); // Output: [1, 5]
console.log(icecreamParlor(5, [1, 2, 3, 4])); // Output: [1, 4]
console.log(icecreamParlor(7, [1, 2, 3, 4, 5])); // Output: [2, 3]

// Queue using two stacks
// A queue is an abstract data type that maintains the order in which elements were added to it, 
// allowing the oldest elements to be removed from the front and new elements to be added to the rear. 
// This is called a First-In-First-Out (FIFO) data structure because the first element added to the queue 
// (i.e., the one that has been waiting the longest) is always the first one to be removed.
// A basic queue has the following operations:
// * Enqueue: add a new element to the end of the queue.
// * Dequeue: remove the element from the front of the queue and return it.
// In this challenge, you must first implement a queue using two stacks. Then process q queries, 
// where each query is one of the following 3 types:
// 1: Enqueue element x into the end of the queue.
// 2: Dequeue the element at the front of the queue.
// 3: Print the element at the front of the queue.
// Input Format:
// The first line contains a single integer, q, denoting the number of queries.
// Each line i of the q subsequent lines contains a single query in the form described in the problem statement above. 
// All three queries start with an integer denoting the query type, but only query 1 is followed by an additional 
// space-separated value, x, denoting the value to be enqueued.
// Constraints:
// 1 <= q <= 10^5
// 1 <= type <= 3
// 1 <= |x| <= 10^9
// It is guaranteed that a valid answer exists for each query of type 3.

class QueueWithStacks {
    constructor() {
        this.enqueueStack = [];
        this.dequeueStack = [];
    }

    enqueue(x) {
        this.enqueueStack.push(x);
    }

    dequeue() {
        if (this.dequeueStack.length === 0) {
            while (this.enqueueStack.length > 0) {
                this.dequeueStack.push(this.enqueueStack.pop());
            }
        }
        return this.dequeueStack.pop();
    }

    front() {
        if (this.dequeueStack.length === 0) {
            while (this.enqueueStack.length > 0) {
                this.dequeueStack.push(this.enqueueStack.pop());
            }
        }
        return this.dequeueStack[this.dequeueStack.length - 1];
    }
}

// Example usage
// Create a queue instance
let q = new QueueWithStacks();

// Enqueue elements
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

// See the front element
console.log(q.front()); // Output: 10

// Dequeue elements
console.log(q.dequeue()); // Output: 10

// Check front after dequeue
console.log(q.front()); // Output: 20

// Enqueue another element
q.enqueue(40);

// Dequeue all elements
console.log(q.dequeue()); // Output: 20
console.log(q.dequeue()); // Output: 30
console.log(q.dequeue()); // Output: 40

// Try to dequeue from empty queue
console.log(q.dequeue()); // Output: undefined


// Waiter
// You are a waiter at a party. There is a pile of numbered plates. Create an empty answers array. 
// At each iteration, i, remove each plate from the top of the stack in order. 
// Determine if the number on the plate is evenly divisible by the i-th prime number. 
// If it is, stack it in pile B[i]. Otherwise, stack it in stack A[i]. 
// Store the values in B[i] from top to bottom in answers. In the next iteration, do the same with the values in stack A[i]. 
// Once the required number of iterations is complete, store the remaining values in A[i] in answers, again from top to bottom. 
// Return the answers array.
// Example:
// A = [2,3,4,5,6,7]
// q = 3
// An abbreviated list of primes is [2,3,5,7,11,13]. Stack the plates in reverse order.
// A[0] = [2,3,4,5,6,7]
// answers = []
// Begin iterations. On the first iteration, check if items are divisible by 2.
// A[1] = [7,5,3]
// B[1] = [6,4,2]
// Move B[1] elements to answers.
// answers = [2,4,6]
// On the second iteration, test if A[1] elements are divisible by 3.
// A[2] = [7,5]
// B[2] = [3]
// Move B[2] elmements to answers.
// answers = [2,4,6,3]
// And on the third iteration, test if A[2] elements are divisible by 5.
// A[3] = [7]
// B[3] = [5]
// Move B[3] elmements to answers.
// answers = [2,4,6,3,5]
// All iterations are complete, so move the remaining elements in A[3], from top to bottom, to answers.
// answers = [2,4,6,3,5,7]. Return this list.
// Function Description:
// Complete the waiter function in the editor below.
// waiter has the following parameters:
// * int number[n]: the numbers on the plates
// * int q: the number of iterations
// Returns:
// * int[n]: the numbers on the plates after processing
// Input Format:
// The first line contains two space separated integers, n and q.
// The next line contains n space separated integers representing the initial pile of plates, i.e., A.
// Constraints:
// 1 <= n <= 10^4
// 2 <= number[i] <= 10^4
// 1 <= q <= 1200

function waiter(number, q) {
    // Generate the first q primes
    function getPrimes(n) {
        const primes = [];
        let candidate = 2;
        while (primes.length < n) {
            let isPrime = true;
            for (const p of primes) {
                if (p * p > candidate) break;
                if (candidate % p === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes.push(candidate);
            }
            candidate++;
        }
        return primes;
    }

    const primes = getPrimes(q);
    let currentA = [...number];
    const answers = [];

    for (let i = 0; i < q; i++) {
        const prime = primes[i];
        const B = [];
        const newA = [];

        // Process currentA from top (end) to bottom (start)
        for (let j = currentA.length - 1; j >= 0; j--) {
            const num = currentA[j];
            if (num % prime === 0) {
                B.push(num);
            } else {
                newA.push(num);
            }
        }

        // Add B elements in top-to-bottom order (reverse B)
        answers.push(...B.reverse());
        currentA = newA;
    }

    // Add remaining elements in currentA (top to bottom)
    answers.push(...currentA.reverse());

    return answers;
}
// Example usage
console.log(waiter([3, 4, 7, 6, 5, 2], 3)); // Output: [2, 4, 6, 3, 5, 7]
// Additional test cases
console.log(waiter([1, 2, 3, 4, 5], 2)); // Output: [2, 4, 1, 3, 5]
console.log(waiter([10, 20, 30, 40, 50], 1)); // Output: [10, 20, 30, 40, 50]


// Balanced Brackets
// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].
// Two brackets are considered to be a matched pair if the an opening bracket (i.e., 
// (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. 
// There are three types of matched pairs of brackets: [], {}, and ().
// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. 
// For example, {[(])} is not balanced because the contents in between { and } are not balanced. 
// The pair of square brackets encloses a single, unbalanced opening bracket, (, and 
// the pair of parentheses encloses a single, unbalanced closing square bracket, ].
// By this logic, we say a sequence of brackets is balanced if the following conditions are met:
// * It contains no unmatched brackets.
// * The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
// Given n strings of brackets, determine whether each sequence of brackets is balanced. 
// If a string is balanced, return YES. Otherwise, return NO.
// Function Description:
// Complete the function isBalanced in the editor below.
// isBalanced has the following parameter(s):
// * string s: a string of brackets
// Returns:
// * string: either YES or NO
// Input Format:
// The first line contains a single integer n, the number of strings.
// Each of the next n lines contains a single string s, a sequence of brackets.
// Constraints:
// 1 <= n <= 10^3
// 1 <= |s| <= 10^3, where |s| is the length of the sequence.
// All characters in the sequences belong to {{, }, (, ), [, ]}.

function isBalanced(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
                return "NO";
            }
            stack.pop();
        }
    }
    return stack.length === 0 ? "YES" : "NO";
}
// Example usage
console.log(isBalanced("{[()]}")); // Output: "YES"
console.log(isBalanced("{[(])}")); // Output: "NO"
console.log(isBalanced("{{[[(())]]}}")); // Output: "YES"
console.log(isBalanced("{{[[(())]]}}}")); // Output: "NO"

// Simple Text Editor
// Implement a simple text editor. The editor initially contains an empty string, S. 
// Perform Q operations of the following 4 types:
// 1. append(W) - Append string W to the end of S.
// 2. delete(k) - Delete the last k characters of S.
// 3. print(k) - Print the k-th character of S.
// 4. undo() - Undo the last (not previously undone) operation of type 1 or 2, 
// reverting S to the state it was in prior to that operation.
// Example:
// S = 'abcde'
// ops = ['1 fg', '3 6', '2 5', '4', '3 7', '4', '3 4']
// operation
// index   S       ops[index]  explanation
// -----   ------  ----------  -----------
// 0       abcde   1 fg        append fg
// 1       abcdefg 3 6         print the 6th letter - f
// 2       abcdefg 2 5         delete the last 5 letters
// 3       ab      4           undo the last operation, index 2
// 4       abcdefg 3 7         print the 7th characgter - g
// 5       abcdefg 4           undo the last operation, index 0
// 6       abcde   3 4         print the 4th character - d
// The results should be printed as:
// f
// g
// d
// Input Format:
// The first line contains an integer, Q, denoting the number of operations.
// Each line i of the Q subsequent lines (where 0 <= i <= Q) defines an operation to be performed. 
// Each operation starts with a single integer, t (where t belongs to {1,2,3,4}), denoting a type of 
// operation as defined in the Problem Statement above. If the operation requires an argument, 
// t is followed by its space-separated argument. For example, if t = 1 and W = 'abcd', line i will be 1 abcd.
// Constraints:
// 1 <= Q <= 10^6
// 1 <= k <= |S|
// The sum of the lengths of all W in the input <= 10^6.
// The sum of k over all delete operations <= 2x10^6.
// All input characters are lowercase English letters.
// It is guaranteed that the sequence of operations given as input is possible to perform.

class SimpleTextEditor {
    constructor() {
        this.S = [];
        this.undoStack = [];
    }

    append(W) {
        this.undoStack.push(['2', W.length]);
        for (let ch of W) this.S.push(ch);
    }

    delete(k) {
        const deleted = this.S.slice(-k).join('');
        this.undoStack.push(['1', deleted]);
        this.S.length -= k;
    }

    print(k) {
        console.log(this.S[k - 1]);
    }

    undo() {
        const last = this.undoStack.pop();
        if (!last) return;
        if (last[0] === '1') {
            for (let ch of last[1]) this.S.push(ch);
        } else if (last[0] === '2') {
            this.S.length -= last[1];
        }
    }

    // Helper to show current text (not required, but useful)
    getText() {
        return this.S.join('');
    }
}

// Example usage
let editor = new SimpleTextEditor();

editor.append('krondosfire');
editor.append('xy');
editor.print(6);    // Output: f

editor.delete(5);
editor.undo();
editor.print(7);    // Output: g

editor.undo();
editor.print(4);    // Output: d

console.log(editor.getText()); // Output: abcde
