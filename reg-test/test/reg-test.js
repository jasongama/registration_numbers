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
       
       
        
       
        assert.deepEqual(  "please add the registration number and Select a location" , input.getErrorMessage());

    });
    it("it shouldn't take any other town except CA CN CL ", function () {
        var input =  RegFactory();
        input.addRegNumbers ("CY 433 ");
       
       
        
       
        assert.deepEqual(  "invalid town" , input.getErrorMessage());

    });
 
 
    it("It will show all the valid registration numbers. ", function () {
        var input =  RegFactory();
        input.addRegNumbers ("CA 123");
        input.addRegNumbers ("CN 433");
        input.addRegNumbers ("CL 453");
        
       
        
       
        assert.deepEqual( [ 'CN 433'] , input.filter('CN 433'));
        assert.deepEqual( [ 'CL 453'] , input.filter('CL 453'));
        assert.deepEqual( [ 'CA 123'] , input.filter('CA 123'));

    });
   
});
