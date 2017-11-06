// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }

// variant ?
function checkAge(age) {
    return (age > 18) ? true : console.log("Родители разрешили?");
}
checkAge(10);
// variant ||
function checkAge(age) {
    return (age > 18) || console.log("Родители разрешили?");
}