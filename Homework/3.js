"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const userNumFirst = +prompt("Введите первое число");
const userNumSecond = +prompt("Введите второе число");
const userNumThird = +prompt("Введите третье число");

function maxNumSearch(numFirst, numSecond, numThird) {
  const maxNum = Math.max(numFirst, numSecond, numThird);
  console.log(
    `Максимальное значение среди чисел ${numFirst}, ${numSecond}, ${numThird} равно ${maxNum}`
  );
}

maxNumSearch(userNumFirst, userNumSecond, userNumThird);
