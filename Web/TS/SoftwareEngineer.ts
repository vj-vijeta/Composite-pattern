import { Employee } from './Employee';

// Leaf class
export class SoftwareEngineer implements Employee {
    constructor(private name: string, private salary: number) {}

    showDetails(): void {
        console.log(`Software Engineer: ${this.name}, Salary: ${this.salary}`);
        console.log();
    }
}
