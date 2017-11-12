// Создайте функцию find(arr, value) , которая ищет в массиве arr значение value и возвращает его номер, если найдено, или ‐1 ,
//     если не найдено.

let arr = ["test", 2, 1.5, false];
find(arr, "test"); // 0 
find(arr, 2); // 1 
find(arr, 1.5); // 2 
find(arr, 0); // ‐1


function find (array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
        return -1;
    }
}