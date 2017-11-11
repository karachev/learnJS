// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0 .

"use strict";
var salaries = {    
    "Вася": 100,
    "Петя": 300,
    "Даша": 250 
};
let sumSal = 0;
for (let key in salaries) {
    sumSal += salaries[key];
}
console.log(sumSal);
//... ваш код выведет 650
