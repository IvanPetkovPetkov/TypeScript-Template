module interfaces.persons {
    export interface IPerson {
        firstName: string;
        lastName: string;
        sex: Sex;
        age?: number; //optional property
    }
}