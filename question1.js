function swapCase(str) {
    // we are suggesting our function to use the replace method on a string to find all occurences of alphabetic characters both lowercase and uppercase.
    return str.replace(/([a-zA-Z])/g,
function(match, capture) {
      // we are suggesting our function to use the toLowerCase and toUpperCase methods to convert the characters to lowercase and uppercase.using the ternary operator
      return (capture === capture.toUpperCase()) ? capture.toLowerCase() : capture.toUpperCase();
    });
  }
  // we are suggesting our function to use the console.log method to print the output
  console.log(swapCase("NairobiCounty"))