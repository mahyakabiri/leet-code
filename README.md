Welcome to my LeetCode repository 🚀

This repository contains my solutions to LeetCode problems written in **TypeScript**.  
The goal is to improve problem-solving skills, strengthen understanding of algorithms and data structures, and prepare for technical interviews.

---

## 📌 Goals

- Practice coding consistently
- Improve algorithmic thinking
- Master data structures & algorithms
- Write clean and efficient TypeScript code
- Track learning progress over time

---

## 🛠 Language

- TypeScript

---

## 📂 Repository Structure

```bash
LeetCode/
│
├── Arrays/
├── Strings/
├── LinkedList/
├── Trees/
├── Graphs/
├── DynamicProgramming/
├── BinarySearch/
├── SlidingWindow/
└── Misc/
```

Each folder contains solutions categorized by topic.

---

## ✅ Solution Format

Each solution may include:

- Problem name
- Difficulty level
- LeetCode link
- Explanation/approach
- Time & space complexity
- Optimized TypeScript solution

Example:

```ts
// 1. Two Sum
// Difficulty: Easy
// Approach: Hash Map

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (map.has(diff)) {
            return [map.get(diff)!, i];
        }

        map.set(nums[i], i);
    }

    return [];
}
```

---

## 📈 Progress

| Difficulty | Solved |
|------------|--------|
| Easy       | 0      |
| Medium     | 0      |
| Hard       | 0      |

(Update this table as you progress.)

---

## 🎯 Topics Covered

- Arrays & Hashing
- Two Pointers
- Sliding Window
- Stack & Queue
- Linked Lists
- Trees & Graphs
- Recursion & Backtracking
- Dynamic Programming
- Greedy Algorithms
- Binary Search
- Heap / Priority Queue

---

## 🚀 Why TypeScript?

TypeScript provides:
- Strong type safety
- Better readability and maintainability
- Improved debugging experience
- Modern JavaScript features with static typing

---

## 🔥 Motivation

> “Consistency is the key to mastery.”

Daily problem solving helps improve logical thinking and coding confidence.

---

## 🤝 Contributions

This is a personal learning repository, but suggestions and improvements are always welcome.

---

## ⭐ Support

If you find this repository helpful, consider giving it a star ⭐
