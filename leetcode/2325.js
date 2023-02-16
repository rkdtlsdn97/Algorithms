/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  let answer = "";
  // key 공백 제거
  let keyArr = key.replace(/ /g, "").split("");

  let set = new Set(keyArr); //중복 알파벳 제거
  let setArr = [...set];
  let messageArr = message.split("");

  // message 변환
  messageArr.forEach((ele) => {
    if (ele === " ") {
      answer += ele;
    } else {
      for (let i = 0; i < setArr.length; i++) {
        if (ele === setArr[i]) {
          answer += String.fromCharCode(97 + i);
        }
      }
    }
  });
  return answer;
};
