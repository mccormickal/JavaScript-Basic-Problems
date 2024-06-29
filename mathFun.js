//Event listeners
document.getElementById("tableButton").addEventListener("click", function(event) {
    event.preventDefault();
});


//Function to ask for numbers through a prompt
function askNumbers() {
    //Initialize array and number value
    let numsArray = [];
    let num;

    //Loop to ask for numbers until a non-number is entered
    while(true) {
        num = prompt("Enter a number: \n(Enter a letter to stop)");
        if (!isNaN(num)) {
            numsArray.push(parseInt(num));
        } else {
            break;
        }
    }
    document.getElementById("displayNums").innerHTML = numsArray.join(', ');
    sortNumbers(numsArray);

    //Display table
    document.getElementById("outputTable").style.visibility = 'visible';
}


//Sort numbers in array in ascending order
function sortNumbers(numsArray) {
    sortedArray = numsArray.sort(function(a, b) {return a - b;});
    document.getElementById("sortedNums").innerHTML = sortedArray.join(', ');

    findMax(sortedArray);
    findMin(sortedArray);
    calculateMeanAndStd(sortedArray);
    calculateMedian(sortedArray);
    //stdDev(sortedArray);
    numEven(sortedArray);
    numOdd(sortedArray);
    multipleFive(sortedArray);
}

//Find maximum number in an array
function findMax(numsArray) {
    let max = numsArray[0];
    for(i = 0; i < numsArray.length; i++) {
        if(numsArray[i] > max) {
            max = numsArray[i]
        } 
        // max = numsArray[i] > max ? numsArray[i] : max;
    }
    document.getElementById("maximum").innerHTML = max;
}

//Find minimum number in an array
function findMin(numsArray) {
    let min = numsArray[0];
    for(i = 0; i < numsArray.length; i++) {
        min = numsArray[i] < min ? numsArray[i] : min;
    }
    document.getElementById("minimum").innerHTML = min;
}

//Calculate mean value of numbers in an array
function calculateMeanAndStd(numsArray) {
    //Calculate Mean
    let sum = 0;
    let n = numsArray.length

    //Loop to get sum
    for(i = 0; i < n; i++) {
        sum += numsArray[i];
    }
    let mean = sum/n;

    //Find standard deviation
    let summation = 0;
    for(i = 0; i < n; i++) {
        summation += (numsArray[i] - mean) ** 2;
    }
    variance = summation / n;
    std = Math.sqrt(variance);
    
    //Display output
    document.getElementById("mean").innerHTML = mean.toFixed(2);
    document.getElementById("stdDev").innerHTML = std.toFixed(2);
}

//Calculate median value of numbers in an array
function calculateMedian(numsArray) {
    //let sortedArray = numsArray.sort();
    let median;
    const mid = Math.floor(numsArray.length/2)
    if (numsArray.length % 2 == 0) {
        median = (numsArray[mid - 1] + numsArray[mid]) / 2;
    } else {
        median = numsArray[mid];
    }
    document.getElementById("median").innerHTML = median;
}

//Calculare standard deviated of numbers in an array
function stdDev(numsArray) {
    let n = numsArray.length
    let mean = parseFloat(calculateMean(numsArray));
    let summation = 0;
    for(i = 0; i < n; i++) {
        summation += (numsArray[i] - mean) ** 2;
    }
    variance = summation / n;
    std = Math.sqrt(variance);
    document.getElementById("stdDev").innerHTML = std;
}

//Count number of even numbers in array
function numEven(numsArray) {
    let evenNumCount = 0;
    for(i = 0; i < numsArray.length; i++) {
        if (numsArray[i] % 2 == 0) {
            evenNumCount += 1;
        }
    }
    document.getElementById("numEven").innerHTML = evenNumCount;
}

//Count number of odd numbers in array
function numOdd(numsArray) {
    let oddNumCount = 0;
    for(i = 0; i < numsArray.length; i++) {
        if (numsArray[i] % 2 == 1) {
            oddNumCount += 1;
        }
    }
    document.getElementById("numOdd").innerHTML = oddNumCount;
}

//Display numbers in an array that are a multiple of 5
function multipleFive(numsArray) {
    msg = '';
    for(i = 0; i < numsArray.length; i++) {
        if (numsArray[i] % 5 == 0) {
            msg += numsArray[i] + ", ";
        }
    }
    document.getElementById("multipleFive").innerHTML = msg;
}