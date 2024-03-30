/**
 * Filters out non-prime numbers from an array.
 * 
 * @param {number[]} arr - The input array of numbers.
 * @returns {number[]} - A new array containing only the prime numbers.
 */
function filterPrimeNumbers(arr) {
    //we Use the filter method to create a new array with only the prime numbers.
    return arr.filter(num => {
        // If the number is less than or equal to 1, it is not a prime number.
        if (num <= 1) return false;
        // We Check if the number is divisible by any number up to the square root of the number.
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                // If the number is divisible by any number, it is not a prime number.
                return false;
            }
        }
        // If the number is not divisible by any number, it is a prime number.
        return true;
    });
}

// Example usage:
console.log(filterPrimeNumbers([60,61,62,63,64,6566,67,68,69,70]));