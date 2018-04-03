/**
 * Written on April 2, 2019
 * Implement bubblesort algorithm using arrow function
 * @author Rupendra MAHARJAN
 */
(function () {
    Array.prototype.bubbleSort = function () {
        var nums = Array.from(this);
        nums.map(() => function () {
            nums
                .map(num => function (value) {
                    var myNum = parseInt(num);
                    let indexFirst = nums.indexOf(myNum);
                    let indexSecond = nums.indexOf(myNum) + 1;
                    if (num > nums[indexSecond]) {
                        let temp = num;
                        nums[indexFirst] = nums[indexSecond];
                        nums[indexSecond] = temp;
                    }
                    console.log(nums);
                }());
        }());
        return nums;
    }

    let arrNum = [6, 4, 0, 3, -2, 1];
    console.log(arrNum.bubbleSort());
}());