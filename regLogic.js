function RegFactory(){
   
    var holdingNoPlate =[];


    function addRegNumbers(plate){
        
        holdingNoPlate.push(plate);

    }
    function getReg(){
        return holdingNoPlate;
    }

   

    function filter(loc){
     
     var storeNumberPlate = [];

         for(var i=0; i < holdingNoPlate.length; i++ ){
            var currentNumber = holdingNoPlate[i];
            if (holdingNoPlate[i].startWidth(loc)){
                storeNumberPlate.push(currentNumber)
            }
            
     }

     return storeNumberPlate;
    }
    
    
    
    return{
        addRegNumbers,
        setTown,
        getReg,
        filter

    }
}