const array = [5, 1, 3, 7, 2, 8, 4];

// Use a custom comparison function for descending order
array.sort((a, b) => b - a);

console.log(array); 
// Output: [8, 7, 5, 4, 3, 2, 1]
