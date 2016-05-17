/// <reference path="../../typings/tsd.d.ts" />
///// <reference path="../../Scripts/typings/mocha/mocha.d.ts" />
///// <reference path="../../Scripts/typings/expect.js/expect.js.d.ts" />

//import { expect } from 'expect.js';
//var mychai = requirejs('expect.js');
//var mychai = requirejs('chai');
//var expect = mychai.expect;

//import persons = Persons;

describe("Calculator", () => {
    beforeEach(() => {
        
    });

    describe("introduce()", () => {
        it("should have correct results", () => {
            //var person: Persons.Person = new Persons.Person('Ivan', 'Petkov', Gender.Male, 32);
            var personIntroduction = person.introduce();
            if (personIntroduction != "Hello, I'm Ivan Petkov") {
                throw new Error("Not return correct string!");
            }
        });

        it("this test should fail", () => {
            //mychai.expect(3).to.be(10000);
        });
    });
});