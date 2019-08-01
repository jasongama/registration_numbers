var showButton = document.querySelector(".showButton")
addButton = document.querySelector("#addButton")

var regNumber = document.querySelector(".regName")
var regValues = RegFactory();

var regFactoryInstance = RegFactory();


function regElement() {

    var regNumber = document.querySelector(".regName").value


    let li = document.createElement('li')
    regFactoryInstance.addRegNumbers(regNumber)
    li.innerHTML = regFactoryInstance.getReg();
    var newli = document.querySelector(".numberPlates");

    newli.appendChild(li);
}



function display() {
   
    var regNumberElem = document.querySelector(".regName").value
console.log(regNumberElem)
    var RegTypeRadio = document.querySelector("input[name=regNumber]:checked");

console.log(RegTypeRadio.value)
    regFactoryInstance.filter(regNumberElem);
       console.log(regFactoryInstance.getAllFromCapeTown())

    for (var i = 0; i < RegTypeRadio.length; i++) {
        if (RegTypeRadio[i].checked) {
            if (RegTypeRadio[i].value === "CA") {
                document.querySelector('.numberPlates').innerHTML = regFactoryInstance.getAllFromCapeTown();

            } else if (RegTypeRadio[i].value === "CN") {
                document.querySelector('.numberPlates').innerHTML = regFactoryInstance.getAllFromWellington();

            } else if (RegTypeRadio[i].value === "CL") {
                document.querySelector('.numberPlates').innerHTML = regFactoryInstance.getAllFromStellenbosch();
            }

        }


    }

}

addButton.addEventListener("click", regElement)

showButton.addEventListener("click", display)