let shopping = [];
shopping = ["paintBrush", "colourPalette", "canvas"];

console.log(shopping[1]);

//EXAMPLE 1
let numbers = [];
numbers = [1, 3, 2, 5, 7, 4];
console.log(numbers[0] + numbers[1]);

//SORT
console.log(numbers.sort());
// outcome: [1, 2, 3, 4, 5, 7]

//Adding a variable(or number in this case)
numbers.push(6);
console.log(numbers);
// outcome: [1, 2, 3, 4, 5, 7, 6]

//EXAMPLE 2
let mix = [];
mix = ["one", 1, "two", 2];
console.log(mix);
// Outcome: ["one", 1, "two", 2]

console.log(typeof mix[0]);
// Outcome: 'string'

console.log(typeof mix[1]);
// Outcome: 'number'
