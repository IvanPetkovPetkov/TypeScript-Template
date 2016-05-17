/// <reference path="Scripts/typings/tsd.d.ts" />
/// <reference path="Scripts/persons/Person.ts" />
/// <reference path="Scripts/interfaces/persons/IPerson.ts" />
/// <reference path="Scripts/consts/Consts.ts" />
//import mychai = require('chai');
describe("Person", function () {
    beforeEach(function () {
    });
    describe("introduce()", function () {
        it("should have correct results", function () {
            var person = new Persons.Person('Ivan', 'Petkov', Gender.Male, 32);
            if (person.introduce() != "Hello, I'm Ivan Petkov") {
                throw new Error("Not return correct string!");
            }
        });
        it("this test should fail", function () {
            //Chai mychai = new Chai();
            //mychai.
            // expect(3).to.be("10000");
        });
    });
});
//# sourceMappingURL=WorkerTests.js.map