var showButton = document.querySelector(".showRegButton")
addButton = document.querySelector("#regAddButton")
var resetButton = document.querySelector(".regResetButton")
var regNumber = document.querySelector(".regTempName")
var regTempNumberElement = document.querySelector(".plateHolder");
var myError = document.querySelector(".message");
var regValues = RegFactory();
var regTempstorage = JSON.parse(localStorage.getItem("plate"));

var regFact = RegFactory(regstorage);
displaytemp();
function clearError() {
    setTimeout(function () {
        myError.innerHTML = "";
    }, 2000);
}


function tempReg() {


    var regNumbersElement = document.querySelector(".plateHolder");

    
    var regNumber = document.querySelector(".regTempName").value

    regNumber = regNumber.toUpperCase();
    

    var didAddRegNumber = regFact.addRegNumbers(regNumber);
    if (didAddRegNumber) {

        let li = document.createElement('li')
        li.innerHTML = regNumber;
        regNumbersElement.appendChild(li)

    } else {
        myError.innerHTML = regFact.getErrorMessage()
        clearError()
       
    }
    localStorage.setItem("plate", JSON.stringify(regFact.getReg()))

}




function displaytemp() {

    var newli = document.querySelector(".plateHolder");

    if (newli.hasChildNodes()) {
        newli.innerHTML = "";
    }

    var RegTempTypeRadio = document.querySelector("input[name=regTempNumber]:checked");
    
    var n = regFact.filter(RegTempTypeRadio.value)
    //console.log(n)
    for (var i = 0; i < n.length; i++) {
        var li = document.createElement('li')
        li.innerHTML = n[i];

        newli.appendChild(li);
    }


}



function reset() {
    location.reload()
    localStorage.clear();
    regTempNumberElement.innerHTML = "";
}
resetButton.addEventListener("click", reset)
addButton.addEventListener("click", tempReg)

showButton.addEventListener("click", displaytemp)
