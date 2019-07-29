var regValues = RegFactory();

function regElement() {
var regNumber= document.querySelector(".regName").value

let li = document.createElement('li')
li.innerHTML=regNumber;
var newli = document.querySelector(".numberPlates");

newli.appendChild(li);


}
addButton = document.querySelector("#addButton")
addButton.addEventListener("click", regElement)
