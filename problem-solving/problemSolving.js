// Day 1: Two Sum
// https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Solution:
// 1. Sort the array
// 2. Loop through the array and check if the current element + the next element equals the target
// 3. If it does, return the indices
// 4. If it doesn't, continue looping
// Time Complexity: O(n log n)
// Space Complexity: O(1)
function twoSum(nums, target) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        while (j < nums.length) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
            j++;
        }
    }
}

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: The sum of 2 and 7 is 9. Therefore index0 = 0, index1 = 1.
// real solution with numbers as keys and indices as values:
function twoSum(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
}

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Explanation: The sum of 2 and 3 is 5, and the sum of 3 and 2 is 7. Therefore index1 = 2, index2 = 1.

function twoSum(nums, target) {
    let map = {};
    for (let i = 0; i < map.length; i++) {
        let diff = target - nums[i];
        if (map[diff] !== undefined) {
            return [map[diff], i];
        }
        map[nums[i]] = i;
    }
}

//  Day 2: Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Solution:
// 1. Create a new linked list
// 2. Loop through the two linked lists and add the values
// 3. If the sum is greater than 10, add the remainder to the next node
// 4. If the sum is less than 10, add the sum to the next node
// Time Complexity: O(n)
// Space Complexity: O(1) 

function addTwoNumbers(l1, l2) {
    let newList = new ListNode(0); // create a new list
    let current = newList; // set the current node to the new list
    let carry = 0; // set the carry to 0 initially
    console.log(l1, l2);
    while (l1 || l2) { // while either list has a value
        let sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return newList.next;
}

// Solution 2 with values as keys and indices as values:
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let result = new ListNode(0);
    let current = result;
    while (l1 || l2 || carry) {
        let sum = (l1 && l1.val) + (l2 && l2.val) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next; // next node
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return result.next;
};

// example 1:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Given a string, find the length of the longest substring without repeating characters.
// Solution:
// 1. Create a map to store the characters and their indices
// 2. Create a start and end pointer to keep track of the longest substring
// 3. Loop through the string and check if the current character is in the map
// 4. If it is, check if the current index is greater than the start pointer
// 5. If it is, update the start pointer to the current index
// 6. If it is not, update the map with the current character and its index
// 7. Update the end pointer to the current index
// 8. Return the end pointer - start pointer + 1
// Time Complexity: O(n)
// Space Complexity: O(n)
function lengthOfLongestSubstring(s) {
    let map = {};
    let start = 0;
    let end = 0;
    let max = 0;
    while (end < s.length) {
        if (map[s[end]] !== undefined) {
            start = Math.max(start, map[s[end]] + 1);
        }
        map[s[end]] = end;
        end++;
        max = Math.max(max, end - start);
    }
    return max;
}

// Solution 2: 
var lengthOfLongestSubstring = function (s) {
    let longest = 0;
    let current = 0;
    let map = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map[char]) {
            current = Math.max(current, map[char]);
        }
        map[char] = i + 1;
        longest = Math.max(longest, i - current + 1);
    }

    return longest;
};