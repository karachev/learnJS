// var message;
//
// if (login == 'Вася') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }

let login = 'Директо';

let message =   (login == 'Вася') ? 'Привет':
                (login == 'Директор') ? 'Здравствуйте':
                (login == '') ? 'Нет логина':
                'Лох что ли?';

console.log(message);