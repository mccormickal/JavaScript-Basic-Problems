// Function to change character number
function countCharacters() {
    var inputText = document.getElementById("inputBox").value;
    var remainingChars = 50 - inputText.length;
    var output = document.getElementById("output");
    var charCount = document.getElementById("charCount");

    if (remainingChars < 0) {
        document.getElementById("output").innerHTML = "Error";
    }

    charCount.textContent = remainingChars
}