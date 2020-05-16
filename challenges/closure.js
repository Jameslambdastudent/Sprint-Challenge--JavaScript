// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */
// It can then be used somewhere else. No matter where, it still has access to the same outer variables.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
let sumation = (counter) => {
  if (1 + 2 + 3 + 4 === 10) {
 return true
 }
 };
 sumation()
 