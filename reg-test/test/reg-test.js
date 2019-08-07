describe('Registration', function () {
    it("It should pass all the registrations in a list", function () {
        var input =  RegFactory();
        input.addRegNumbers("CA 1234")
        
    
    
        assert.equal(input. getReg(), "CA 1234", );

    });
    // it("It should greet my name in english", function () {
    //     var input =  RegFactory();
    //     input.addRegNumbers(["CA1234",  "CL2345" ])
    
    //     assert.equal(input. filter(), "CA1234");

    // });

});