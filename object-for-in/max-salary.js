// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».

"use strict";
var salaries = {    
    "Вася": 100,    
    "Петя": 300,    
    "Даша": 250 
};
let maxSalary = 0;
let rich = "";
for (let key in salaries) {
    if (salaries[key] > maxSalary) {
        maxSalary = salaries[key];
        rich = key;
    }
}
console.log(rich || "нет сотрудников");
// ... ваш код выведет "Петя"