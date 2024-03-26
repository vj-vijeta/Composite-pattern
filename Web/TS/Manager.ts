import { Employee } from './Employee';
import { Department } from './Department';

// Composite class
export class Manager implements Department {
    private employees: Employee[] = [];

    constructor(private name: string) {}

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    showDetails(): void {
        console.log(`Manager: ${this.name}`);
        console.log();
        this.employees.forEach(employee => employee.showDetails());
    }
}
