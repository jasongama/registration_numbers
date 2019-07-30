function RegFactory(){
   
    var holdingNoPlate =[];


    function addRegNumbers(plate){
        
        holdingNoPlate.push(plate);

    }
    function getReg(){
        return holdingNoPlate;
    }

   
    function setTown(town){
        
        if(town == "CA"){
            return "CapeTown";
        }
        else if(town ==  "Wellington"){
            return "CN";
        }
        else if(town == "Stellenbosch"){
            return "CL";
        }
        else{
            return "invalid";
        }
        

    }
    
    function filter(regStart){
     
     var storeNumberPlate = [];
     console.log(storeNumberPlate);

         for(var i=0; i= holdingNoPlate.length; i++ ){
            var currentNumber = holdingNoPlate[i];
            if (holdingNoPlate[i].startWidth(regStart)){
             currentNumber.push(storeNumberPlate)
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