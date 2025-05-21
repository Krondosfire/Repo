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

//