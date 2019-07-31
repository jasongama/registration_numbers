describe('greeting', function () {
    it("It should store number plates in array list", function () {
        var input =  RegFactory();
        input.addRegNumbers("CA1234","CY1234","CN1234")
        
    
        assert.equal(input. getReg([ 'CA1234', 'CY1234', 'CN1234' ]), "CA1234","CY1234","CN1234" );

    });
    // it("It should greet my name in english", function () {
    //     var input =  RegFactory();
    //     input.addRegNumbers(["CA1234",  "CL2345" ])
    
    //     assert.equal(input. filter(), "CA1234");

    // });

});