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
