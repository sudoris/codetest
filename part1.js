// Question 1
// Write a function that takes a string as input and returns the string reversed. 
// Example: Given s = "hello", return "olleh". 

function reverseString(str) {
  let reverse = ''
  
  for (let i = str.length - 1; i >= 0; i--) {    
    reverse += str[i]
  }

  return reverse 
}

// console.log(reverseString('dog'))
// console.log(reverseString('123hello'))


// Question 2
// Given a positive integer num, write a function which returns True if num is a perfect square else False. 
// Note: Do not use any built-in library function such as sqrt. 
// Example 1: 
// Input: 16 
// Returns: True 
// Example 2: 
// Input: 14 
// Returns: False 

function isPerfectSquare(num) {
  // return false if num is not a positive integer
  if (num < 1) {
    return false
  }

  let sumOfOdds = 0
  for (let i = 1; sumOfOdds < num; i+=2) {
    sumOfOdds+=i
    if (sumOfOdds === num) {
      return true
    }
  }

  return false
}

// console.log(isPerfectSquare(0))
// console.log(isPerfectSquare(16))
// console.log(isPerfectSquare(-16))
// console.log(isPerfectSquare(35))
// console.log(isPerfectSquare(-35))


// Question 3
// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary). 
// You may assume that the intervals were initially sorted according to their start times. 
// Example 1: 
// Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9]. 
// Example 2: 
// Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16]. 
// This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10]. 

function insertInterval(newInterval, intervals) {  
  // check if new interval overlaps all intervals
  if (newInterval[0] < intervals[0][0] && newInterval[1] > intervals[intervals.length - 1][1]) {
    return newInterval
  }  

  // check if start of new interval is < start of first interval
  if (newInterval[0] < intervals[0][0]) {
    intervals.splice(0, 0, newInterval)
    return intervals
  }

  // check if end of new interval is > end of last interval
  if (newInterval[1] > intervals[intervals.length - 1][1]) {
    intervals.push(newInterval)
    return intervals
  } 

  // if this step is reached it means that the new interval is between the current first and last interval
  // insert new interval according to start value
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] < newInterval[0] && intervals[i+1][0] > newInterval[0]) {   
      intervals.splice(i+1, 0, newInterval)  
      break;    
    }
  }
  
  // empty stack of intervals
  let intervalStack = [] 
  // push first interval onto stack
  intervalStack.push(intervals[0])
  
  // merge overlapping intervals and add all non-overlapping intervals to stack, 
  for (let i = 1; i < intervals.length; i++) {
    
    let top = intervalStack[intervalStack.length - 1]
    console.log(top, 'top')
    console.log(intervals[i], 'current interval')
    
    // check if overlap
    if (top[1] > intervals[i][0]) {
      // check if end of stack top is less than end of current interval
      if (top[1] < intervals[i][1]) {
        // set end of stack top to value of end of current interval 
        top[1] = intervals[i][1]
      }      
    }
    else {    // no overlap, push current interval directly onto top of stack
      intervalStack.push(intervals[i])
    }    

    console.log(intervalStack, 'stack state')
  }      

  return intervalStack
}

// let intervals = [
//   [1, 2],
//   [3, 5],
//   [6, 7],
//   [8, 10],
//   [12, 16]
// ]

// console.log(insertInterval([4, 9], intervals))


// Question 4
// Given a 2D board and a word, find if the word exists in the grid. 
// For example, Given board = 
// [ 
// ['A','B','C','E'], 
// ['S','F','C','S'], 
// ['A','D','E','E'] 
// ] word = "ABCCED", -> returns true, 
// word = "SEE", -> returns true, 
// word = "ABCB", -> returns false. 

/* Note: Assume that only horizontally or vertically neighboring cells could be used, */
/*  and that each letter can only be used once                                        */
function hasWord(board, word) {    
  
  
}

let board = [ 
  ['A','B','C','E'], 
  ['S','F','C','S'], 
  ['A','D','E','E'] 
]

console.log(hasWord(board, 'ABCCED'))


// Question 5
// Calculate the sum of two integers a and b, 
// but you are not allowed to use the operator + and -. 
// Example: Given a = 1 and b = 2, return 3. 

function getSum(a, b) {		// a is the sum ; b is the carry bit 
	if (b === 0) {
		return a
	} else {
		return getSum(a ^ b, (a & b) << 1)
	}
}

// console.log(getSum(0, 0))
// console.log(getSum(1, 2))
// console.log(getSum(10, 5))
// console.log(getSum(-1, 3))
// console.log(getSum(-22, -2))
// console.log(getSum(999999, 9999999999999999999))  // overflow as expected since sum is > than 2^31 - 1