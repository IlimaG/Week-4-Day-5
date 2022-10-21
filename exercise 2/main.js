let turtle1 = "Leonardo"
let turtle2 = "Raphael"
let turtle3 = "Donatello"
let turtle4 = "Michelangelo"

let allTurtles = " ";

// 3

allTurtles += turtle1

// 4 

console.log (allTurtles)

// 5

allTurtles = allTurtles + " " + turtle2 + " " + turtle3 + " " + turtle4

// 6 

console.log (allTurtles)

// 7 

console.log("Donatello empieza en el caracter número: ", allTurtles.indexOf("Donatello"))

// 8

console.log ("El total de caracteres son: ", allTurtles.length)

//9 // 10 // 11 

let firstHalfTurtles = allTurtles.slice (1,17)
let secondHalfTurtles = allTurtles.slice (18)

// 12

console.log ("My favorites are: ", firstHalfTurtles)

// 13

console.log ("My favorite pair are: ", secondHalfTurtles)



