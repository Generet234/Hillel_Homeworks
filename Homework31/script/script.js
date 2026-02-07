'use strict';
/**
 * Student object constructor for creating a student and managing their academic performance and attendance,
 * including marks, presence, and absence tracking, with methods to calculate averages and provide a performance summary.
 * The constructor takes the full name of the student in the format "FirstName LastName" and the age,
 * and initializes properties such as `name` (first name), `surname` (last name), `age`, `birthYear` (calculated via getBirthYear()),
 * `sum` (sum of marks for average calculation), `attendanceValidator` (count of present days),
 * `attendance` (array of attendance records: true = present, false = absent, empty = not marked),
 * `countAttendance` (number of attendance records), `marks` (array of marks from 0 to 100),
 * `countMarks` (number of marks entered), `averageMark` (average mark), and `averageAttendance` (average attendance).
 * Methods include `getBirthYear()` to calculate and return the birth year,
 * `present()` to mark attendance as present, `absent()` to mark attendance as absent,
 * `mark(mark)` to add a mark to the next available slot, `avg()` to calculate average mark and attendance,
 * and `summary()` to return a string summarizing the student's performance.
 */

class Student {
    countAttendance = 0;
    countMarks = 0;
    attendanceValidator = 0;
    sum = 0;
    averageMark = 0;
    averageAttendance = 0;

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
        if (this.attendance.length <= 25) {
            this.attendance[this.attendance.findIndex(n => typeof n !== 'boolean')] = true;
            this.countAttendance++;
            return this.attendance;
        }

    }

    absent() {
        if (this.attendance.length <= 25) {
            this.attendance[this.attendance.findIndex(n => typeof n !== 'boolean')] = false;
            this.countAttendance++;
            return this.attendance;
        }
    }

}
class AvgSum extends Student {
    mark(mark) {
        if (mark >= 0 && mark <= 100 && this.marks.length <= 25) {
            this.marks[this.marks.findIndex(n => typeof n !== 'number')] = mark;
            this.countMarks++;
            return this.marks;
        }
    }
    avg() {
        for (let i = 0; i <= this.marks.length; i++) {
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

let us = new AvgSum('Ivan Sadoviy',20);
us.mark(100)
us.present()
us.absent()
us.present()
us.absent()
us.mark(10)
us.mark(100)
us.avg()
console.log(us.summary());
console.log(us);
console.log(us.getBirthYear());
console.log('---------');
let us2 = new AvgSum('Ivan Sadoviy',220);
us2.mark(4)
us2.present()
us2.absent()
us2.present()
us2.avg()
console.log(us2.summary())
console.log(us2);
console.log(us2.getBirthYear());
console.log('---------');
let us3 = new AvgSum('Ivan Sadoviy',2210);
us3.mark(10)
us3.present()
us3.absent()
us3.present()
us3.mark(10)
us3.avg()
console.log(us3.summary())
console.log(us3);
console.log(us3.getBirthYear());