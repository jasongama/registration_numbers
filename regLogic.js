function RegFactory() {

    var holdingNoPlate = [];
    var regi;

    function addRegNumbers(plate) {
        var regex = /[!@#$%^&*();,.?"^$:^+=${'}`_;''"\[.*?\]|<>]/i
          var test = regex.test(plate)
            if(test === false){
        //  console.log(test);

        regi = plate;
       // if(!holdingNoPlate.includes(regi)){
            holdingNoPlate.push(regi)
        //    return regi;
        }
            }
            // else{
            //     alert('wrong')
            // }
    


    function getReg() {
        
        return holdingNoPlate;
        
    }

    function  getRegi(){
        return regi;
    }
       


    function filter(location) {
    
        var storeNumberPlate = [];

        for (var i = 0; i < holdingNoPlate.length; i++) {
            var currentNumber = holdingNoPlate[i];

            if (currentNumber.startsWith(location)) {
                storeNumberPlate.push(currentNumber)
            }
        
        }
console.log(storeNumberPlate)
        return storeNumberPlate;
    }
 
    console.log(holdingNoPlate)
    return {
        addRegNumbers,
        getReg,
        getRegi,
        filter

    }
}