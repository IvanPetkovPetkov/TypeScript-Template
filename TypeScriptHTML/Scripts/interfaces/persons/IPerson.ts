module interfaces.persons {
    export interface IPerson {
        firstName: string;
        lastName: string;
        Gender: Gender;
        age?: number; 
    }
}
