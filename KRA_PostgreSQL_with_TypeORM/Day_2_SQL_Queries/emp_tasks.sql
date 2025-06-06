CREATE TABLE employees (
	emp_id SERIAL PRIMARY KEY,
	fname VARCHAR(50) NOT NULL,
	lname VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
	dept VARCHAR(50),
	salary DECIMAL(10,2) DEFAULT 30000.00,
	hire_date DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO employees (emp_id, fname, lname, email, dept, salary, hire_date)
VALUES
(1,	'Raj', 'Shrama', 'raj@gmail.com', 'IT', 50000.00, '2020-01-15'),
(2,	'Priya', 'Singh', 'priya@gmail.com', 'HR', 45000.00, '2019-03-22'),
(3,	'Arjun', 'Verma', 'arjun@gmail.com', 'IT', 55000.00, '2021-06-01'),
(4,	'Suman', 'Patel', 'suman@gmail.com', 'Finance', 60000.00, '2018-07-30'),
(5,	'Kavita', 'Rao', 'kabita@gmail.com', 'HR', 47000.00, '2020-11-10'),
(6,	'Amit', 'Gupta', 'amit@gmail.com', 'Marketing', 52000.00, '2020-09-25'),
(7,	'Neha', 'Desai', 'neha@gmail.com', 'IT', 48000.00, '2019-05-18'),
(8,	'Rahul', 'Kumar', 'rahul@gmail.com', 'IT', 53000.00, '2021-02-14'),
(9,	'Anjali', 'Mehta', 'anjali@gmail.com', 'Finance', 61000.00, '2018-12-03'),
(10, 'Vijay', 'Nair', 'vijay@gmail.com', 'Marketing', 50000.00, '2020-04-19');

SELECT * FROM employees;


-- Task 1 - 1:Raj:Shrama:IT
SELECT CONCAT_WS(':', emp_id, fname, lname, dept) FROM employees WHERE emp_id=1;

-- Task 2 - 1:Raj Shrama:IT:50000.00
SELECT CONCAT_WS(':', emp_id, CONCAT_WS(' ', fname, lname), dept, salary) FROM employees WHERE emp_id=1;

-- Task 3 - 4:Suman:FINANCE
SELECT CONCAT_WS(':' ,emp_id ,fname, UPPER(dept)) FROM employees WHERE emp_id=4;

-- Task 4 - I1 Raj, H2 Priya
SELECT CONCAT_WS(' ', CONCAT(LEFT(dept, 1),emp_id), fname) from employees WHERE emp_id=1 OR emp_id=2;

-- Task 5 - Find different type of departments in database.
SELECT DISTINCT dept from employees;

-- Task 6 - Display records with High-low salary.
SELECT * FROM employees ORDER BY salary DESC;

-- Task 7 - How to see only top 3 records from a table ?
SELECT * FROM employees LIMIT 3;

-- Task 8 - Show records where first name start with letter 'A'.
SELECT * FROM employees WHERE fname LIKE 'A%';

-- Task 9 - Show records where length of the lname is 4 character.
SELECT * FROM employees WHERE LENGTH(lname)=4;

-- Task 10 - Find total no. of employees in databases.
SELECT COUNT(emp_id) FROM employees;

-- Task 11 - Find no. of employees in each department.
SELECT dept, COUNT(emp_id) FROM employees GROUP BY dept;

-- Task 12 - Find lowest salary paying.
SELECT * FROM employees WHERE salary=(SELECT MIN(salary) FROM employees);

-- Task 13 - Find highest salary paying.
SELECT * FROM employees ORDER BY salary DESC limit 1; -- Here is a problem that if there are two or more emp paying same salary than it show only the first one.
SELECT * FROM employees WHERE salary=(SELECT MAX(salary) FROM employees); -- It work properly and above condition is not happened here.

-- Task 14 - Find total salary paying in Finance dept.
SELECT SUM(salary) FROM employees WHERE dept='Finance';

-- Task 15 - Average salary paying in each dept.
SELECT dept, AVG(salary) FROM employees GROUP BY dept;

-- Task 16 - Show fname, salary and calculate bonus by 10% of salary and display in a separate column.
SELECT fname, salary, 
CASE
WHEN salary > 0 THEN ROUND(salary * 0.10)
END AS bonus FROM employees;

-- Task 17 - Show the salary category with employee count.
SELECT 
CASE
WHEN salary >= 60000 THEN 'HIGH'
WHEN salary BETWEEN 50000 AND 60000 THEN 'MID'
ELSE 'LOW'
END AS sal_cat, COUNT(emp_id) FROM employees GROUP BY sal_cat;




