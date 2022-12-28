/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  let ans = [];
  let arr = s.split(":"); //String s : 기준으로 분할
  let num1 = Number(arr[0].split("")[1]); // 분할된 문자열에 포함된 첫번째 숫자
  let num2 = Number(arr[1].split("")[1]); // 분할된 문자열에 포함된 두번째 숫자
  let word1 = arr[0].split("")[0]; // 분할된 문자열에 포함된 첫번째 단어
  let word2 = arr[1].split("")[0]; // 분할된 문자열에 포함된 두번째 단어

  //charCodeAt 문자를 아스키코드 변환
  // fromCharCode아스키코드를 문자로 변환
  for (let j = word1.charCodeAt(0); j <= word2.charCodeAt(0); j++) {
    console.log(j);
    for (let i = num1; i <= num2; i++) {
      let str = String.fromCharCode(j) + `${i}`;
      ans.push(str);
    }
  }
  return ans;
};
