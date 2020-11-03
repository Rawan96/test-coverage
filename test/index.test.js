const expect = require("chai").expect;
const { capitalize, reverseString } = require("../index");

//Run the test and leave the commented code, and notice the result of your testing coverage
//The test coverage will not be 100%, because we don't make test for all our code.

//Test for capitalize function
describe("capitalize function", function () {
  it("should capitalize first letter of a string", () => {
    const result = capitalize("hello");
    expect(result).to.have.lengthOf(5);
    expect(result).to.equal("Hello");
  });

  it("should return empty string if the value passed is not a string", () => {
    const result = capitalize({});
    expect(result).to.equal("");
  });
});

//Test for reverseString function
describe("reverseString function", function () {
  it("should reverse the string", () => {
    const result = reverseString("hello");
    expect(result).to.have.lengthOf(5);
    expect(result).to.equal("olleh");
  });

  //Un commented this block and re run the test
  //The test coverage will be 100% because you test all the aspects of the code
  /*it("should return 'It is not a string' if the type of the argument is not a string", () => {
    const result = reverseString(45);
    expect(result).to.equal("Error: It is not a string");
  });*/
});
