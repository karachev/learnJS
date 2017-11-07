// Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.
// Функция должна быть нечувствительна к регистру:
function checkSpam(str) {
    debugger;
    str = str.toLowerCase();
    if (~str.indexOf("pavel") || ~str.indexOf("xxx")) {
        return true;
    }
    return false;
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('pavel'));
console.log(checkSpam("innocent rabbit"));