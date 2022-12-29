/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = 0;
    while(num!=0) {
        count++;
        (num%2) ? num-=1 : num/=2
    }
    return count;
};