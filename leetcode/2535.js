/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let elementSum = 0;
  let digitSum = 0;
  let splitStr = [];
  let eleStr = "";
  nums.forEach((ele) => {
    elementSum += ele;
    eleStr = String(ele);
    splitStr = eleStr.split("");
    splitStr.forEach((item) => {
      digitSum += Number(item);
    });
  });
  if (elementSum - digitSum > 0) {
    return elementSum - digitSum;
  } else {
    return (elementSum - digitSum) * -1;
  }
};
