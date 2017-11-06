// switch (browser) {
//     case 'IE':
//         console.log( 'О, да у вас IE!' );
//         break;
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         console.log( 'Да, и эти браузеры мы поддерживаем' );
//         break;
//     default:
//         console.log( 'Мы надеемся, что и в вашем браузере все ок!' );
// }
let browser = "IE";
if (browser == 'IE') {
    console.log( 'О, да у вас IE!' );
} else if (browser == 'Opera' || browser == 'Safari' || browser == 'Firefox' || browser == 'Chrome') {
    console.log( 'Да, и эти браузеры мы поддерживаем' );
} else {
    console.log( 'Мы надеемся, что и в вашем браузере все ок!' );
}