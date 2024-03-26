import { Employee } from './Employee';
import { Department } from './Department';

// Composite class
export class MarkDepartment implements Department {
    private employees: Employee[] = [];

    constructor(private name: string) {}

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    showDetails(): void {
        console.log(`Department of Marketing: ${this.name}`);
        console.log();
        this.employees.forEach(employee => employee.showDetails());
    }
}
