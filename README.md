# Algorithms and Data structures course by Yandex.Practicum

This repository contains my solutions for tasks on the course. 

## About the course

You can check info about the course on [this page](https://practicum.yandex.ru/algorithms/). 
The course is divided into 8 sprints and each sprint is devoted to some theme. Here there are:

1. Introduction to DS and algo
2. Basic data structures
3. Recursion and sorting algorithms
4. Hash functions
5. Trees
6. Graphs
7. Greedy algorithms and dynamic programming
8. Algorithms on strings

Every sprint has several practice tasks and usually 2 final tasks. More often than not tasks have time and memory limits.
All tasks must be passed tests on [Yandex.Contest](https://contest.yandex.ru/). It's a platform that runs your code, checks answers, and watches for time and memory limits.

## Build target

The Yandex.Contest runs javascript code in the Node.js and input is provided via `stdin`. So I've made the `receiveInput` utility that handles all stuff with [readline](https://nodejs.org/api/readline.html).
I use Parcel for building a final code -- it fits very well.