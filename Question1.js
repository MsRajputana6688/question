// method 1 // -------------------
function findElementsWithSumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
    return "No Elements found";
}
console.log(findElementsWithSumZero([-4, 1, 3, -2, -1]));  // prints [-1, 1]
console.log(findElementsWithSumZero([-1, 2, 3, 5]));  // prints "No Elements   

// method 2 // ----------------------------------------------------------------
function findZeroSum(arr) {
    // Create a map to store the values that have been seen in the array
    const seenValues = new Map();

    // Iterate through the array
    for (const value of arr) {
        // Check if the map contains the opposite value of the current value
        if (seenValues.has(-value)) {
            // If it does, return the value and its opposite
            return [value, -value];
        } else {
            // If it doesn't, add the current value to the map
            seenValues.set(value, true);
        }
    }

    // If no values were found, return "No Elements found"
    return "No Elements found";
}
const arr = [-4, 1, 3, -2, -1];
console.log(findZeroSum(arr)); // Output: [-1, 1]