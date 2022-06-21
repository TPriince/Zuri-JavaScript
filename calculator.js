alert("This is a Basic arithmetic calculator that can perform the Addition, Subtraction, Multiplication and Division of two numbers")

alert('For Addition enter "1"\nFor Subtraction enter "2"\nFor Multiplication enter "3"\nFor Division enter "4"')


while (true) {
    let userOption = prompt("Enter option: 1 (Addition), 2 (Subtraction), 3 (Multiplication), 4 (Division) ")

    if (userOption != "1" && userOption != "2" && userOption != "3" && userOption != "4") {
        alert("Option has to be 1 for Addition, 2 for subtraction, 3 for Multiplication or 4 for Division")
    }

    else {
        let userNumber1 = parseFloat(prompt("Enter first number: "))
        let userNumber2 = parseFloat(prompt("Enter second number: "))
        
        if (isNaN(userNumber1) || isNaN(userNumber2)) {
            alert("Invalid input. Please enter a number.")
        }
        
        else {
            if (userOption == "1") {
                alert(userNumber1 + userNumber2)
                break
            }
    
            else if (userOption == "2") {
                alert(userNumber1 - userNumber2)
                break
            }
    
            else if (userOption == "3") {
                alert(userNumber1 * userNumber2)
                break
            }
    
            else if (userOption == "4") {
                alert(userNumber1 / userNumber2)
                break
            }
        }
    }
}