function RegFactory( storerage) {
    var holdingNoPlate = storerage || [] ;

    var errMessage = "";

    function addRegNumbers(plate) {
        var regex = /[!@#$%^&*();,/.?"^$:^+=${'}`_;''"\[.*?\]|<>]/i
        var test = regex.test(plate)
        errMessage = "";
        if (test === false && plate.length > 0 && plate.length > 4) {

            if (plate.startsWith('CA ') || plate.startsWith("CN ") || plate.startsWith("CL ")) {
                if (!holdingNoPlate.includes(plate)) {
                    holdingNoPlate.push(plate)
                    return true;
                }
                
            } else {
                // this is not a valid town
                errMessage = "invalid town";
            
                return false;
            }
        } else {
            // invalid format
            errMessage = "please add the registration number and Select a location";
            
            return false;
        }
        
       
    }



    function getReg() {

        return holdingNoPlate;

    }


    function filter(location) {

        var storeNumberPlate = [];
        if(location ===""){
            return holdingNoPlate
        }else{
        for (var i = 0; i < holdingNoPlate.length; i++) {
            var currentReg = holdingNoPlate[i]
            if (holdingNoPlate[i].startsWith(location)) {
                storeNumberPlate.push(currentReg)
            }

        }
    }
    
        // console.log(storeNumberPlate)
        return storeNumberPlate;
    }

    function getErrorMessage() {
        return errMessage;
    }


    return {
        addRegNumbers,
        getReg,
        filter,
        getErrorMessage

    }
}