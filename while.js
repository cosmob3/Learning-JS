// NOTE: For these to properly work. Comment out the loop that you will not be using.
let i = 0;
while (i < 5) {
  console.log("The number is " + i);
  i++;
}
//////////////////////////////
// Outcome: "The number is 0"
//          "The number is 1"
//          "The number is 2"
//          "The number is 3"
//          "The number is 4"
//////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
do {
  console.log("The number is " + i);
  ii++;
} while (i > 5);
//////////////////////////////
// Outcome: "The number is 0"

// Because of the "do" the code is executed once regardless of the later condition. Once it reaches the "while" it will check to see if "i" is in fact greater than 5. But since "i" is zero. The code stops and "The number is 0" is the only thing that gets printed out.
