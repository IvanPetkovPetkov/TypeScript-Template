module interfaces.jobs {
    export interface IJob{
        JobsResponsibility: Array<interfaces.jobs.IJobResponsibility>;
        title: string;
        level: string;
    }
}