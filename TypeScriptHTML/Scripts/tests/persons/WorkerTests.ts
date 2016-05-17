/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../persons/Person.ts" />
/// <reference path="../../persons/Worker.ts" />
/// <reference path="../../jobs/Job.ts" />
/// <reference path="../../jobs/JobResponsibility.ts" />
/// <reference path="../../interfaces/persons/IPerson.ts" />
/// <reference path="../../consts/Consts.ts" />

//import mychai = require('chai');
//var expect = mychai.expect;
//import { expect } from 'chai';

describe("Person", () => {
    beforeEach(() => {
        
    });

    describe("introduce()", () => {
        it("Person should have correct introduce result", () => {
            var person = new Persons.Person('Ivan', 'Petkov', Gender.Male, 32);
            //expect(8).to.equal(8);
            if (person.introduce() != "Hello, I'm Ivan Petkov") {
                throw new Error("Not return correct result from method introduce!");
            }
        });

        it("Worker should cast to Person and have correct introduce result from parent class", () => {
            var someWorker = new Persons.Worker('Ivan', 'Petkov', Gender.Male, 32, { experince: 8, email: 'ivan@epam.com' });
            var basePartner = <Persons.Person>someWorker;
            if (basePartner.introduce() != "Hello, I'm Ivan Petkov - 8 years experiance email:ivan@epam.com") {
                throw new Error("Not return correct result from method introduce!");
            }
        });

        it("Worker should add correct Jobs with Responsibilities", () => {
            var someWorker = new Persons.Worker('Ivan', 'Petkov', Gender.Male, 32, { experince: 8, email: 'ivan@epam.com' });

            var devJob = new Jobs.Job('SOFTWARE ENGINEER', 'Level 2');
            var devJobResponsibility = new Jobs.JobResponsibility('Able to read and understand project and requirement documentation; able to create documentation describing his/her code.', 'Plays the Developer role.')
            devJob.addJobResponsibility(devJobResponsibility);
            var qaJob = new Jobs.Job('SOFTWARE TESTING ENGINEER', 'Level 3');
            qaJob.addJobResponsibility(new Jobs.JobResponsibility('Shows good understanding of project documentation. Provides good-quality functional requirement and specification review and analysis. Creates high-quality test cases and test results reports. Creates test plans.', 'Plays the Tester (or Automation Tester) and Key Tester roles.'));

            someWorker.addJob(devJob);
            someWorker.addJob(qaJob);

            if (someWorker.Jobs[0] !== devJob)
            {
                throw new Error("Not added correct job from method addJob!");
            }
            if (someWorker.Jobs[1] !== qaJob) {
                throw new Error("Not added correct job from method addJob!");
            }
            if (someWorker.Jobs[0].JobsResponsibility[0] !== devJobResponsibility) {
                throw new Error("Not added correct jobResponsibility from method addJobResponsibility!");
            }
        });
    });
});
