'use strict';
/**
 * Student object constructor used to create a student and manage their academic performance.
 *
 * @constructor
 * @param {string} fullName Full name of the student in the format "FirstName LastName".
 * @param {number} age Age of the student.
 *
 * @property {string} name First name of the student.
 * @property {string} surname Last name of the student.
 * @property {number} age Age of the student.
 * @property {number} birthYear Year of birth calculated by the getBirthYear method.
 *
 * @static
 * @property {number} count Total number of created students.
 * @property {boolean[]} attendance Attendance array where true means present and false means absent.
 * @property {number[]} marks Array of student marks in the range from 0 to 10.
 *
 * @method getBirthYear Calculates and returns the student's year of birth.
 * @method present Marks the student as present.
 * @method absent Marks the student as absent.
 * @method mark Adds a mark to the student.
 * @method avg Calculates the average mark and attendance values.
 * @method summary Analyzes the average mark and attendance and outputs the result to the console.
 */

function Student(fullName, age) {
    const [firstName, lastName] = fullName.split(' ');
    this.name = firstName;
    this.surname = lastName;
    this.age = age
    Student.count++
}
Student.prototype.getBirthYear = function () {
    const currentYear = new Date().getFullYear()
    this.birthYear = currentYear - this.age
    return this.birthYear;
}

Student.prototype.present = function () {
    if (Student.count <=10 && Student.attendance.length <=10){
        Student.attendance[Student.count-1] = true;
        return Student.attendance;
    }
}

Student.prototype.absent = function () {
    if (Student.count<= 10 && Student.attendance.length <=10) {
        Student.attendance[Student.count-1] = false;
        return Student.attendance;
    }
}

Student.prototype.mark = function (mark) {
    if (mark >=0 && mark <= 10 && Student.count<= 10 && Student.marks.length <=10){
        Student.marks[Student.count-1] = mark;
        return Student.marks;
    }
}
Student.count = 0
Student.attendance = [];
Student.marks = [];
let sum = 0
let attendance = 0;
Student.prototype.summary = function () {
    const averageMark = sum/Student.count
    const averageAttendance = attendance/Student.count
    if (averageMark >9 && averageAttendance > 0.9){
        console.log('Ух ти, який молодчинка!');
    }
    else if (averageMark >9 || averageAttendance > 0.9){
        console.log('Нормально, але можна краще');
    }
    else {
        console.log('Редька!');
    }
}
const us = new Student('Ivan Sadoviy',20);
us.mark(10)
us.present()
console.log(us);
const us2 = new Student('Ivan Sadoviy',220);
us.present()
us2.mark(10)
console.log(us2);
const us3 = new Student('Ivan Sadoviy',2210);
us3.mark(10)
us.present()

Student.prototype.avg = function () {
    for (let i = 0; i <= 10; i++) {
        if (typeof Student.marks[i] !== 'undefined') {
            sum = sum + Student.marks[i];
        }
        if (typeof Student.attendance[i] === 'boolean'){
            attendance = attendance + Number(Student.attendance[i]);
        }
    }
}
us.avg();
us3.summary();
console.log(us3);
console.log(us.getBirthYear());