var Persons;
(function (Persons) {
    var Person = (function () {
        function Person(firstName, lastName, Gender, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.Gender = Gender;
            this.age = age;
        }
        Person.prototype.introduce = function () {
            return 'Hello, I\'m ' + this.firstName + ' ' + this.lastName;
        };
        return Person;
    }());
    Persons.Person = Person;
})(Persons || (Persons = {}));
//# sourceMappingURL=Person.js.map