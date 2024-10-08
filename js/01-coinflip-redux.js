/*  The “Coin Flip” Game Redux


Begin your application by declaring a variable called coinFlip.
 Do not assign the variable a number just yet.
Create a for loop that loops a certain amount of times.
 The amount of times that the for loop executes will be collected from the user via a prompt.
Within the for loop assign a randomly generated number to You will have to use the same Math 
formula that you used in the previous assignment to get this number.
Use a conditional statement to check the result of the coin flip.
 If it’s 0, write out “Heads” into the console window. 
 If it’s 1, write out “Tails” into the console window.
Note: Unlike the previous assignment, you’re not prompting the user for their choice.
 You’re simply displaying the coin flip results in the console.
 */
const coinFlip = parseInt(prompt('How many times should we flip?: '))
let randomNumber

for(let i = 1;  i <= coinFlip; i++){
   randomNumber = Math.random()
  
}

if(randomNumber >= 0.5) {
    document.write("<h1>Heads</h1>")
} else {
    document.write("<h1>Tails</h1>")
}


