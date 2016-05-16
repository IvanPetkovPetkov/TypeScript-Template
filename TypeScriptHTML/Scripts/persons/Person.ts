module Persons {
    export class Person implements interfaces.persons.IPerson {

        constructor(public firstName: string, public lastName: string, public sex: Sex, public age: number) {

        }
       
        introduce() {
            return 'Hello, I\'m ' + this.firstName + ' ' + this.lastName;
        }
    }
}
