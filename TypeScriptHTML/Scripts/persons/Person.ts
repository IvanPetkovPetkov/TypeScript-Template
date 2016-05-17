module Persons {
    export class Person implements interfaces.persons.IPerson {

        constructor(public firstName: string, public lastName: string, public Gender: Gender, public age: number) {

        }
       
        introduce() {
            return 'Hello, I\'m ' + this.firstName + ' ' + this.lastName;
        }
    }
}
