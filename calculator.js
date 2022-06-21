alert("This is a Basic arithmetic calculator that can perform the Addition, Subtraction, Multiplication and Division of two numbers")

alert('For Addition enter "1"\nFor Subtraction enter "2"\nFor Multiplication enter "3"\nFor Division enter "4"')


while (true) {
    let userOption = prompt("Enter option: ")

    if (userOption != "1" && userOption != "2" && userOption != "3" && userOption != "4") {
        alert("Option has to be 1 for Addition, 2 for subtraction, 3 for Multiplication or 4 for Division")
    }

    else {
        let userNumber1 = parseInt(prompt("Enter first number: "))
        let userNumber2 = parseInt(prompt("Enter second number: "))

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