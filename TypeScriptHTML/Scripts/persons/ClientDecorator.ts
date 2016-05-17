module Persons {
    export class ClientDecorator extends Client  {
        constructor(email: string, client: interfaces.persons.IIntroducable) {
            super(client, email);
        }

        introduce(): string {
            return super.introduce() + "`operation` of ClientDecorator", this.email, " is being called!"
        }
    }
}
