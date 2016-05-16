module Persons {

    @log
    export class Client extends Person implements interfaces.persons.IClient {
        @log
        private _email: string;

        constructor(firstName: string, lastName: string, sex: Sex, age: number, email: string ) {
            super(firstName, lastName, sex, age);  //reuse the base functionality
            this._email = email;
        }

        //define getter
        get email() {
            return this._email;
        }

        //method log
        @log
        introduce() {
            return super.introduce() + ' - ' + this.email;
        }

        @log
        updateMail( @log newEmail: string ) : void{
            this._email = newEmail;
        }
    }
}
