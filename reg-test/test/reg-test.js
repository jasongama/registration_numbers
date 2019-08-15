describe('Registration', function () {
    it("It should pass all the registrations in a list", function () {
        var input =  RegFactory();
        input.addRegNumbers ("CA 123");
        input.addRegNumbers ("CN 433");
        input.addRegNumbers ("CL 453");

        
       
        assert.deepEqual( [ 'CA 123', 'CN 433', 'CL 453' ] , input.getReg());

    });
   
    it("It will show only CN 443 when you fliter through the registrations list", function () {
        var input =  RegFactory();
        input.addRegNumbers ("CA 123");
        input.addRegNumbers ("CN 433");
        input.addRegNumbers ("CL 453");
       
        
       
        assert.deepEqual( [ 'CN 433'] , input.filter('CN 433'));

    });
  
    it("It shouldn't accept duplication and it should take registration number that you have entered once ", function () {
        var input =  RegFactory();
        input.addRegNumbers ("CL 433");
        input.addRegNumbers ("CL 433");
        input.addRegNumbers ("CL 433");       
        input.addRegNumbers ("CL 433");
       
        
       
        assert.deepEqual( [ 'CL 433'] , input.getReg());

    });
    it("It should give you an errormessange, when you try to add a empty string", function () {
        var input =  RegFactory();
        input.addRegNumbers (" ");
       
       
        
       
        assert.deepEqual(  "Please add the registration number and Select a location" , input.getErrorMessage());

    });
    it("it only accept valid towns like CapeTown, Wellington and Stellenbosch", function () {
        var input =  RegFactory();
        input.addRegNumbers ("CY 433 ");
       
       
        
       
        assert.deepEqual(  "Invalid Town" , input.getErrorMessage());

    });
 
 
    it("It will show all the valid registration numbers. ", function () {
        var input =  RegFactory();
        input.addRegNumbers ("CA 123");
        input.addRegNumbers ("CN 433");
        input.addRegNumbers ("CL 453");
        
       
        
       
        assert.deepEqual( [ 'CN 433'] , input.filter('CN 433'));
        assert.deepEqual( [ 'CL 453'] , input.filter('CL 453'));
        assert.deepEqual( [ 'CA 123'] , input.filter('CA 123'));

    });KiB/s,
    
     
    it("It will show all the valid registration numbers in a list ", function () {
        var input =  RegFactory();
        
        input.addRegNumbers ("CA 1236" );
        input.addRegNumbers ("CL 1234");
        input.addRegNumbers ("CN 3455");
        
        
       
        assert.deepEqual( [ 'CA 1236', 'CL 1234', 'CN 3455' ] , input.getReg());
      

    });
    
   
});
