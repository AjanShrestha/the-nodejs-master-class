/**
 * Example REPL server
 * Take in the word "fizz" and logout "buzz"
 * 
 */

// Dependencies
const repl = require('repl');

// Start the REPL
repl.start({
  prompt: '>',
  eval: function (str) {
    // Evaluation function for incoming inputs
    console.log('AT THE EVAL', str);
    // If the user said 'fizz', say 'bizz' back to them
    if (str.indexOf('fizz') > -1) {
      console.log('buzz');
    }
  },
})