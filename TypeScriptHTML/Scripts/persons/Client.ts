module Persons {

    @log
    export class Client implements interfaces.persons.IClient, interfaces.persons.IIntroducable {
        @log
        private _email: string;
        private person: interfaces.persons.IIntroducable;

        constructor(person: interfaces.persons.IIntroducable, email: string ) {
            this.person = person;
            this._email = email;
        }

        //define getter
        get email() {
            return this._email;
        }

        //method log
        @log
        introduce():string {
            return person.introduce() + ' - ' + this.email;
        }

        @log
        updateMail( @log newEmail: string ) : void{
            this._email = newEmail;
        }
    }
}
