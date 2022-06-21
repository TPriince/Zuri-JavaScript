alert("This is a Basic arithmetic calculator that can perform the Addition, Subtraction, Multiplication and Division of two numbers")

alert('For Addition enter "1"\nFor Subtraction enter "2"\nFor Multiplication enter "3"\nFor Division enter "4"')

let userOption = prompt("Enter option: ")
let userNumber1 = parseInt(prompt("Enter first number: "))
let userNumber2 = parseInt(prompt("Enter second number: "))

if (userOption == "1") {
    alert(userNumber1 + userNumber2)
}

else if (userOption == "2") {
    alert(userNumber1 - userNumber2)
}

else if (userOption == "3") {
    alert(userNumber1 * userNumber2)
}

else if (userOption == "4") {
    alert(userNumber1 / userNumber2)
}