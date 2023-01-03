/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let cnt = 0;//R L 개수파악용
    let ans = 0;//정답
    let idx = 0;//문자열 조회index
    while(idx!==s.length) {
        if(s.charAt(idx++)==="R") {
            cnt++;
        } else {
            cnt--;
        }
        if(cnt===0) {
            ans++;
        }
    }
    return ans;
};