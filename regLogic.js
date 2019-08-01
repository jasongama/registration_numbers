function RegFactory() {

    var holdingNoPlate = [];


    function addRegNumbers(plate) {

        holdingNoPlate.push(plate);

    }

    function getReg() {
        return holdingNoPlate;
    }



    function filter(location) {

        var storeNumberPlate = [];

        for (var i = 0; i < holdingNoPlate.length; i++) {
            var currentNumber = holdingNoPlate[i];

            if (currentNumber.startsWith(location)) {
                storeNumberPlate.push(currentNumber)
            }
            //find a way to get the first 2 caracters of the current reg
            //create a var called that will hold these characters
            //var loc = currentNumber.substring(0, 2);

        }

        console.log(storeNumberPlate)

        return storeNumberPlate;
    }


    console.log(holdingNoPlate)
    return {
        addRegNumbers,
        getReg,
        filter

    }
}