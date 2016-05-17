module Persons {
    @logClass
    export class Client extends Person implements interfaces.persons.IClient {
        @logProperty
        private _email: string;

        constructor(firstName: string, lastName: string, Gender: Gender, age: number, email: string ) {
            super(firstName, lastName, Gender, age);  //reuse the base functionality
            this._email = email;
        }

        //define getters and setters
        get email() {
            return this._email;
        }

        @logMethod
        introduce() {
            return super.introduce() + ' - ' + this.email;
        }
    }
}
