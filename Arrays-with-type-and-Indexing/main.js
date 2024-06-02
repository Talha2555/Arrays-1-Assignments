/*Part 3: Array with Types and Indexing - Employee Salaries
Challenge:
You are managing employee salaries for a company. Implement logic to calculate salaries and
handle bonuses.
1. Define a type alias named Employee with the following properties:
• name (string): The name of the employee.
• hoursWorked (number): The number of hours the employee worked.
• hourlyRate (number): The hourly rate of the employee.
• salary (number): The base salary of the employee.
2. Define an array named employees containing employee objects. Each employee
object should include a name, hoursWorked, hourlyRate, and salary.
3. Implement a function named calculateSalary that calculates the salary for each
employee based on the hours worked and hourly rate.
4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary. */
var employees = [
    {
        name: "mubeen khan",
        hoursWorked: 8,
        hourlyRate: 300,
        salary: 0
    },
    {
        name: 'talha khan',
        hoursWorked: 8,
        hourlyRate: 500,
        salary: 0
    },
    {
        name: "Haider Ali",
        hoursWorked: 11,
        hourlyRate: 400,
        salary: 0
    }
];
function calculateSalary(employees) {
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var employee = employees_1[_i];
        employee.salary = employee.hoursWorked * employee.hourlyRate;
        if (employee.hoursWorked >= 10) {
            employee.salary += employee.salary / 100 * 10;
        }
        else if (employee.hoursWorked < 10) {
            employee.salary -= employee.salary / 100 * 5;
        }
    }
}
calculateSalary(employees);
console.log(employees);
