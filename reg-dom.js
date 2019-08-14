var showButton = document.querySelector(".showButton")
addButton = document.querySelector("#addButton")
var resetButton = document.querySelector(".resetButton")
var regNumber = document.querySelector(".regName")
var errorMessage = document.querySelector(".col-7");
var regValues = RegFactory();
var regstorage = JSON.parse(localStorage.getItem("plate"));
var regFactoryInstance = RegFactory();

function clearError() {
	setTimeout(function () {
		errorMessage.innerHTML = "";
	}, 2000);
}

function regElement() {
    

    var regNumbersElement = document.querySelector(".numberPlates");
    

    var regNumber = document.querySelector(".regName").value
    
    regNumber = regNumber.toUpperCase();
    

    var didAddRegNumber = regFactoryInstance.addRegNumbers(regNumber);
    if (didAddRegNumber) {
        
        let li = document.createElement('li')
        li.innerHTML = regNumber;
        regNumbersElement.appendChild(li)

    } else {
       regNumbersElement.innerHTML  =regFactoryInstance.getErrorMessage()
       clearError()
    }
    localStorage.setItem("plate", JSON.stringify(regFactoryInstance.getReg()))







}




function display() {

    var newli = document.querySelector(".numberPlates");

    if (newli.hasChildNodes()) {
        newli.innerHTML = "";
    }

    var RegTypeRadio = document.querySelector("input[name=regNumber]:checked");

    var n = regFactoryInstance.filter(RegTypeRadio.value)

    for (var i = 0; i < n.length; i++) {
        var li = document.createElement('li')
        li.innerHTML = n[i];

        newli.appendChild(li);
    }

    
}
function resetButton() {
    localStorage.clear();
    regNumbersElement.innerHTML = "";
   
}


addButton.addEventListener("click", regElement)

showButton.addEventListener("click", display)