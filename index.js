//!                      Get the Middle Character
//*                      https://www.codewars.com/kata/56747fd5cb988479af000028/forks/javascript

function getMiddle1(s) {
  const middle = Math.floor(s.length / 2);
  if (s.length % 2 == 0) return s[middle - 1] + s[middle];
  else return s[middle];
}
function getMiddle2(s) {
  return s.slice(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1);
}

const getMiddle3 = (s) =>
  s.slice(Math.ceil(s.length / 2 - 1), Math.floor(s.length / 2 + 1));

function getMiddle4(s) {
  var len = Math.floor(s.length / 2);
  return s.length % 2 == 0 ? s.charAt(len - 1) + s.charAt(len) : s.charAt(len);
}

console.log(getMiddle4("qweqwe"));
