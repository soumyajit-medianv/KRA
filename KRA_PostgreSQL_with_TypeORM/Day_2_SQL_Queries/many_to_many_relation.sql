CREATE TABLE students (
    s_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE courses (
    c_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    fee NUMERIC NOT NULL
);

CREATE TABLE enrollment (
    enrollment_id SERIAL PRIMARY KEY,
    s_id INT NOT NULL,
    c_id INT NOT NULL,
    enrollment_date DATE NOT NULL,
    FOREIGN KEY (s_id) REFERENCES students(s_id),
    FOREIGN KEY (c_id) REFERENCES courses(c_id)
);

INSERT INTO Students (name) VALUES
('Raju'),
('Sham'),
('Alex');

INSERT INTO courses (name, fee)
VALUES
('Maths', 500.00),
('Physics', 600.00),
('Chemistry', 700.00);

INSERT INTO enrollment (s_id, c_id, enrollment_date)
VALUES
(1, 1, '2024-01-01'), -- Raju enrolled in Maths
(1, 2, '2024-01-15'), -- Raju enrolled in Physics
(2, 1, '2024-02-01'), -- Sham enrolled in Maths
(2, 3, '2024-02-15'), -- Sham enrolled in Chemistry
(3, 3, '2024-03-25'); -- Alex enrolled in Chemistry


SELECT * FROM students;

SELECT * FROM courses;

SELECT * FROM enrollment;

SELECT s.name, c.name, e.enrollment_date, c.fee 
FROM enrollment e 
JOIN students s ON e.s_id=s.s_id
JOIN courses c ON e.c_id=c.c_id;


