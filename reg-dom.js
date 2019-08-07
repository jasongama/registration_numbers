var showButton = document.querySelector(".showButton")
addButton = document.querySelector("#addButton")

var regNumber = document.querySelector(".regName")

var regValues = RegFactory();

var regFactoryInstance = RegFactory();

function regElement() {

    var regNumber = document.querySelector(".regName").value 
        
    let li = document.createElement('li')
    regFactoryInstance.addRegNumbers(regNumber)
    
    var regList = regFactoryInstance.getReg();

    for (var i = 0; i < regList.length; i++) {
        if ((regList[i])) {
            li.innerHTML = regList[i]
        }
    }
 
   
    var newli = document.querySelector(".numberPlates");

    newli.appendChild(li);

}
     



function display() {
    
    var newli = document.querySelector(".numberPlates");

    if (newli.hasChildNodes()) {
        newli.innerHTML = "";
    }

    var RegTypeRadio = document.querySelector("input[name=regNumber]:checked");
//  for(var i = 0; i< RegTypeRadio.length; i++){
//     RegTypeRadio[i]

//     if(RegTypeRadio){
//         regFactoryInstance.filter(RegTypeRadio.value)
//     }
   

// }

var n = regFactoryInstance.filter(RegTypeRadio.value)
var y;
for(var i=0; i<n.length; i++){
y  = n[i];

}
var li = document.createElement('li')
li.innerHTML = y;

  //  console.log(li.innerHTML)

    newli.appendChild(li);
}



addButton.addEventListener("click", regElement)

showButton.addEventListener("click", display)