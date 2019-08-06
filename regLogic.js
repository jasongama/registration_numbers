function RegFactory() {

    var holdingNoPlate = [];
    var regi;
    var regEmpty= "";

    function addRegNumbers(plate) {
        var regex = /[!@#$%^&*();,.?"^$:^+=${'}`_;''"\[.*?\]|<>]/i
        var test = regex.test(plate)
     
        if (test === false && plate.length > 0) {
           
            if(plate.startsWith('CA ') || plate.startsWith("CN ") || plate.startsWith("CL ")){
             
            if(!holdingNoPlate.includes(plate)){
            holdingNoPlate.push(plate)

            }
            
    
    }
    }
     
    // else{
    //     alert('wrongfdhtdh')
    // }


    // else{
    //     alert('wrong')
    // }
    }



    function getReg() {

        return holdingNoPlate;

    }

    function getRegi() {
        return regi;
    }

    function regsEmpty(){
        return regEmpty;
    }

    function filter(location) {

        var storeNumberPlate = [];

        for (var i = 0; i < holdingNoPlate.length; i++) {
            if (holdingNoPlate[i].startsWith(location)) {
                storeNumberPlate.push(holdingNoPlate[i])
            }

        }
    console.log(storeNumberPlate)
        return storeNumberPlate;
    }

   
    return {
        addRegNumbers,
        getReg,
        getRegi,
        filter,
        regsEmpty

    }
}