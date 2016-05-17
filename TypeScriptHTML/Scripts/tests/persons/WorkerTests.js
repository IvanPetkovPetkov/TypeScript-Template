/// <reference path="../../typings/tsd.d.ts" />
///// <reference path="../../Scripts/typings/mocha/mocha.d.ts" />
///// <reference path="../../Scripts/typings/expect.js/expect.js.d.ts" />
//import { expect } from 'expect.js';
//var mychai = requirejs('expect.js');
//var mychai = requirejs('chai');
//var expect = mychai.expect;
//import persons = Persons;
describe("Calculator", function () {
    beforeEach(function () {
    });
    describe("introduce()", function () {
        it("should have correct results", function () {
            var person = new Persons.Person('Ivan', 'Petkov', Gender.Male, 32);
            var personIntroduction = person.introduce();
            if (personIntroduction != "Hello, I'm Ivan Petkov") {
                throw new Error("Not return correct string!");
            }
        });
        it("this test should fail", function () {
            //mychai.expect(3).to.be(10000);
        });
    });
});
//# sourceMappingURL=WorkerTests.js.map