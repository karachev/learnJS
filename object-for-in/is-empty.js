// Создайте функцию isEmpty(obj) , которая возвращает true , если в объекте нет свойств и false – если хоть одно свойство есть.
function isEmpty(obj) {    
    /* ваш код */ 
    for (let key in obj) {
        return false;
    }
    return true;
}
var schedule = {};
console.log( isEmpty(schedule) ); // true 
schedule["8:30"] = "подъём";
console.log( isEmpty(schedule) ); // fals