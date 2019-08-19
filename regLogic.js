function RegFactory(validplate) {


    var holdingNoPlate = validplate || [];

    var errMessage = "";


    function addRegNumbers(plate) {



        var regex = /[!@#$%^&*();,.?"^$:^+=${'}`_;''"\[.*?\]|<>]/i
        let testgex = regex.test(plate)
        var regex = /[A-Za-z]{2}\s[0-9]{3}\s[0-9]{3}/i;

        let testgex1 = regex.test(plate);

        var regex = /[A-Za-z]{2}\s[0-9]{5}/i;

        let testgex2 = regex.test(plate);
    
        var regex = /^( ?[a-zA-Z0-9]){1,9}$/i;
        let testgex3 = regex.test(plate);

        var regex =/w*[A-Z]\w*[A-Z]{2}\w*/i;
        let testgex4 = regex.test(plate);

        if (!testgex && !testgex1 && !testgex2 && !testgex3 && !testgex4  )  {
            // invalid format
            errMessage = "Please Enter A Valid Registration number"

            return false;
        }




        if (!holdingNoPlate.includes(plate)) {
            holdingNoPlate.push(plate)
            return true;
        } else {
            // this doesn't accept duplicate
            errMessage = "The registration number already exist";

            return false;
        }


    }



    function getReg() {
 
        return holdingNoPlate;

    }


    function filter(location) {

        var storeNumberPlate = [];

        for (var i = 0; i < holdingNoPlate.length; i++) {
            var currentReg = holdingNoPlate[i]
            if (holdingNoPlate[i].startsWith(location)) {
                storeNumberPlate.push(currentReg)
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