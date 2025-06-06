-- Creating Table
CREATE TABLE person (
	id INT,
	name VARCHAR(50),
	city VARCHAR(50)
);

INSERT INTO person(id, name, city)
VALUES 
(102, 'Sham', 'Mumbai'),
(103, 'Raj', 'Chennai'),
(104, 'Harish', 'Patna'),
(105, 'Alex', 'Pune');

-- ALTER Table
-- Add new column
ALTER TABLE person ADD COLUMN age INT;

-- Remove column
ALTER TABLE person DROP COLUMN age;

-- Rename column
ALTER TABLE person RENAME COLUMN name TO fname;

-- Rename a table name
ALTER TABLE person RENAME TO persons;

-- Modify a column
ALTER TABLE person ALTER COLUMN fname SET DATA TYPE VARCHAR(100);

-- Set default value
ALTER TABLE person ALTER COLUMN fname SET DEFAULT 'unknown';

-- Drop default value
ALTER TABLE person ALTER COLUMN fname DROP DEFAULT;


-- CHECK - (Add constraint)
ALTER TABLE person ADD COLUMN mob VARCHAR(15) CHECK (LENGTH(mob) >= 10); -- It check condition that mobile no should be >= 10
INSERT INTO person(mob) VALUES(1321); -- ERROR
INSERT INTO person(mob) VALUES(1234567891); --WORK

-- Remove constraint
ALTER TABLE person DROP CONSTRAINT person_mob_check; -- After that it not check the condition.

ALTER TABLE person DROP COLUMN mob;

-- Add constraint
ALTER TABLE person ADD COLUMN mob VARCHAR(15) CONSTRAINT mob_no_less_than_10 CHECK (LENGTH(mob) >= 10); -- When the condition not satisfied then it give error mob_no_less_than_10 so user can easily understand.




