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
