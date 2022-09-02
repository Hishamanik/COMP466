function mortgageCal() {
    
    let mAmount = document.getElementById("mAmount").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let payFreq = document.getElementById("payFreq").value;

    if(mAmount === "")
    {
       alert("Please enter a valid Mortgage Amount")
    }
    else if (rate === "")
    {
       alert("Please enter a valid rate")
    } 
    else if (years === "")
    {
       alert("Please enter a valid year number")
    } 
    else {
        var payFreqVal = 0;
        if(payFreq == "monthly"){
            payFreqVal = 12;
        }
        else if(payFreq == "biweekly"){
            payFreqVal = 52/2;
        }
        else if(payFreq == "monthly"){
            payFreqVal = 52/4;
        }
        else if(payFreq == "semimonthly") {
            payFreqVal = 52/8;
        }
        else {
            payFreqVal = 52;
        }

        var i = rate/100;
        var int = payFreqVal;
        var interestRate = i/int;
        var totalNumPayments = years*payFreqVal;
        var term = Math.pow((1+interestRate), totalNumPayments);
        var payment = 0;
        var payment = mAmount*((interestRate*term)/(term-1));
        
        
        result(payment);

    }
}


function result(pay)
{
    var payment = document.getElementById("payment");
    payment.textContent  = hey //pay.toFixed(2); //to the nearest cent

}
