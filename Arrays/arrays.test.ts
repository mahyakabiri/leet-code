import { numIslands } from './number-of-islands';
import { groupAnagrams } from './group-anagrams';
import { merge } from './merge-intervals';
import { twoSum } from './two-sum-input-array';
import { maxArea } from './container-with-most-water';

// helper: sort groups for order-independent comparison
const sortGroups = (groups: string[][]): string[][] =>
  groups.map(g => [...g].sort()).sort((a, b) => a[0].localeCompare(b[0]));

// helper: deep clone grid so mutations don't bleed between tests
const cloneGrid = (grid: string[][]): string[][] =>
  grid.map(row => [...row]);

describe('200. Number of Islands', () => {
  it('returns 1 for a single connected island', () => {
    const grid = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ];
    expect(numIslands(cloneGrid(grid))).toBe(1);
  });

  it('returns 3 for multiple separate islands', () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ];
    expect(numIslands(cloneGrid(grid))).toBe(3);
  });

  it('returns 0 for all water', () => {
    expect(numIslands([['0', '0'], ['0', '0']])).toBe(0);
  });

  it('returns 1 for a single land cell', () => {
    expect(numIslands([['1']])).toBe(1);
  });

  it('returns 0 for a single water cell', () => {
    expect(numIslands([['0']])).toBe(0);
  });

  it('returns 0 for an empty grid', () => {
    expect(numIslands([])).toBe(0);
  });
});

describe('49. Group Anagrams', () => {
  it('groups anagrams correctly', () => {
    const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
    expect(sortGroups(result)).toEqual(sortGroups([
      ['eat', 'tea', 'ate'],
      ['tan', 'nat'],
      ['bat'],
    ]));
  });

  it('handles a single empty string', () => {
    expect(groupAnagrams([''])).toEqual([['']]);
  });

  it('handles a single character', () => {
    expect(groupAnagrams(['a'])).toEqual([['a']]);
  });

  it('handles all unique words (no anagrams)', () => {
    const result = groupAnagrams(['cat', 'dog', 'bird']);
    expect(sortGroups(result)).toEqual(sortGroups([['cat'], ['dog'], ['bird']]));
  });

  it('handles all words being anagrams of each other', () => {
    const result = groupAnagrams(['abc', 'bca', 'cab']);
    expect(result).toHaveLength(1);
    expect(result[0].sort()).toEqual(['abc', 'bca', 'cab'].sort());
  });
});

describe('56. Merge Intervals', () => {
  it('merges overlapping intervals', () => {
    expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 6], [8, 10], [15, 18]]);
  });

  it('merges touching intervals', () => {
    expect(merge([[1, 4], [4, 5]])).toEqual([[1, 5]]);
  });

  it('merges unsorted overlapping intervals', () => {
    expect(merge([[4, 7], [1, 4]])).toEqual([[1, 7]]);
  });

  it('returns a single interval unchanged', () => {
    expect(merge([[1, 5]])).toEqual([[1, 5]]);
  });

  it('does not merge non-overlapping intervals', () => {
    expect(merge([[1, 2], [4, 6], [8, 10]])).toEqual([[1, 2], [4, 6], [8, 10]]);
  });

  it('merges all intervals into one', () => {
    expect(merge([[1, 4], [2, 5], [3, 6]])).toEqual([[1, 6]]);
  });
});

describe('167. Two Sum II - Input Array Is Sorted', () => {
  it('finds the pair at the beginning of the array', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  it('finds the pair when one index is not the first element', () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
  });

  it('handles negative numbers', () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  });

  it('finds the pair at the end of the array', () => {
    expect(twoSum([1, 2, 3, 4, 5], 9)).toEqual([4, 5]);
  });

  it('handles a two-element array', () => {
    expect(twoSum([3, 5], 8)).toEqual([1, 2]);
  });
});

describe('11. Container With Most Water', () => {
  it('returns 49 for the first example', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it('returns 1 for two equal heights', () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it('picks the widest pair when heights are equal', () => {
    expect(maxArea([4, 4, 4, 4])).toBe(12);
  });

  it('handles ascending heights', () => {
    expect(maxArea([1, 2, 3, 4, 5])).toBe(6);
  });

  it('handles descending heights', () => {
    expect(maxArea([5, 4, 3, 2, 1])).toBe(6);
  });

  it('handles one zero-height wall', () => {
    expect(maxArea([0, 10000])).toBe(0);
  });

  it('handles n = 10^5 within time (two-pointer must be O(n))', () => {
    const n = 100_000;
    const height = Array.from({ length: n }, (_, i) => i % 10000);
    const start = Date.now();
    maxArea(height);
    expect(Date.now() - start).toBeLessThan(100);
  });
});
