module Persons {

    export class Person implements interfaces.persons.IPerson, interfaces.persons.IIntroducable {
        static classType: string = "Person";


        constructor(public firstName: string, public lastName: string, public gender: Gender, public age: number) {
        }
       
        introduce() : string {
            return `Hello, I\'m ${this.firstName} ${this.lastName}`;
        }

        static introduceStatic(): void {
            console.log(`Static ${this.classType} method`);
        }
    }
}
