// Создайте функцию filterRange(arr, a, b) , которая принимает массив чисел arr и возвращает новый массив,
// который содержит только числа из arr из диапазона от a до b .
// То есть, проверка имеет вид a ≤ arr[i] ≤ b . Функция не должна менять arr .

let arr = [5, 4, 3, 8, 0];
let filtered = filterRange(arr, 3, 10);
console.log(filtered);

function filterRange(arr, min, max) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}