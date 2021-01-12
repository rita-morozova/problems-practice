// Given a date, return the corresponding day of the week for that date.

// The input is given as three integers representing the day, month and year respectively.

// Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

 

// Example 1:

// Input: day = 31, month = 8, year = 2019
// Output: "Saturday"

// new Date() sets a date now
//getDay() - JS function to find out a day of the week, returned as an integer (Sunday is 0)

var dayOfTheWeek = function(day, month, year) {
  let findDate = new Date(`${month} ${day}, ${year} 12:00:00`)
  let dayOfWeek = findDate.getDay()
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  
  return days[dayOfWeek]
};