// Создайте функцию multiplyNumeric , которая получает объект и умножает все численные свойства на 2. Например:

// до вызова 
var menu = {    
    width: 200,
    height: 300,    
    title: "My menu" 
}; 
multiplyNumeric(menu);
console.log(menu);
// после вызова  menu = {    width: 400,    height: 600,    title: "My menu"  };

function isNumeric(n) {    
    return !isNaN(parseFloat(n)) && isFinite(n) 
}
function  multiplyNumeric(obj) {
    for (let key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
    return obj;
}