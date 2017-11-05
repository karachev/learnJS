// Задача – написать функцию factorial(n) , которая возвращает факториал числа n! , используя рекурсивный вызов.

function factorial(n) {
    if (n == 1) return n;
    return n * factorial(n - 1)
}

console.log(factorial(4));