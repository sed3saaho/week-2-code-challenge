/**
 * Generates an array of numbers from a specified start to end range.
 * 
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range.
 * @returns {number[]} - An array containing numbers from start to end, inclusive.
 */
function generateArray(start, end) {
    // Create an empty array to store the numbers.
    const arr = [];
    // Use a for loop to iterate from the start value to the end value and push each value into the array.
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    // Return the array.
    return arr;
}

// Example usage:
console.log(generateArray(40,50));
