function RegFactory(numberplates){
    var storePlate = numberplates;
    var holdingNoPlate =[];


    function addRegNumbers(plate){
        plates=plate.toUpperCase();
        storePlate.push(plates);

    }
    function setTown(town){
        if(town === "CA"){
            return "CapeTown";
        }
        else if(town === "CN"){
            return "Wellington";
        }
        else if(town === "CL"){
            return "Stellenbosch";
        }
        else{
            return "invalid";
        }


    }
    
    function fliter(town){
     var unsortedPlate= numberplates;
     
     if(town == "allTowns"){
         return unsortedPlate;
     }
     else{
         for(var i=0; i= unsortedPlate.length; i++ ){
          
            if (unsortedPlate[i].startWidth(town))
            holdingNoPlate.push(unsortedPlate[i])
         }

     }

     return unsortedPlates
    }
    
    
    
    return{
        addRegNumbers,
        setTown,
        fliter

    }
}