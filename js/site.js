// Get string from the page
// controller function
function getString() {
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

// Reverse the string
// logic function
function reverseString(userString) {
    // split string into array
    let splitStr = userString.split("");

    // reverse array
    let reversed = splitStr.reverse();

    // join array into string and return
    return reversed.join("");
}

// Display reversed string to the user
// view function
function displayString(revString) {
    // write to the page
    document.getElementById("msg").innerHTML = `Your string is reversed: ${revString}`;

    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}