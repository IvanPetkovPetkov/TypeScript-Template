module Persons {

    @log // not working with injection
    export class Client implements interfaces.persons.IClient, interfaces.persons.IIntroducable {
        @log
        @inject('email')
        private _email: string;
        @inject('person')
        private person: interfaces.persons.IIntroducable;

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

