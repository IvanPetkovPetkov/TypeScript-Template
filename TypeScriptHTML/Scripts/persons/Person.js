var Persons;
(function (Persons) {
    var Person = (function () {
        function Person(firstName, lastName, sex, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.sex = sex;
            this.age = age;
        }
        Person.prototype.introduce = function () {
            return 'Hello, I\'m ' + this.firstName + ' ' + this.lastName;
        };
        Person.introduceStatic = function () {
            console.log("Static " + this.classType + " method");
        };
        Person.classType = "Person";
        return Person;
    })();
    Persons.Person = Person;
})(Persons || (Persons = {}));
//# sourceMappingURL=Person.js.map