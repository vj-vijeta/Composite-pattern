import { Employee } from './Employee';

// Leaf class
export class QAEngineer implements Employee {
    constructor(private name: string, private salary: number) {}

    showDetails(): void {
        console.log(`Q&A Engineer: ${this.name}, Salary: ${this.salary}`);
        console.log();
    }
}
