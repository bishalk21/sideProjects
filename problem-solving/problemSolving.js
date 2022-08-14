// Two Sum
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