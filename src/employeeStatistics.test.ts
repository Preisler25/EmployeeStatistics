import {describe, expect, it, beforeEach} from "vitest";
import {EmployeeStatistics} from "./employeeStatistics";

describe("EmployeeStatistics", () => {
    let employeeStatistics: EmployeeStatistics;
    let employeeStatistics2: EmployeeStatistics;
    let employeeStatistics3: EmployeeStatistics;

    beforeEach(() => {
        employeeStatistics = new EmployeeStatistics([
            {name: "John Doe", age: 30, salary: 10},
            {name: "Jane Doe", age: 25, salary: 15},
            {name: "Jack Doe", age: 40, salary: 20}
        ]);

        employeeStatistics2 = new EmployeeStatistics([
            {name: "John Doe", age: 30, salary: 0},
            {name: "Jack Laura", age: 25, salary: 30},
            {name: "Jack Mia", age: 40, salary: 30},
        ]);

        employeeStatistics3 = new EmployeeStatistics([]);
    });

    describe("Constructor", () => {
        it('Null constructor, error-t dob', () => {
            // @ts-ignore
            expect(() => new EmployeeStatistics(null)).toThrowError("Null parameter error");
        });

        it('Üres lista', () => {
            expect(employeeStatistics3.employees).toEqual([]);
        });

        it('Helyes listánál nem dob error-t', () => {
            expect(() => new EmployeeStatistics([
                {name: "John Doe", age: 30, salary: 10},
                {name: "Jane Doe", age: 25, salary: 15},
                {name: "Jack Doe", age: 40, salary: 20}
            ])).not.toThrowError();
        });
    });

    describe("getAverageSalary", () => {
        it("Helyes Adatokkal", () => {
            expect(employeeStatistics.getAverageSalary()).toBe(15);
        });
        it("Helyes Adatokkal 2", () => {
            expect(employeeStatistics2.getAverageSalary()).toBe(20);
        });
        it("Üres lista", () => {
           expect(employeeStatistics3.getAverageSalary()).toBe(0);
        });
    })

    describe("getMaxSalary", () => {
        it("HelyesAdatokkal 1max", () => {
            expect(employeeStatistics.getMaxSalary()).toBe(20);
        });
        it("HelyesAdatokkal 2max", () => {
            expect(employeeStatistics2.getMaxSalary()).toBe(30);
        });
        it("Üres lista", () => {
            expect(employeeStatistics3.getMaxSalary()).toBe(0);
        });
    })

    describe("getMinSalary", () => {
        it("HelyesAdatokkal", () => {
            expect(employeeStatistics.getMinSalary()).toBe(10);
        });

        it('HelyesAdatokkal', () => {
            expect(employeeStatistics2.getMinSalary()).toBe(0);
        });

        it('Üres Listával', () => {
            expect(employeeStatistics3.getMinSalary()).toBe(0);
        });
    })

    describe("getAverageAge", () => {
        it("HelyesAdatokkal", () => {
            expect(employeeStatistics.getAverageAge()).toBe(31.666666666666668);
        });

        it("HelyesAdatokkal 2", () => {
            expect(employeeStatistics2.getAverageAge()).toBe(31.666666666666668);
        });

        it("Üres lista", () => {
            expect(employeeStatistics3.getAverageAge()).toBe(0);
        });

    })

    describe("getHighestPaidEmployee", () => {
        it("1 max értékkel", () => {
            expect(employeeStatistics.getHighestPaidEmployee()).toBe("Jack Doe");
        });

        it("2 max értékkel", () => {
            expect(employeeStatistics2.getHighestPaidEmployee()).toBeOneOf(['Jack Laura', 'Jack Mia'])
        });

        it("Üres lista", () => {
            expect(() => employeeStatistics3.getHighestPaidEmployee()).toThrowError("No employees in the list");
        });
    })
});