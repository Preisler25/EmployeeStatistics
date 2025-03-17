import {Employee} from "./employee.ts";

export class EmployeeStatistics {
    public employees: Employee[];

    constructor(employees: Employee[]) {
        if (!employees){
            throw new Error("Null parameter error");
        }
        this.employees = employees;
    }

    getAverageSalary(): number {
        if (this.employees.length === 0) {
           return 0;
        }
        let sum: number = 0;
        this.employees.forEach(employee => sum += employee.salary);
        return sum / this.employees.length;
    }

    getMaxSalary(): number {
        if (this.employees.length === 0) {
            return 0;
        }
        return Math.max(...this.employees.map(employee => employee.salary));
    }

    getMinSalary(): number {
        if (this.employees.length === 0) {
            return 0;
        }
        return Math.min(...this.employees.map(employee => employee.salary));
    }

    getAverageAge(): number {
        if (this.employees.length === 0) {
            return 0;
        }
        let sum: number = 0;
        this.employees.forEach(employee => sum += employee.age);
        return sum / this.employees.length;
    }

    getHighestPaidEmployee(): string {
        let maxSalary: number = this.getMaxSalary();
        if (this.employees.length === 0) {
            throw new Error("No employees in the list");
        }
        return this.employees.find(employee => employee.salary === maxSalary)!.name;
    }
}