/* 200. Number of Islands
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'. */

function numIslands(grid: string[][]) {
    if (!grid || grid.length === 0) return 0;
  
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
  
    function dfs(r: number, c: number) {
      // Boundary or water check
      if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") {
        return;
      }
  
      // Mark visited by turning land into water
      grid[r][c] = "0";
  
      // Explore neighbors
      dfs(r + 1, c);
      dfs(r - 1, c);
      dfs(r, c + 1);
      dfs(r, c - 1);
    }
  
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === "1") {
          count++;
          dfs(r, c);
        }
      }
    }
  
    return count;
  }