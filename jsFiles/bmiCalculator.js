//Add event listener
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
});

//Function to calculate BMI
function CalculateBMI() {
    //Get variables
    let gender = document.getElementById("gender").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    //Calculate BMI
    let bmi = 1000 * (weight/(height**2));
    bmi = bmi.toFixed(2);

    //Conditional to determine if overweight or not
    let overweight;
    if (bmi > 25) {
        overweight = true;
    } else {
        overweight = false;
    }

    //Conditional to determine life expectancy
    let lifeExpectancy;
    if (gender == 'male' && overweight == false) {
        lifeExpectancy = 79.4;
    } else if (gender == 'female' && overweight == false) {
        lifeExpectancy = 83.5;
    } else if (gender == 'male' && overweight == true) {
        lifeExpectancy = 77.3;
    } else {
        lifeExpectancy = 81.4;
    }

    //Display output
    document.getElementById("output").innerHTML = 
    "<strong>Body Mass Index: </strong>" + bmi + "<br><strong>Life Expectancy: </strong>" + lifeExpectancy;
}
