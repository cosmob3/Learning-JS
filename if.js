let numbers = [];
numbers = [1, 2, 1, 2, 3, 2, 3, 1];
if (numbers[0] == numbers[2]) {
  console.log("Correct");
}
// Outcome: "Correct"

if (numbers[0] == numbers[4]) {
  console.log("Correct");
} else {
  console.log("Wrong, Try again");
}
// Outcome: "Wrong, Try again"

if (numbers[0] == numbers[2] && numbers[2] == numbers[6]) {
  console.log("THAT BE RIGHT!!");
} else {
  console.log("THIS BE WRONG, LOSER");
}
// Outcome: "THIS BE WRONG, LOSER"

if (numbers[0] == numbers[2] || numbers[2] == numbers[6]) {
  console.log("THAT BE RIGHT!!");
} else {
  console.log("THIS BE WRONG, LOSER");
}
// Outcome: "THIS BE WRONG, LOSER"
