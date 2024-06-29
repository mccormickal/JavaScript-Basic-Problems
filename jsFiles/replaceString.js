// Function to replace string
function replaceWord() {
    // Capture old word into variable
    var oldWordPatternToReplace = document.getElementById("old-word").value;
    var R = new RegExp(oldWordPatternToReplace, "g");

    // Capture sentence and replacement word
    var sentence = document.getElementById("sentence").value;
    var replacementWord = document.getElementById("replacement-word").value;

    // Run regular expression
    sentence = sentence.replace(R, replacementWord);
    
    // Alert box for resulting sentece
    document.getElementById("sentence-result").innerHTML = sentence;
    alert(sentence);
}