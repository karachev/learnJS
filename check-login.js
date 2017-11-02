"use strict";

let userStatus = prompt("Кто пришел?","");
if (userStatus == "Админ") {
    let password = prompt('Пароль?','');
    if (password == 'Чёрный Властелин') {
        alert('Добро пожаловать!');
    } else if (password == null) {
        alert('Вход отменён');
    } else {
        alert('Пароль неверен');
    }
} else if (userStatus == null) {
    alert("Вход отменён");
} else {
    alert('Я вас не знаю');
}
