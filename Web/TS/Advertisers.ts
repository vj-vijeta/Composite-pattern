import { Employee } from './Employee';

// Leaf class
export class Advertisers implements Employee {
    constructor(private name: string, private salary: number) {}

    showDetails(): void {
        console.log(`Marketing via Ad: ${this.name}, Salary: ${this.salary}`);
    }
}
