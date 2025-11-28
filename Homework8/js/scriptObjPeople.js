'use strict';
const people = [
    {name : "Anna",age: 22},
    {name : "Oleg",age: 31},
    {name : "Maria",age: 27},
];
const firstPersonName = people[0].name;
if (people[1].age>people[0].age || people[1].age>people[2].age) {
    const oldest = [{firstPersonName : "Oleg", age:31}];
}
const ageSummary = {
    total : people[0].age + people[1].age + people[2].age,
    average : (people[0].age + people[1].age + people[2].age)/3
}
