describe('Registration', function () {
    it("It should pass all the registrations in a list", function () {
        var input =  RegFactory();
        input.addRegNumbers ("CA 123");
        input.addRegNumbers ("CN 433");
        input.addRegNumbers ("CL 453");

        
       
        assert.deepEqual( [ 'CA 123', 'CN 433', 'CL 453' ] , input.getReg());

    });

    it("I", function () {
        var input =  RegFactory();
        input.addRegNumbers ("CA 123");
        input.addRegNumbers ("CN 433");
        input.addRegNumbers ("CL 453");
        input.addRegNumbers ("CL 453");
    
        assert.equal(input. filter(), "CL 1234");

    });

});