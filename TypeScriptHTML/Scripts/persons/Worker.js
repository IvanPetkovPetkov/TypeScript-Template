var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Persons;
(function (Persons) {
    var Worker = (function (_super) {
        __extends(Worker, _super);
        function Worker(firstName, lastName, sex, age, additionalInfo) {
            _super.call(this, firstName, lastName, sex, age); //reuse the base functionality
            this.Jobs = new Array();
            this._monthlyIncome = 0;
            this.additionalInfo = additionalInfo;
        }
        Object.defineProperty(Worker.prototype, "monthlyIncome", {
            //define getters and setters
            get: function () {
                return this._monthlyIncome;
            },
            set: function (newMonthlyIncome) {
                if (Sex.Male) {
                    if (newMonthlyIncome < 0) {
                        throw new Error('Not good!');
                    }
                }
                this._monthlyIncome = newMonthlyIncome;
            },
            enumerable: true,
            configurable: true
        });
        Worker.prototype.addJob = function (job) {
            this.Jobs.push(job);
        };
        Worker.prototype.removeJob = function (job) {
            var jobIndex = this.Jobs.indexOf(job);
            if (jobIndex < 0) {
                throw new Error('Job could not be found');
            }
            var jobRemoved = this.Jobs[jobIndex];
            this.Jobs[jobIndex] = this.Jobs[this.Jobs.length - 1];
            this.Jobs.pop();
            return jobRemoved;
        };
        Worker.prototype.displayJobResponsibility = function () {
            var result = '';
            result += '..............................' + '\n';
            this.Jobs.forEach(function (job) {
                result += '.................' + '\n';
                result += 'Job:' + '\n';
                result += '     title: ' + job.title + '\n';
                result += '     level: ' + job.level + '\n';
                job.JobsResponsibility.forEach(function (jobResponsibility) {
                    result += '     Responsibility:' + '\n';
                    result += '         role: ' + jobResponsibility.role + '\n';
                    result += '         skills: ' + jobResponsibility.skills + '\n';
                });
            });
            return result;
        };
        Worker.prototype.introduce = function () {
            return _super.prototype.introduce.call(this) + ' - ' + this.additionalInfo.experince + ' years experiance' + ' email:' + this.additionalInfo.email;
        };
        return Worker;
    })(Persons.Person);
    Persons.Worker = Worker;
})(Persons || (Persons = {}));
//# sourceMappingURL=Worker.js.map