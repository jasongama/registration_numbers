function RegFactory() {

    var holdingNoPlate = [];

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
        
        
        describe('Registration', function () {
            it("It should pass all the registrations in a list", function () {
                var input =  RegFactory();
                input.addRegNumbers("CA 453 ");
                input.addRegNumbers("CN 673 ");
        
                
               
                assert.equal(["CA 453-6731 ", "CN 453-6731 "],input.getReg() );
        
            });
            // it("It should greet my name in english", function () {
            //     var input =  RegFactory();
            //     input.addRegNumbers(["CA1234",  "CL2345" ])
            
            //     assert.equal(input. filter(), "CA1234");
        
            // });
        
        });
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