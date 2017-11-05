// Напишите функцию sumTo(n) , которая для данного n вычисляет сумму чисел от 1 до n , например:
// Сделайте три варианта решения:
// 1. С использованием цикла.
function sumTo1(n) {
    let result = 0;
    for ( let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}
// 2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n‐1) для n > 1 .
function sumTo2(n) {
    if (n == 1) return 1;
    return n + sumTo2(n - 1);
}
// 3. С использованием формулы для суммы арифметической прогрессии
function sumTo3(n) {
    let lastN = 1 + (n - 1) * 1;
    return (1 + lastN) / 2 * n;
}

console.log(sumTo1(4));
console.log(sumTo2(100));
console.log(sumTo3(100));