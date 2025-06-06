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


-- String Function
-- CONCAT()
SELECT CONCAT(fname, lname) FROM employees;
-- Using Alias - (AS) - Create a FullName(Temporary Name) column and add name.
SELECT CONCAT(fname, lname) AS FullName FROM employees;
-- Combining multiple columns
SELECT emp_id, CONCAT(fname, lname) AS FullName FROM employees;
-- Add space between name.
SELECT emp_id, CONCAT(fname, ' ', lname) AS FullName FROM employees; -- This is not correct way.

-- CONCAT_WS() - Concat With Separator
SELECT CONCAT_WS(' ', fname, lname) AS FullName FROM employees; --This is correct.

-- SUBSTRING()
SELECT SUBSTRING('Hello Buddy', 1, 5); -- Output- Hello
SELECT SUBSTRING(fname, 1, 3) FROM employees;

-- REPLACE()
SELECT REPLACE('Hello Buddy', 'Hello', 'Hy'); -- (str, from_str, to_str)
-- Change dept 'IT' to 'TECH'
SELECT REPLACE(dept, 'IT', 'TECH') FROM employees;

-- REVERSE()
SELECT REVERSE('Hello');
-- Reverse the fname column
SELECT REVERSE(fname) FROM employees;

-- LENGTH()
SELECT LENGTH('Hello');

-- Length of names in fname column
SELECT LENGTH(fname) FROM employees;

-- Find in fname whose name length is greater than 5 character
SELECT * FROM employees WHERE LENGTH(fname) > 5;

-- UPPER() - LOWER() 
SELECT UPPER(fname) FROM employees;
SELECT LOWER(fname) FROM employees;

-- LEFT() - RIGHT() - Its like substring.
SELECT LEFT('Hello World', 5); -- Hello
SELECT RIGHT('Hello World', 5); -- World
SELECT LEFT(fname, 3) FROM employees;

-- TRIM()
SELECT LENGTH('    Hello    '); -- 13
SELECT LENGTH(TRIM('    Hello    ')); -- 5

-- POSITION()
SELECT POSITION('om' IN 'Thomas');










