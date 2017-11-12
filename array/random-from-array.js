// Напишите код для вывода alert случайного значения из массива:
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
let indexRand = randomVal(0, arr.length - 1);
console.log(arr[indexRand]);

// P.S. Код для генерации случайного целого от min to max включительно:
function randomVal(min, max) {
    let rand = min + Math.floor(Math.random() * (max + 1 - min));
    return rand;
}


