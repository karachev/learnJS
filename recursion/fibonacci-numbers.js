// Напишите функцию fib(n) , которая возвращает n‐е число Фибоначчи. Пример работы:
function fib(n) {
    let a = 1;
    let b = 1;
    let c;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

console.log(fib(77));