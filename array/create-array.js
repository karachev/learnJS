

// Задача из 5 шагов‑строк:
// 1. Создайте массив styles с элементами «Джаз», «Блюз».
let styles = ["Джаз", "Блюз"];
// 2. Добавьте в конец значение «Рок‑н‑Ролл»
styles.push("Рок");
// 3. Замените предпоследнее значение с конца на «Классика».
// Код замены предпоследнего значения должен работать для массивов любой длины.
styles[styles.length - 2] = "Классика";
// 4. Удалите первое значение массива и выведите его alert .
console.log(styles.shift());
// 5. Добавьте в начало значения «Рэп» и «Регги».
styles.unshift("Реп", "Регги");

console.log(styles);

// Джаз, Блюз 
// Джаз, Блюз, Рок‐н‐Ролл 
// Джаз, Классика, Рок‐н‐Ролл 
// Классика, Рок‐н‐Ролл 
// Рэп, Регги, Классика, Рок‐н‐Ролл