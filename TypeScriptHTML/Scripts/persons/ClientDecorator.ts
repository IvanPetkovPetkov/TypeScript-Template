module Persons {
    @log
    export class ClientDecorator extends Client  {
        constructor(email: string, client: interfaces.persons.IIntroducable) {
            // when not injected 
            super();
           //  super();
        }

        @log
        introduce(): string {
            return `${super.introduce()} operation of ClientDecorator ${this.email} is being called!`;
        }
    }
}
