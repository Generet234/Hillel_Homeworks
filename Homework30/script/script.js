'use strict';
/**
 * Student object constructor for creating a student and managing their academic performance and attendance.
 *
 * @constructor
 * @param {string} fullName Full name of the student in the format "FirstName LastName".
 * @param {number} age Age of the student.
 *
 * @property {string} name First name of the student.
 * @property {string} surname Last name of the student.
 * @property {number} age Age of the student.
 * @property {number} birthYear Year of birth, calculated by getBirthYear().
 * @property {number} sum Sum of all marks, used for average calculation.
 * @property {number} attendanceValidator Count of present days (true values) for attendance calculation.
 * @property {boolean[]} attendance Array of attendance records (true = present, false = absent, empty slots = not marked yet).
 * @property {number} countAttendance Number of attendance records marked.
 * @property {number[]} marks Array of student marks (numbers from 0 to 10, empty slots = not marked yet).
 * @property {number} countMarks Number of marks entered.
 * @property {number} averageMark Average mark, calculated by avg().
 * @property {number} averageAttendance Average attendance (ratio of present days), calculated by avg().
 *
 * @method getBirthYear Calculates and returns the student's birth year based on current year and age.
 * @method present Marks the student as present in the first available empty attendance slot.
 * @method absent Marks the student as absent in the first available empty attendance slot.
 * @method mark Adds a mark to the first available empty slot in the marks array.
 * @method avg Calculates average mark and attendance for the student and stores them in averageMark and averageAttendance.
 * @method summary Returns a string summarizing the student's performance based on averageMark and averageAttendance.
 */

function Student(fullName, age) {
    const [firstName, lastName] = fullName.split(' ');
    this.name = firstName;
    this.sum = 0;
    this.attendanceValidator = 0;
    this.surname = lastName;
    this.attendance = [ , , , , , , , , , , ]
    this.countAttendance = 0;
    this.countMarks = 0;
    this.age = age
    this.marks = [ , , , , , , , , , , ]
}
Student.prototype.getBirthYear = function () {
    const currentYear = new Date().getFullYear()
    this.birthYear = currentYear - this.age
    return this.birthYear;
}

Student.prototype.present = function () {
    if (this.countAttendance <=10 && this.attendance.length <=10){
        this.attendance[this.attendance.findIndex(n => typeof n !== 'boolean')] = true;
        this.countAttendance++;
        return this.attendance;
    }
}

Student.prototype.absent = function () {
    if (this.countAttendance<= 10 && this.attendance.length <=10) {
        this.attendance[this.attendance.findIndex(n => typeof n !== 'boolean')] = false;
        this.countAttendance++;
        return this.attendance;
    }
}

Student.prototype.mark = function (mark) {
    if (mark >=0 && mark <= 10 && this.countMarks<= 10 && this.marks.length <=10){
        this.marks[this.marks.findIndex(n => typeof n !== 'number')] = mark;
        this.countMarks++;
        return this.marks;
    }
}
Student.prototype.avg = function () {
    for (let i = 0; i <= 10; i++) {
        if (typeof this.marks[i] !== 'undefined') {
            this.sum = this.sum + this.marks[i];
        }
        if (typeof this.attendance[i] === 'boolean'){
            this.attendanceValidator = this.attendanceValidator + Number(this.attendance[i]);
        }
    }
    this.averageMark = this.sum/this.countMarks
    this.averageAttendance = this.attendanceValidator/this.countAttendance
}

Student.prototype.summary = function () {
    if (this.averageMark >9 && this.averageAttendance > 0.9){
        return 'Ух ти, який молодчинка!';
    }
    else if (this.averageMark >9 || this.averageAttendance > 0.9){
        return 'Нормально, але можна краще';
    }
    else {
        return 'Редька!';
    }
}
const us = new Student('Ivan Sadoviy',20);
us.mark(10)
us.present()
us.absent()
us.mark(10)
us.mark(10)
console.log(us);
console.log(us.getBirthYear());
console.log('---------');
const us2 = new Student('Ivan Sadoviy',220);
us2.mark(4)
us2.present()
us2.absent()
us2.present()
console.log(us2);
console.log(us2.getBirthYear());
console.log('---------');
const us3 = new Student('Ivan Sadoviy',2210);
us3.mark(10)
us3.present()
us3.absent()
us3.present()
us3.mark(10)
console.log(us3);
console.log(us3.getBirthYear());