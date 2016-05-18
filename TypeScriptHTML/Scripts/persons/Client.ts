module Persons {

    //@log // not working with injection
    export class Client implements interfaces.persons.IClient, interfaces.persons.IIntroducable {
        //@log
        @inject('email')
        private _email: string;
        @inject('person')
        private _person: interfaces.persons.IIntroducable;

        constructor(person: interfaces.persons.IIntroducable, email: string) {
            if (person != null) {
                this._person = person;
            }
            if (email != null) {
                this._email = email;
            }
        }

        //define getter
        get email() {
            return this._email;
        }

        //define getter
        get person() {
            return this._person;
        }

        //method log
        @log
        introduce():string {
            return this.person.introduce() + ' - ' + this.email;
        }

        @log
        updateMail( @log newEmail: string ) : void{
            this._email = newEmail;
        }
    }
}

