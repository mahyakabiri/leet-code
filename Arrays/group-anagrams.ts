/* 49. Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters. */

function groupAnagrams(strs: string[]): string[][] {
    const sortedArray = new Map();
    for(let i = 0; i < strs.length; i++){
        let key = strs[i].split('').sort().join();
        if(!sortedArray.has(key)){
            sortedArray.set(key, []);
        }
        // const value = sortedArray.get(key);
        // sortedArray.set(key, [...value, strs[i]]);
        sortedArray.get(key).push(strs[i]);
    }
    return Array.from(sortedArray.values());
};

// ["ate","eat","tea"] => a,e,t => "aet"
// ["nat","tan"] => a,n,t => "ant"
// ["bat"] => "bat"