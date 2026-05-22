import { numIslands } from './number-of-islands';
import { groupAnagrams } from './group-anagrams';
import { merge } from './merge-intervals';
import { twoSum } from './two-sum-input-array';
import { maxArea } from './container-with-most-water';
import { threeSum } from './three-sum';

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

// helper: sort triplets for order-independent comparison
const sortTriplets = (triplets: number[][]): number[][] =>
  [...triplets]
    .map(t => [...t].sort((a, b) => a - b))
    .sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

describe('15. 3Sum', () => {
  it('returns [[-1,-1,2],[-1,0,1]] for [-1,0,1,2,-1,-4]', () => {
    expect(sortTriplets(threeSum([-1, 0, 1, 2, -1, -4]))).toEqual(
      sortTriplets([[-1, -1, 2], [-1, 0, 1]])
    );
  });

  it('returns [] when no triplet sums to zero', () => {
    expect(threeSum([0, 1, 1])).toEqual([]);
  });

  it('returns [[0,0,0]] for all-zero input', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  it('returns [] when all numbers are the same non-zero value', () => {
    expect(threeSum([1, 1, 1])).toEqual([]);
  });

  it('deduplicates when input has repeated values', () => {
    expect(sortTriplets(threeSum([-2, 0, 0, 2, 2]))).toEqual([[-2, 0, 2]]);
  });

  it('handles multiple zeros', () => {
    expect(threeSum([0, 0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  it('handles negative-only values with no valid triplet', () => {
    expect(threeSum([-5, -4, -3, -2, -1])).toEqual([]);
  });

  it('does not miss triplets that share a join-string collision (e.g. [-15,1,14] and [-15,4,11])', () => {
    const input = [-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1];
    const result = threeSum(input);
    const flat = result.map(t => [...t].sort((a, b) => a - b).join(','));
    expect(flat).toContain('-15,1,14');
    expect(flat).toContain('-15,4,11');
  });
});
