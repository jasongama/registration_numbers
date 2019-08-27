var showButton = document.querySelector(".showRegButton")
addButton = document.querySelector("#regAddButton")
var resetButton = document.querySelector(".regResetButton")
var regNumber = document.querySelector(".regTempName")
var regNumbersElement = document.querySelector(".plateHolder");
var myError = document.querySelector(".message");
var regValues = RegFactory();
var regstorage = JSON.parse(localStorage.getItem("plate"));

var regFact = RegFactory(regstorage);
display();
function clearError() {
    setTimeout(function () {
        myError.innerHTML = "";
    }, 2000);
}


function regElement() {


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




function display() {

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



function resetsButton() {
    location.reload
    localStorage.clear();
    regNumbersElement.innerHTML = "";
}
resetButton.addEventListener("click", resetsButton)
addButton.addEventListener("click", regElement)

showButton.addEventListener("click", display)