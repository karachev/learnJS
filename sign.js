// Используя конструкцию if..else, напишите код, который получает значение prompt, а затем выводит alert:
//
//     1, если значение больше нуля,
//     -1, если значение меньше нуля,
//     0, если значение равно нулю.

"use strict";
let val = prompt("Значение",'');
if ( val > 0) {
    alert(1);
} else if (val < 0 ) {
    alert(-1);
} else {
    alert(0);
}