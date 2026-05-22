import { longestPalindrome } from './longest-palindromic';
import { lengthOfLongestSubstring } from './longest-substring-without-repeat';

describe('5. Longest Palindromic Substring', () => {
  it('returns "bab" for "babad"', () => {
    expect(longestPalindrome('babad')).toBe('bab');
  });

  it('returns "bb" for "cbbd"', () => {
    expect(longestPalindrome('cbbd')).toBe('bb');
  });

  it('returns the single character for a one-char string', () => {
    expect(longestPalindrome('a')).toBe('a');
  });

  it('returns the full string for a palindrome input', () => {
    expect(longestPalindrome('racecar')).toBe('racecar');
  });

  it('returns the full string for an even-length palindrome', () => {
    expect(longestPalindrome('abba')).toBe('abba');
  });

  it('returns any single character when no palindrome longer than 1 exists', () => {
    const result = longestPalindrome('abcd');
    expect(result).toHaveLength(1);
  });
});

describe('3. Longest Substring Without Repeating Characters', () => {
  it('returns 3 for "abcabcbb"', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  it('returns 1 for "bbbbb"', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  it('returns 3 for "pwwkew"', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('returns 0 for an empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  it('returns the full length when all characters are unique', () => {
    expect(lengthOfLongestSubstring('abcdef')).toBe(6);
  });

  it('handles a single character', () => {
    expect(lengthOfLongestSubstring('z')).toBe(1);
  });
});
