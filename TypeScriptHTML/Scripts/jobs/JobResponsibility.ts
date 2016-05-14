module Jobs {
    export class JobResponsibility implements interfaces.jobs.IJobResponsibility {
        constructor(public skills: string, public role: string) {
        }
    }
}


