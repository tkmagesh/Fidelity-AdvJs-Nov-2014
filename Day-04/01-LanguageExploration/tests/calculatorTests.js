var expect = chai.expect;

describe("A Calculator", function(){
    it("Should be able to add two numbers", function(){
        //Arrange
        var number1 = 10,
            number2 = 20,
            expectedResult = 30;

        //Act
        var result = add(number1, number2);

        //Assert
        expect(result).to.equal(expectedResult);
    });
    it("Should be able to add two numbers in string format", function(){
        //Arrange
        var number1 = "10",
            number2 = "20",
            expectedResult = 30;

        //Act
        var result = add(number1, number2);

        //Assert
        expect(result).to.equal(expectedResult);
    });
    it("Should be able to treat non numeric strings as zero", function(){
        //Arrange
        var number1 = "10",
            number2 = "abc",
            expectedResult = 10;

        //Act
        var result = add(number1, number2);

        //Assert
        expect(result).to.equal(expectedResult);
    });
    it("Should be able to add varying length of arguments", function(){
        //Arrange
        var  expectedResult = 150;

        //Act
        var result = add(10,20,30,40,50);

        //Assert
        expect(result).to.equal(expectedResult);
    });
    it("Should be add functions returning numbers", function(){
        //Arrange
        var f1 = function(){ return 10; },
            f2 = function(){ return 20; },
            expectedResult = 30;

        //Act
        var result = add(f1,f2);

        //Assert
        expect(result).to.equal(expectedResult);
    });
    it("Should be add functions returning numbers in string format", function(){
        //Arrange
        var f1 = function(){ return 10; },
            f2 = function(){ return "20"; },
            expectedResult = 30;

        //Act
        var result = add(f1,f2);

        //Assert
        expect(result).to.equal(expectedResult);
    });
    it("Should be able to add an array of numbers", function(){
        //Arrange
        var numbers = [10,20]
            expectedResult = 30;

        //Act
        var result = add(numbers);

        //Assert
        expect(result).to.equal(expectedResult);
    });
});
