//Напишите код для генерации случайного числа от min до max , не включая max .
console.log(randomFunc(1,10));

function randomFunc(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}