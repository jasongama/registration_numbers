function RegFactory() {

    var holdingNoPlate = [];

    var regEmpty = "";

    function addRegNumbers(plate) {
        var regex = /[!@#$%^&*();,.?"^$:^+=${'}`_;''"\[.*?\]|<>]/i
        var test = regex.test(plate2)
        var plate2  =  plate.toUpperCase().trim()
        if (test === false && plate2.length > 0) {

            if (plate2.startsWith('CA ') || plate2.startsWith("CN ") || plate2.startsWith("CL ")) {
                if (!holdingNoPlate.includes(plate2)) {
                    holdingNoPlate.push(plate2)
                    console.log(plate2)

                }


            }
        } 
        else {
            alert("invalide  registration")
        }


        // else{
        //     return " remove the of token"
        //  }
    }



    function getReg() {

        return holdingNoPlate;

    }

    function regsEmpty() {
        return regEmpty;
    }

    function filter(location) {

        var storeNumberPlate = [];

        for (var i = 0; i < holdingNoPlate.length; i++) {
            var currentReg= holdingNoPlate[i]
            if (holdingNoPlate[i].startsWith(location)) {
                storeNumberPlate.push(currentReg)
            }

        }
        console.log(storeNumberPlate)
        return storeNumberPlate;
    }


    return {
        addRegNumbers,
        getReg,
        filter,
        regsEmpty

    }
}