'use strict';

/**
 * The Student class represents a student and provides functionality
 * for managing personal data, attendance records, and academic marks.
 * It stores the student's first and last name, age and calculated birth year,
 * an attendance array for up to 25 lessons, and a marks array for up to 25 grades.
 * The class includes methods to mark presence or absence, add marks in the range
 * from 0 to 100, calculate average mark and average attendance, and return a
 * summary evaluation of the student's performance based on these averages.
 *
 * @class
 */

class Student {

    constructor(fullName, age) {
        const [firstName, lastName] = fullName.split(' ');
        this.name = firstName;
        this.surname = lastName;
        this.attendance = new Array(25);
        this.age = age
        this.marks = new Array(25);
    }

    getBirthYear() {
        const currentYear = new Date().getFullYear()
        this.birthYear = currentYear - this.age
        return this.birthYear;
    }

    present() {
        while(!this.countAttendance){
            this.countAttendance = 0;
            break;
        }
        if (this.attendance.length <= 25 && this.countAttendance<= 25) {
            this.attendance[this.attendance.findIndex(n => typeof n !== 'boolean')] = true;
            this.countAttendance++;
            return this.attendance;
        }

    }

    absent() {
        while(!this.countAttendance){
            this.countAttendance = 0;
            break;
        }
        if (this.attendance.length <= 25 && this.countAttendance<= 25) {
            this.attendance[this.attendance.findIndex(n => typeof n !== 'boolean')] = false;
            this.countAttendance++;
            return this.attendance;
        }
    }
    mark(mark) {
        while (!this.countMarks){
            this.countMarks = 0;
            break;
        }
        if (mark >= 0 && mark <= 100 && this.marks.length <= 25 && this.countMarks<= 25) {
            this.marks[this.marks.findIndex(n => typeof n !== 'number')] = mark;
            this.countMarks++;
            return this.marks;
        }
    }
    avg() {
        while (!this.averageMark && !this.averageAttendance){
            this.averageMark = 0;
            this.averageAttendance = 0;
            break;
        }
        for (let i = 0; i <= this.marks.length; i++) {
            while (!this.sum && !this.attendanceValidator){
                this.sum = 0;
                this.attendanceValidator = 0;
                break;
            }
            if (typeof this.marks[i] === 'number') {
                this.sum = this.sum + this.marks[i];
            }
            if (typeof this.attendance[i] === 'boolean'){
                this.attendanceValidator = this.attendanceValidator + Number(this.attendance[i]);
            }
        }
        this.averageMark = this.sum/this.countMarks
        this.averageAttendance = this.attendanceValidator/this.countAttendance
    }
    summary() {
        if (this.averageMark > 90 && this.averageAttendance > 0.9) {
            return 'Молодець!';
        } else if (this.averageMark > 90 || this.averageAttendance > 0.9) {
            return 'Добре, але можна краще ';
        } else {
            return 'Редиска!';
        }
    }
}

let us = new Student('Ivan Sadoviy',20);
us.mark(100)
us.present()
us.absent()
us.present()
us.absent()
us.present()
us.mark(10)
us.mark(100)
us.avg()
console.log(us.summary());
console.log(us);
console.log(us.getBirthYear());
console.log('---------');
let us2 = new Student('Ivan Sadoviy',220);
us2.mark(4)
us2.present()
us2.absent()
us2.present()
us2.avg()
console.log(us2.summary())
console.log(us2);
console.log(us2.getBirthYear());
console.log('---------');
let us3 = new Student('Ivan Sadoviy',2210);
us3.mark(10)
us3.present()
us3.absent()
us3.present()
us3.mark(10)
us3.avg()
console.log(us3.summary())
console.log(us3);
console.log(us3.getBirthYear());