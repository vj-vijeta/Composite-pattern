import { Employee } from './Employee';

// Leaf class
export class UiEngineer implements Employee {
    constructor(private name: string, private salary: number) {}

    showDetails(): void {
        console.log(`UI Engineer: ${this.name}, Salary: ${this.salary}`);
        console.log();
    }
}
