// Напишите функцию getDecimal(num) , которая возвращает десятичную часть числа:
console.log( getDecimal(12.345) ); // 0.345
console.log( getDecimal(1.2) ); // 0.2
// console.log( getDecimal(‐1.2) ); // 0.2

function getDecimal(n) {
    return +(n - Math.floor(n)).toFixed(3);
}