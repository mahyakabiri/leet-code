# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

Personal LeetCode solutions in TypeScript, organized by algorithm/data structure topic.

## Directory Structure

Solutions live in topic folders at the repo root:

```
Arrays/
Strings/
LinkedList/
Trees/
Graphs/
DynamicProgramming/
BinarySearch/
SlidingWindow/
Misc/
```

## Solution File Format

Each `.ts` file follows this header convention:

```ts
// <problem number>. <Problem Name>
// Difficulty: Easy | Medium | Hard
// Approach: <brief description>
// Time: O(...) | Space: O(...)

function solutionName(...): ... {
    // implementation
}
```

## Commands

```bash
npm install          # install dependencies
npm run build        # compile TypeScript → dist/
npm test             # run all Jest tests
npm run test:watch   # watch mode
npm run solve <file> # run a single solution with ts-node
```

Tests live alongside solutions as `<name>.test.ts` files.
