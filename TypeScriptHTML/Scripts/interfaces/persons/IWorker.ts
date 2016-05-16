module interfaces.persons {
    import IJobs = interfaces.jobs;   

    export interface IWorker extends IPerson {
        additionalInfo: { experince: number; email: string };
        Jobs: Array<IJobs.IJob>;
        addJob(job: interfaces.jobs.IJob): void;
        removeJob(job: interfaces.jobs.IJob): interfaces.jobs.IJob;
    }
}
