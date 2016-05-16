module Persons {

    export class Person implements interfaces.persons.IPerson {
        static classType: string = "Person";    

        constructor(public firstName: string, public lastName: string, public sex: Sex, public age: number) {

        }
       
        introduce() {
            return 'Hello, I\'m ' + this.firstName + ' ' + this.lastName;
        }

        static introduceStatic(): void {
            console.log("Static " + this.classType + " method");
        }
    }
}
