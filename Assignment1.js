document.getElementsByTagName("button").addEventListener("click", calcul); //the button should be outside the function

function calcul() {
    var age = parseInt(document.getElementById("age").value);
    var height = parseInt(document.getElementById("height").value);
    var weigth = parseInt(document.getElementById("weigth").value);
    var gender = document.getElementById('gender').selectedIndex;

    const seden = document.getElementById("sedentary").checked;
    const lightly = document.getElementById("lightly active").checked;
    const moderately = document.getElementById("moderately active").checked;
    const very = document.getElementById("very active").checked;
    const extra = document.getElementById("extra active").checked;
    var calorieIntake;
    var bmr = 0;

    if (gender == 0) {
        bmr = 66.5 + (13.75 * weigth) + (5.003 * height) - (6.755 * age);
    }

    else {
        bmr = 655.1 + (9.563 * weigth) + (1.850 * height) - (4.676 * age);

    }

    if (seden == true) {
        calorieIntake = bmr * 1.2;
    }
    else if (lightly == true) {
        calorieIntake = bmr * 1.375;
    }

    else if (moderately == true) {
        calorieIntake = bmr * 1.55;
    }
    else if (very == true) {
        calorieIntake = bmr * 1.725;
    }
    else if (extra == true) {
        calorieIntake = bmr * 1.9;
    }

    document.getElementById('lblResult').innerHTML = "Your BMR: " + bmr.toFixed(2) + ". Calorie Intake: " + calorieIntake.toFixed(2);
}



