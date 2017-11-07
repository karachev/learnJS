// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str,
// и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
// Результатом функции должна быть (при необходимости) усечённая строка.

function truncate(str, maxLength) {
    if (str.length > maxLength) {
        // for (let i = 0; i < maxLength - 3; i++) {
        //     newStr += str[i];
        // }
        return str.slice(0, maxLength - 3) + "...";
    }
    return str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));