var showButton = document.querySelector(".showButton")
addButton = document.querySelector("#addButton")

var regNumber = document.querySelector(".regName")
var regValues = RegFactory();

var regFactoryInstance = RegFactory();
var regex = /[!@#$%^&*();,.?"^$:^+=${'}`_;''"\[.*?\]|<>]/i

function regElement() {
    regName = "";
    var regNumber = document.querySelector(".regName").value
     let li = document.createElement('li')
    regFactoryInstance.addRegNumbers(regNumber)
    li.innerHTML = regFactoryInstance.getReg();
    var newli = document.querySelector(".numberPlates");

    newli.appendChild(li);
}



function display() {


   var RegTypeRadio = document.querySelector("input[name=regNumber]:checked");
   var newli = document.querySelector(".numberPlates");
   
  newli.innerHTML= regFactoryInstance.filter([], RegTypeRadio.value)

    }



addButton.addEventListener("click", regElement)

showButton.addEventListener("click", display)