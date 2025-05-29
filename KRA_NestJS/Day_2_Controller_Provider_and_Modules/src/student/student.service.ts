import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: "Aarav Sharma", age: 16 },
        { id: 2, name: "Ishita Verma", age: 17 },
        { id: 3, name: "Rahul Patel", age: 15 },
        { id: 4, name: "Sneha Reddy", age: 16 },
        { id: 5, name: "Karan Mehta", age: 18 },
        { id: 6, name: "Pooja Iyer", age: 17 },
    ];

    // GET
    getAllStudents() {
        return this.students;
    }

    getStudentById(id: number) {
        const student = this.students.find((s) => s.id === id);

        if (!student) throw new NotFoundException('Student not found!');
        return student;
    }

    //POST
    createStudent(data: { name: string, age: number; }) {
        const newStudent = {
            id: Date.now(),
            ...data
        }

        this.students.push(newStudent);
        return newStudent;
    }

    // PUT
    updateStudent(id: number, data: { name: string, age: number }) {
        const index = this.students.findIndex((s) => s.id === id);
        if (index === -1) throw new NotFoundException("Student not found!");
        this.students[index] = { id, ...data };
        return this.students[index];
    }

    // PATCH
    patchStudent(id: number, data: Partial<{ name: string, age: number }>) {
        const student = this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }

    // DELETE
    deleteStudent(id: number) {
        const index = this.students.findIndex((s) => s.id === id);
        if (index === -1) throw new NotFoundException("Student not found!");
        const deleted = this.students.splice(index, 1);
        return { message: "Student record deleted", student: deleted[0] };
    }

}
