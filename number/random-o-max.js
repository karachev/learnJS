//Напишите код для генерации случайного значения в диапазоне от 0 до max , не включая max .
console.log(randomInteger(10));

function randomInteger(max) {
    return Math.floor(Math.random() * max);
}
