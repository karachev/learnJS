// Напишите функцию randomInteger(min, max) для генерации случайного целого числа между min и max ,
// включая min,max как возможные значения.
// Любое число из интервала min..max должно иметь одинаковую вероятность

console.log(randomInteger(5,10));

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}