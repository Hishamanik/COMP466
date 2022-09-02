function convert_lengths(source, value) {
    let numberVal = parseFloat(value);
    let Millimeter = document.getElementById("Millimeter");
    let Centimeter = document.getElementById("Centimeter");
    let Decimeter = document.getElementById("Decimeter");
    let Meter = document.getElementById("Meter");
    let Decameter = document.getElementById("Decameter");
    let Hectometer = document.getElementById("Hectometer");
    let Kilometer = document.getElementById("Kilometer");

    if (source === "Millimeter"){
        Centimeter.value = (numberVal/10).toFixed(2);
        Decimeter.value = (numberVal/100).toFixed(2);
        Meter.value = (numberVal/1000).toFixed(2);
        Decameter.value = (numberVal/10000).toFixed(2);
        Hectometer.value = (numberVal/100000).toFixed(2);
        Kilometer.value = (numberVal/1000000).toFixed(2);
    }
    if (source === "Centimeter"){
        Millimeter.value = (numberVal*10).toFixed(2);
        Decimeter.value = (numberVal/10).toFixed(2);
        Meter.value = (numberVal/100).toFixed(2);
        Decameter.value = (numberVal/1000).toFixed(2);
        Hectometer.value = (numberVal/10000).toFixed(2);
        Kilometer.value = (numberVal/100000).toFixed(2);
    }
    if (source === "Decimeter"){
        Millimeter.value = (numberVal*100).toFixed(2);
        Centimeter.value = (numberVal*10).toFixed(2);
        Meter.value = (numberVal/10).toFixed(2);
        Decameter.value = (numberVal/100).toFixed(2);
        Hectometer.value = (numberVal/1000).toFixed(2);
        Kilometer.value = (numberVal/10000).toFixed(2);
    }
    if (source === "Meter"){
        Millimeter.value = (numberVal*1000).toFixed(2);
        Centimeter.value = (numberVal*100).toFixed(2);
        Decimeter.value = (numberVal*10).toFixed(2);
        Decameter.value = (numberVal/10).toFixed(2);
        Hectometer.value = (numberVal/100).toFixed(2);
        Kilometer.value = (numberVal/1000).toFixed(2);
    }
    if (source === "Decameter"){
        Millimeter.value = (numberVal*10000).toFixed(2);
        Centimeter.value = (numberVal*1000).toFixed(2);
        Decimeter.value = (numberVal*100).toFixed(2);
        Meter.value = (numberVal*10).toFixed(2);
        Hectometer.value = (numberVal/10).toFixed(2);
        Kilometer.value = (numberVal/100).toFixed(2);
    }
    if (source === "Hectometer"){
        Millimeter.value = (numberVal*100000).toFixed(2);
        Centimeter.value = (numberVal*10000).toFixed(2);
        Decimeter.value = (numberVal*1000).toFixed(2);
        Meter.value = (numberVal*100).toFixed(2);
        Decameter.value = (numberVal*10).toFixed(2);
        Kilometer.value = (numberVal/10).toFixed(2);
    }
    if (source === "Kilometer"){
        Millimeter.value = (numberVal*1000000).toFixed(2);
        Centimeter.value = (numberVal*100000).toFixed(2);
        Decimeter.value = (numberVal*10000).toFixed(2);
        Meter.value = (numberVal*1000).toFixed(2);
        Decameter.value = (numberVal*100).toFixed(2);
        Hectometer.value = (numberVal*10).toFixed(2);
    }
}

function convert_weight(source, value) {
    let numberVal = parseFloat(value);
    let kilogram = document.getElementById("kilogram");
    let grams = document.getElementById("grams");
    let pounds = document.getElementById("pounds");
    let ounces = document.getElementById("ounces");
	
    if (source === "grams"){
		kilogram.value = (numberVal/1000).toFixed(2);
		tons.value = (numberVal/1000000).toFixed(2);
		pounds.value = (numberVal*0.00220462).toFixed(2);
		ounces.value = (numberVal*0.035274).toFixed(2);
	}
    if (source === "ounces"){
		kilogram.value = (numberVal*0.0283495).toFixed(2);
		grams.value = (numberVal*28.3495).toFixed(2);
		pounds.value = (numberVal*0.0625).toFixed(2);
		tons.value = (numberVal/35273.962).toFixed(2);
	}
    if (source === "pounds"){
		kilogram.value = (numberVal*0.453592).toFixed(2);
		grams.value = (numberVal*453.592).toFixed(2);
		tons.value = (numberVal*0.000453592).toFixed(2);
		ounces.value = (numberVal*16).toFixed(2);
	}
	if (source === "kilogram"){
		tons.value = (numberVal*0.001).toFixed(2);
		grams.value = (numberVal*1000).toFixed(2);
		pounds.value = (numberVal*2.20462).toFixed(2);
		ounces.value = (numberVal*35.274).toFixed(2);
	}

}

function convert_area(source, value) {
    let numberVal = parseFloat(value);
    let length = document.getElementById("length");
    let width = document.getElementById("width");
    let area = document.getElementById("area");
	
    if (source === "length" ){
		area.value = (width.value * numberVal).toFixed(2);
		tons.value = (numberVal/1000000).toFixed(2);
		pounds.value = (numberVal*0.00220462).toFixed(2);
		ounces.value = (numberVal*0.035274).toFixed(2);
	}
    if (source === "ounces"){
		kilogram.value = (numberVal*0.0283495).toFixed(2);
		grams.value = (numberVal*28.3495).toFixed(2);
		pounds.value = (numberVal*0.0625).toFixed(2);
		tons.value = (numberVal/35273.962).toFixed(2);
	}
    if (source === "pounds"){
		kilogram.value = (numberVal*0.453592).toFixed(2);
		grams.value = (numberVal*453.592).toFixed(2);
		tons.value = (numberVal*0.000453592).toFixed(2);
		ounces.value = (numberVal*16).toFixed(2);
	}
	if (source === "kilogram"){
		tons.value = (numberVal*0.001).toFixed(2);
		grams.value = (numberVal*1000).toFixed(2);
		pounds.value = (numberVal*2.20462).toFixed(2);
		ounces.value = (numberVal*35.274).toFixed(2);
	}

}

function areaCal() {
    
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;

    if(length === "")
    {
       alert("Please enter a valid len")
    }
    else if (width === "")
    {
       alert("Please enter a valid wid")
    }
    var value = 0;
    var value = length*width;

    resultArea(value);

}

function resultArea(value)
{
    var area = document.getElementById("area");
    area.textContent  = value.toFixed(2);

}

function volumeCal() {
    
    let lengthV = document.getElementById("lengthV").value;
    let widthV = document.getElementById("widthV").value;
    let height = document.getElementById("height").value;

    if(lengthV === "")
    {
       alert("Please enter a valid length")
    }
    else if (widthV === "")
    {
       alert("Please enter a valid width")
    }
    else if (height === "")
    {
       alert("Please enter a valid height")
    }
    var value = 0;
    var value = lengthV*widthV*height;

    resultVolume(value);

}

function resultVolume(value)
{
    var volume = document.getElementById("volume");
    volume.textContent  = value.toFixed(2);

}