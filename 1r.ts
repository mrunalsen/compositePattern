// Component Interface : Employee
interface Employee {
    getName(): string;
    getSalary(): number;
    printDetails(): void;
}

// Leaf : IndividualEmployee
class IndividualEmployee implements Employee {
    constructor(private name: string, private salary: number) { }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    printDetails(): void {
        console.log(`Employee: ${this.name}, Salary: ₹${this.salary}`);
    }
}

// Composite : Manager
class Manager implements Employee {
    // Employee array to store the managed employees
    private employees: Employee[] = [];

    constructor(private name: string, private salary: number) { }

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    printDetails(): void {
        console.log(`**************************************************`);
        console.log(`Manager: ${this.name}, Salary: ₹${this.salary}`);
        console.log("Managed Employees: ⤵");
        console.log(`----`);

        for (const employee of this.employees) {
            employee.printDetails();
        }
    }
}

// Client Code
const employee1 = new IndividualEmployee("Mrunal", 50000);
const employee2 = new IndividualEmployee("Viral", 60000);
const employee3 = new IndividualEmployee("Abhishek", 55000);
const employee4 = new IndividualEmployee("Mehul", 55000);
const employee5 = new IndividualEmployee("Amresh", 55000);

const manager1 = new Manager("Mitul", 90000);
manager1.addEmployee(employee1);
manager1.addEmployee(employee2);

const manager2 = new Manager("Jagdish", 90000);
manager2.addEmployee(employee3);
manager2.addEmployee(employee4);
manager2.addEmployee(employee5);


console.log("1R Company Structure:");
manager1.printDetails();
manager2.printDetails();