/* The point of this simple game is to see what kind of streak you can get to (how many times
 “Heads” comes up in a row before “Tails” does to end the game). 
To complete the game follow the steps outlined below:

Begin your application by declaring a variable called coinFlip. 
Do not assign the variable a number just yet.
Create a do while loop.
Within the do while loop assign a randomly generated number to You will have to use the same
 Math formula that you used in the previous assignment to get this number.
Use a conditional statement to check the result of the coin flip. If it’s 0, write out “Heads” 
into the console window. If it’s 1, write out “Tails” into the console window.
Set the condition of the do while loop to end once the coinFlip becomes “Tails”.*/

let coinFlip = 0
let result = "Heads"

do {
    coinFlip = coinFlip + 1
    const randomNumber = Math.random()*100
    if(randomNumber < 5 ) {
        result = "Tails"
    }


} while( result  === "Heads")

    document.write(`<h1>It took ${coinFlip} times to flip a coin to Tails!<h1>`)