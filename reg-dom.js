var showButton = document.querySelector(".showButton")
addButton = document.querySelector("#addButton")
var resetButton = document.querySelector(".resetButton")
var regNumber = document.querySelector(".regName")
var regNumbersElement = document.querySelector(".numberPlates");
var errorMessage = document.querySelector(".col-7");
var regValues = RegFactory();
var regstorage = JSON.parse(localStorage.getItem("plate"));

var regFactoryInstance = RegFactory(regstorage);
display();
function clear2() {
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
        errorMessage.innerHTML = regFactoryInstance.getErrorMessage()
        clear2()
    }
    localStorage.setItem("plate", JSON.stringify(regFactoryInstance.getReg()))

}





function display() {

    var newli = document.querySelector(".numberPlates");

    if (newli.hasChildNodes()) {
        newli.innerHTML = "";
    }

    var RegTypeRadio = document.querySelector
    ("input[name=regNumber]:checked");
    
    var n = regFactoryInstance.filter(RegTypeRadio.value)
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