Array.prototype.even = function () {
    var nums = Array.from(this);
    var evenNums = nums.filter(num => num % 2 === 0);
    console.log(evenNums);
}

Array.prototype.odd = function(){
    var nums =Array.from(this);
    var oddNums = nums.filter(num => num%2!==0);
    console.log(oddNums);
}
var arr = [1,2,3,4,5,6,7,8];
arr.even();
arr.odd();