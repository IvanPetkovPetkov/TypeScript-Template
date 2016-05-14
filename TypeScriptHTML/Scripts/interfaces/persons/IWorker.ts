﻿/// <reference path="../jobs/ijob.ts" />
module interfaces.persons {
    import IJobs = interfaces.jobs;   //import namespaces

    export interface IWorker extends IPerson {
        additionalInfo: { experince: number; email: string };
        Jobs: Array<IJobs.IJob>;
        addJob(job: interfaces.jobs.IJob): void;
        removeJob(job: interfaces.jobs.IJob): interfaces.jobs.IJob;
    }
}
