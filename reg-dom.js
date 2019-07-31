var regValues = RegFactory();

function regElement() {
var regNumber= document.querySelector(".regName").value

let li = document.createElement('li')
li.innerHTML=regNumber;
var newli = document.querySelector(".numberPlates");

newli.appendChild(li);
var RegTypeRadio = document.querySelectorAll(".RegTypeRadio");

for (var i = 0; i < RegTypeRadio.length; i++) {
    if (RegTypeRadio[i].checked) {
        if( RegTypeRadio[i].value === "loc") {

        }
    
    }
    

}

}
addButton = document.querySelector("#addButton")
addButton.addEventListener("click", regElement)
RegTypeRadio=document.querySelectorAll(".RegTypeRadio")
RegTypeRadio.addEventListener("click", RegTypeRadio )