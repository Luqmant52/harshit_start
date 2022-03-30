let winNumber = 19
let userGuess = parseInt(prompt("Enter Your Gusse"))

if (userGuess === winNumber) {
    document.write("You win")
}
else if (userGuess > winNumber) {
    // document.write("You To high number")
    userGuess = parseInt(prompt("You To high number Gusse again"))
}
else if (userGuess < winNumber) {
    // document.write("You To Low number")
    userGuess = parseInt(prompt("You To low number Gusse again"))
}