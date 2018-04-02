/**
 * Written on April 2, 2019
 * Filters array to get numbers greater than 70
 * @author Rupendra Maharjan
 */

const nums = [3,62,234,7,23,74,23,76,92];
const desiredNum = nums
    .filter(num => num > 70);
console.log(desiredNum);