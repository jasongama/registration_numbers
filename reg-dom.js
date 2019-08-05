var showButton = document.querySelector(".showButton")
addButton = document.querySelector("#addButton")

var regNumber = document.querySelector(".regName")
var regValues = RegFactory();

var regFactoryInstance = RegFactory();

function regElement() {
    
    var regNumber = document.querySelector(".regName").value
     let li = document.createElement('li')
    // regFactoryInstance.addRegNumbers(regNumber)
    li.innerHTML = regFactoryInstance.getReg();
    var newli = document.querySelector(".numberPlates");

    newli.appendChild(li);
}



function display() {
    var RegTypeRadio = document.querySelector("input[name=regNumber]:checked");

    if(RegTypeRadio){
       var val = RegTypeRadio.value
    }
regFactoryInstance.filter(val)

  
   var newli = document.querySelector(".numberPlates");
   let li = document.createElement('li')
   li.innerHTML= regFactoryInstance.filter(RegTypeRadio.value)
  
  newli.appendChild(li);
    }



addButton.addEventListener("click", regElement)

showButton.addEventListener("click", display)