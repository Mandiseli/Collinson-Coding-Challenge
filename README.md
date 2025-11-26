# Minimum Cars Solution — TypeScript Coding Challenge

##  Overview
A group of friends travels to the meeting point using N cars.  
Each car has:
- P[K] → number of people in the car  
- S[K] → number of seats in the car  

They want to use **as few cars as possible** for the trip.

Your task:  
Write a TypeScript function that returns the **minimum number of cars required** to carry all people.

---

## Approach (Greedy Strategy)

The optimal strategy is to:
1. Compute the total number of people.
2. Sort the cars by their seat capacity (descending).
3. Start filling the largest-capacity cars first.
4. Count how many cars are required until all people fit.

This greedy approach works because choosing the largest available car always reduces the number of cars needed.

---

## Project Structure

minimum-cars-solution/
│
├── package.json
├── tsconfig.json
├── README.md
└── src/
├── solution.ts
└── test/
|___run.ts

## Run the project
INSTALL DEPENDENCIES

- npm install
- npm install typescript ts-node @types/node --save-dev
- npx tsc --init

## Run the solution

- npm start

## Technology Used

- TypeScript
- Node.js

## Time Complexity
The function runs in:

- O(N log N)

## Sample Outputs

| P            | S            | Result |
| ------------ | ------------ | ------ |
| [1, 4, 1]    | [1, 5, 1]    | 2      |
| [4, 4, 2, 4] | [5, 5, 2, 5] | 3      |
| [2, 3, 4, 2] | [2, 5, 7, 2] | 2      |

## Author

Mandiseli Mfeya
(TypeScript Coding Challenge — Junior Software Engineer)






## 📂 Project Structure

