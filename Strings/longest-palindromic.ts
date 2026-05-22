/* Given a string s, return the longest palindromic substring in s.
 Example 1:

 Input: s = "babad"
 Output: "bab"
 Explanation: "aba" is also a valid answer.
 Example 2:

 Input: s = "cbbd"
 Output: "bb"
 

 Constraints:

 1 <= s.length <= 1000
 s consist of only digits and English letters. */

export function longestPalindrome(s: string): string {
    let polindrome = '';
    function isPalindrome(i: number, j: number, s: string) {
    while(s[i]===s[j] && i < s.length && j >= 0){
      i++;
      j--;
    }
    return s.slice(j+1, i);
    }

    for(let i = 0; i < s.length; i++){
       let evenPolindrome = isPalindrome(i, i + 1, s);
       let oddPalindrome = isPalindrome(i, i, s);
        let currentPolindrome = evenPolindrome.length > oddPalindrome.length ? evenPolindrome : oddPalindrome;
        polindrome = currentPolindrome.length > polindrome.length ? currentPolindrome : polindrome;

    }
    return polindrome;
};