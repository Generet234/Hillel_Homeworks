'use strict';
/**
 * Конструктор объекта Student для создания студента и работы с его успеваемостью.
 *
 * @constructor
 * @param {string} fullName Полное имя студента в формате "Имя Фамилия".
 * @param {number} age Возраст студента.
 *
 * @property {string} name Имя студента.
 * @property {string} surname Фамилия студента.
 * @property {number} age Возраст студента.
 * @property {number} birthYear Год рождения (вычисляется методом getBirthYear).
 *
 * @static
 * @property {number} count Количество созданных студентов.
 * @property {boolean[]} attendance Массив посещаемости (true — был, false — отсутствовал).
 * @property {number[]} marks Массив оценок студента (от 0 до 10).
 *
 * @method getBirthYear Вычисляет и возвращает год рождения студента.
 * @method present Отмечает посещение студента.
 * @method absent Отмечает отсутствие студента.
 * @method mark Добавляет оценку студенту.
 * @method summary Анализирует среднюю оценку и посещаемость и выводит результат в консоль.
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
    if (Student.count <=10){
        Student.attendance[Student.count-1] = true;
        return Student.attendance;
    }
}

Student.prototype.absent = function () {
    if (Student.count<= 10) {
        Student.attendance[Student.count-1] = false;
        return Student.attendance;
    }
}

Student.prototype.mark = function (mark) {
    if (mark >=0 && mark <= 10 && Student.count<= 10){
        Student.marks[Student.count-1] = mark;
        return Student.marks;
    }
}
Student.count = 0
Student.attendance = [ , , , , , , , , , , ];
Student.marks = [ , , , , , , , , , , ];
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