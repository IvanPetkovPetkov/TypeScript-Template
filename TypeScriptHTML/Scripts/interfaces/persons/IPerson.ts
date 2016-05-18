module interfaces.persons {
    export interface IPerson {
        firstName: string;
        lastName: string;
        gender: Gender;
        introduce();
        age?: number; 
    }
}
