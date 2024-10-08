/*Looping a Triangle

Write a loop that displays the following triangle within a console window:

#
##
###
####
#####
######
####### */

const triangleLength = parseInt(prompt(`Please enter the length of the the triangle: `))

for(let rows = 1; rows<= triangleLength; rows++){
    for(let columns = 0; columns<=rows; columns++) {
        document.write(`#`)
    }
    document.write(`<br>`)
}