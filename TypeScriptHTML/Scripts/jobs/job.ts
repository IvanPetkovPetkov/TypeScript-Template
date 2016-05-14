module Jobs {
    export class Job implements interfaces.jobs.IJob {
        constructor(public title: string, public level: string) {
        }

        JobsResponsibility = new Array<interfaces.jobs.IJobResponsibility>();

        addJobResponsibility(jobResponsibility: interfaces.jobs.IJobResponsibility): void {
            this.JobsResponsibility.push(jobResponsibility);
        }

        removeJobResponsibility(jobResponsibility: interfaces.jobs.IJobResponsibility): interfaces.jobs.IJobResponsibility {
            var jobResponsibilityIndex = this.JobsResponsibility.indexOf(jobResponsibility);
            if (jobResponsibilityIndex < 0) {
                throw new Error('Job could not be found');
            }
            var jobResponsibilityRemoved = this.JobsResponsibility[jobResponsibilityIndex];
            this.JobsResponsibility[jobResponsibilityIndex] = this.JobsResponsibility[this.JobsResponsibility.length - 1];
            this.JobsResponsibility.pop();
            return jobResponsibilityRemoved;
        }

    }
}
