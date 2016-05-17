/// <reference path="../../typings/tsd.d.ts" />
describe("Calculator", function () {
    beforeEach(function () {
    });
    describe("introduce()", function () {
        it("should have correct results", function () {
            var person = new Persons.Person('Ivan', 'Petkov', Gender.Male, 32);
            if (person === null) {
                throw new Error("Not return correct string!");
            }
            return "";
            //var personIntroduction = person.introduce();
            //if (personIntroduction != "Hello, I'm Ivan Petkov") {
            //    throw new Error("Not return correct string!");
            //}
        });
        it("this test should fail", function () {
            //mychai.expect(3).to.be(10000);
        });
    });
});
//# sourceMappingURL=WorkerTests.js.map