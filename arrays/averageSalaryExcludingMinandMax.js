// Given an array of unique integers salary where salary[i] is the salary of the employee i.

// Return the average salary of employees excluding the minimum and maximum salary.

 

// Example 1:

// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500


var average = function(salary) {
  //find max and remove from array
  let max = Math.max(...salary)
  let indexMax = salary.indexOf(max)
  salary.splice(indexMax, 1)
  
  //find min and remove from array
  let min = Math.min(...salary)
  let indexMin = salary.indexOf(min)
  salary.splice (indexMin, 1)
  
  let total = salary.reduce((total, current) => total+current)
  
  return total/salary.length
};


//Faster 
var average = function(salary) {
  let max = Math.max(...salary)
  salary.splice(salary.indexOf(max), 1)
  
  let min = Math.min(...salary)
  salary.splice (salary.indexOf(min), 1)
   
  return salary.reduce((total, current) => total+current)/salary.length
};