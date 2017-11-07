// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:

function unFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(unFirst("blablabla"))