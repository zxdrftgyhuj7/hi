function countSubstrings(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    extendPalindrome(i, i);
    extendPalindrome(i, i + 1);
  }
  return count;
  function extendPalindrome(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }
}
