/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let cnt = 0;
    let digitNum = String(num).split("");
    digitNum.forEach((ele)=>{
        if(num%Number(ele)===0) {
            cnt++;
        }
    })
    return cnt;
};