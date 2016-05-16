﻿module Persons {
    import IJobs = interfaces.jobs;   //import namespaces

    export class Worker extends Person implements interfaces.persons.IWorker {
        private _monthlyIncome: number;

        //anonymous object
        additionalInfo: { experince: number; email: string };

        Jobs = new Array<IJobs.IJob>();

        constructor(firstName: string, lastName: string, sex: Sex, age: number, additionalInfo: { experince: number, email: string }) {
            super(firstName, lastName, sex, age);  //reuse the base functionality
            this._monthlyIncome = 0;
            this.additionalInfo = additionalInfo;
        }

        //define getters and setters
        get monthlyIncome() {
            return this._monthlyIncome;
        }

        set monthlyIncome(newMonthlyIncome: number) {
            if (Sex.Male) {
                if (newMonthlyIncome < 0) {
                    throw new Error('Not good!');
                }
            }

            this._monthlyIncome = newMonthlyIncome;
        }

        addJob(job: interfaces.jobs.IJob): void {
            this.Jobs.push(job);
        }

        removeJob(job: interfaces.jobs.IJob): interfaces.jobs.IJob {
            var jobIndex = this.Jobs.indexOf(job);
            if (jobIndex < 0) {
                throw new Error('Job could not be found');
            }
            var jobRemoved = this.Jobs[jobIndex];
            this.Jobs[jobIndex] = this.Jobs[this.Jobs.length - 1];
            this.Jobs.pop();
            return jobRemoved;
        }

        displayJobResponsibility(): string {
            var result: string = '';
            result += '..............................' + '\n';
            this.Jobs.forEach((job: IJobs.IJob) => {
                result += '.................' + '\n';
                result += 'Job:' + '\n';
                result += '     title: ' + job.title + '\n';
                result += '     level: ' + job.level + '\n';
                job.JobsResponsibility.forEach((jobResponsibility: IJobs.IJobResponsibility) => {
                    result += '     Responsibility:' + '\n';
                    result += '         role: ' + jobResponsibility.role + '\n';
                    result += '         skills: ' + jobResponsibility.skills + '\n';
                });
            });

            return result;
        }


        introduce() {
            return super.introduce() + ' - ' + this.additionalInfo.experince + ' years experiance' + ' email:' + this.additionalInfo.email;
        }
    }
}
