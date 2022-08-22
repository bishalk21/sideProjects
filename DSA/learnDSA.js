// Easy to Hard Problems in Data Structures and Algorithms

// Practice 1 - Two Sum
// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.
// Solution:
// 1. Sort the array
// 2. Loop through the array
// 3. If the current element + the next element equals target, return the index of the current element and the next element
// 4. If the current element + the next element is greater than target, return the index of the current element
// 5. If the current element + the next element is less than target, return the index of the next element

var twoSum = function (nums, target) {
    let map = {}; // here map is a object 
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map[diff] !== undefined) {
            return [map[diff], i];
        }
        map[nums[i]] = i; // nums[i] is the key, i is the value
    }
}

// Practice 2 - Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Solution:
// 1. Create a new linked list
// 2. Loop through the first linked list
// 3. Loop through the second linked list
// 4. Add the two numbers and push the result to the new linked list
// 5. Return the new linked list

var addTwoNumbers = function (l1, l2) {
    let newList = new List();
    let carry = 0; // carry is a variable to store the carry
    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        newList.push(sum % 10);
        carry = Math.floor(sum / 10);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;

    }
    if (carry) {
        newList.push(carry);
    }
    return newList;
}

var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let result = new ListNode(0);
    let current = result;
    while (l1 || l2 || carry) {
        let sum = (l1 && l1.val) + (l2 && l2.val) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return result.next;
};

// Algorithms:
// Sorting Algorithms:
// 1. Selection Sort
// Problem 
// Given an array of integers, sort the array in ascending order. 
// The selection sort algorithm should be used to solve this problem.
// Solution:
// 1. Loop through the array
// 2. Find the smallest element in the array
// 3. Swap the smallest element with the first element
// 4. Repeat the above steps until the array is sorted

let selectionSort = function (arr) { // arr is the array to be sorted and is passed as an argument
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}
// Given a roman numeral, convert it to an integer.ß
// solution:
// 1. Loop through the string
// 2. If the current element is smaller than the next element, subtract the current element from the next element
// 3. If the current element is greater than the next element, add the current element to the result
// 4. Return the result
var romanToInt = function (s) {
    var roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var current = roman[s[i]]; //
        var next = roman[s[i + 1]];
        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    return result;
};

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Solution:
// 1. Loop through the array
// 2. Loop through the first element
// 3. Loop through the second element
// 4. If the current element is equal to the next element, continue
// 5. If the current element is not equal to the next element, return the current element
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
        }
    }
    return prefix;
}

// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
var longestCommonPrefix = function (strs) { // strs is the array of strings to be sorted and is passed as an argument
    let prefix = strs[0]; // prefix is the first element of the array: "flower"
    for (let i = 1; i < strs.length; i++) { // loop through the array: ["flower","flow","flight"]
        while (strs[i].indexOf(prefix) !== 0) { // while the index of the current element is not equal to the index of the prefix: "flower" 
            prefix = prefix.slice(0, prefix.length - 1); // slice the prefix from the 0th index to the length of the prefix minus 1: "flower"
        }

    }
    return prefix; // return the prefix: "flower": "flower"
}