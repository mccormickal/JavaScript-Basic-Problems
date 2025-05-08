// Array of number images
var numImages = [
    "../numberImages/zero.jpg", "../numberImages/one.jpg", "../numberImages/two.jpg", "../numberImages/three.jpg", "../numberImages/four.jpg",
    "../numberImages/five.jpg", "../numberImages/six.jpg", "../numberImages/seven.jpg", "../numberImages/eight.jpg", "../numberImages/nine.jpg"
];

function countCharacters() {
    var inputText = document.getElementById("input-box").value;
    var remainingChars = 50 - inputText.length;
    var output = document.getElementById("output");
    var charImages = document.getElementById("charImages");

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
    var charImages = document.getElementById("charImages");
    appendImage(numImages[5], charImages);
    appendImage(numImages[0], charImages);
};