function BMICal() {
    
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if(height === "")
    {
       alert("Please enter a valid height")
    }
    else if (weight === "")
    {
       alert("Please enter a valid wight")
    }
    var height_m = Math.pow(2,(height/100));
    var bmi = weight/height_m;

    result(bmi);

}

function result(bmi)
{
    var BMI = document.getElementById("BMI");
    BMI.textContent  = bmi.toFixed(2);

}