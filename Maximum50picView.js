// Array of number images
var numImages = [
    "numbers/zero.jpg", "numbers/one.jpg", "numbers/two.jpg", "numbers/three.jpg", "numbers/four.jpg",
    "numbers/five.jpg", "numbers/six.jpg", "numbers/seven.jpg", "numbers/eight.jpg", "numbers/nine.jpg"
];

function countCharacters() {
    var inputText = document.getElementById("input-box").value;
    var remainingChars = 50 - inputText.length;
    var output = document.getElementById("output");
    var charImages = document.getElementById("char-images");

    if (remainingChars < 0) {
        document.getElementById("output").innerHTML = "Error";
    }

    charImages.innerHTML = "";

    // Diplay numbers as images
    var remainingCharsStr = Math.abs(remainingChars).toString();
    for (var i = 0; i < remainingCharsStr.length; i++) {
      var digit = remainingCharsStr.charAt(i);
      var img = document.createElement("img");
      img.src = numImages[digit];
      charImages.appendChild(img);
    }
}

// Set intial displau to "50"
window.onload = function() {
    var charImages = document.getElementById("char-images");
    appendImage(numImages[5], charImages);
    appendImage(numImages[0], charImages);
};