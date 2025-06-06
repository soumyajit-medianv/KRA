CREATE TABLE customers (
	cust_id SERIAL PRIMARY KEY,
	cust_name VARCHAR(50) NOT NULL
);

CREATE TABLE orders (
	ord_id SERIAL PRIMARY KEY,
	ord_date DATE NOT NULL,
	price NUMERIC NOT NULL,	
	cust_id INTEGER NOT NULL, FOREIGN KEY (cust_id) REFERENCES customers (cust_id)
);

INSERT INTO customers (cust_name)
VALUES ('Raju'), ('Sham'), ('Paul'), ('Alex');

SELECT * FROM customers;

INSERT INTO orders (ord_date, cust_id, price)
VALUES
('2024-01-01', 01, 250.00),
('2024-01-15', 01, 300.00),
('2024-02-01', 02, 150.00),
('2024-03-01', 03, 450.00),
('2024-04-04', 02, 550.00);

SELECT * FROM orders;

-- JOIN
-- CROSS JOIN
SELECT * FROM customers CROSS JOIN orders;

-- INNER JOIN
SELECT * FROM customers c INNER JOIN orders o ON c.cust_id=o.cust_id;

-- Display cust_name with their total orders
SELECT c.cust_name, COUNT(o.ord_id) FROM customers c INNER JOIN orders o ON c.cust_id=o.cust_id GROUP BY cust_name; -- If i remove GROUP BY then it give error: c.cust_name" must appear in the GROUP BY clause. If i used GROUP BY then i am not able to used '*'.

-- Customer with their total order price
SELECT c.cust_name, SUM(o.price) FROM customers c INNER JOIN orders o ON c.cust_id=o.cust_id GROUP BY cust_name;

-- LEFT JOIN
SELECT * FROM customers c LEFT JOIN orders o ON c.cust_id=o.cust_id; -- Return all rows from the left.

-- RIGHT JOIN
SELECT * FROM customers	c RIGHT JOIN orders o ON c.cust_id=o.cust_id; -- Return all rows from the right.





