function RegFactory() {

    var holdingNoPlate = [];
    

    function addRegNumbers(plate) {
        var regex = /[!@#$%^&*();,.?"^$:^+=${'}`_;''"\[.*?\]|<>]/i
          var test = regex.test(plate)
            if(test === false){
          console.log(test);
        if(!holdingNoPlate.includes(plate)){
            holdingNoPlate.push(plate)
        }
            }
            else{
                alert('wrong')
            }
    
    }

    function getReg() {
        
        return holdingNoPlate;
        
    }



    function filter(location, reg) {
        if(reg){
            reg = getReg();
        }
        var storeNumberPlate = [];

        for (var i = 0; i < holdingNoPlate.length; i++) {
            var currentNumber = holdingNoPlate[i];

            if (currentNumber.startsWith(location)) {
                storeNumberPlate.push(currentNumber)
            }
        
        }

        

        return storeNumberPlate;
    }
 
    // console.log(storeNumberPlate)
    return {
        addRegNumbers,
        getReg,
        filter

    }
}