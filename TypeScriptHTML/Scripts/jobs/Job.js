var Jobs;
(function (Jobs) {
    var Job = (function () {
        function Job(title, level) {
            this.title = title;
            this.level = level;
            this.JobsResponsibility = new Array();
        }
        Job.prototype.addJobResponsibility = function (jobResponsibility) {
            this.JobsResponsibility.push(jobResponsibility);
        };
        Job.prototype.removeJobResponsibility = function (jobResponsibility) {
            var jobResponsibilityIndex = this.JobsResponsibility.indexOf(jobResponsibility);
            if (jobResponsibilityIndex < 0) {
                throw new Error('Job could not be found');
            }
            var jobResponsibilityRemoved = this.JobsResponsibility[jobResponsibilityIndex];
            this.JobsResponsibility[jobResponsibilityIndex] = this.JobsResponsibility[this.JobsResponsibility.length - 1];
            this.JobsResponsibility.pop();
            return jobResponsibilityRemoved;
        };
        return Job;
    }());
    Jobs.Job = Job;
})(Jobs || (Jobs = {}));
//# sourceMappingURL=Job.js.map