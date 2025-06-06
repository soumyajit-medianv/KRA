-- Creating Table
CREATE TABLE person (
	id INT,
	name VARCHAR(50),
	city VARCHAR(50)
);


-- Inserting Data (INSERT)
INSERT INTO person(id, name, city)
VALUES (101, 'Rahul', 'Bargarh');

-- Inserting mulitple data
INSERT INTO person(id, name, city)
VALUES 
(102, 'Sham', 'Mumbai'),
(103, 'Raj', 'Chennai'),
(104, 'Harish', 'Patna');
-- OR
INSERT INTO person
VALUES 
(105, 'Alex', 'Pune');


-- Reading Data (SELECT)
SELECT * FROM person;

-- Select one column
SELECT name FROM person;

-- Select multiple column
SELECT name, city FROM person;


-- Updating Data (UPDATE)
UPDATE person 
	SET city='Banglore' 
	WHERE id=101;
-- (UPDATE person SET city='Ahmedabad' WHERE id=101)


-- Deleting Data (DELETE)
DELETE FROM person
	WHERE id=101;

