
//Reverse order of first and last name
function reverseName() {
    //Retrieve name
    let name = document.getElementById("fullName").value;

    //Input validation
    if(name.includes(' ')) {
        //Split name by the space
        nameArr = name.split(' ');
        firstName = nameArr[0];
        lastName = nameArr[1];
        msg = `${lastName}, ${firstName}`;
        document.getElementById("reversedNames").innerHTML = msg;
    } else {
        document.getElementById("reversedNames").innerHTML = "Please enter a name with a space."
    }
    
}


//Get list of initals from an array of names
function getInitialList() {
    //Retrieve names
    let names = document.getElementById("nameList").value;

    //Input validation
    if (names.includes(',') && names.includes(' ')) {
        //Split array by commas
        namesArr = names.split(', ');

        //Loop to create initials list
        let initialsArr = [];
        for (i=0; i < namesArr.length; i++) {
            let fullNameArr = namesArr[i].split(' ');
            let firstName = fullNameArr[0];
            let lastName = fullNameArr[1];
            let initial = firstName.charAt(0) + lastName.charAt(0)
            initialsArr.push(initial);
        }
        document.getElementById("initialList").innerHTML = initialsArr.join(' ');
    } else {
        document.getElementById("initialList").innerHTML = "Please enter a list of names, separated by commas."
    }
}

//Display number of words in string
function wordCount() {
    //Retrieve sentence
    let sentence = document.getElementById("sentence").value;

    //Input validation
    if (isNaN(sentence)) {
        //Split sentence by spaces
        sentenceArr = sentence.split(' ');
        document.getElementById("countOfWords").innerHTML = 'Word count: ' + sentenceArr.length;
    } else {
        document.getElementById("countOfWords").innerHTML = "Please enter a sentence of words.";
    }
}



// Create a username for given name
function createUsername() {
    //Retrieve name
    let name = document.getElementById("userFullName").value;

    //Input validation
    if (name.includes(' ')) {
        //Split name by space
        nameArr = name.split(' ');

        //Create username elements
        lastName = nameArr[1].toLowerCase();
        firstInitial = nameArr[0].charAt(0).toLowerCase();
        ordVal = nameArr[0].charCodeAt(nameArr[0].length - 1);

        //Display username
        username = lastName + firstInitial + ordVal;
        document.getElementById("createdUsername").innerHTML = username;
    } else {
        document.getElementById("createdUsername").innerHTML = "Please enter a name with a space.";
    }
}