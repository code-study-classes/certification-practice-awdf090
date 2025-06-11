// Задача 1
// Проверяет, является ли число положительным
export function isPositive(A) {
    return A > 0;
  }
  
  // Задача 2
  // Проверяет, является ли число нечётным
  export function isOdd(A) {
    return A % 2 !== 0;
  }
  
  // Задача 3
  // Проверяет, выполняются ли одновременно неравенства A > 2 и B ≤ 3
  export function checkInequality(A, B) {
    return A > 2 && B <= 3;
  }
  
  // Задача 4
  // Проверяет, выполняется ли хотя бы одно из неравенств: A ≥ 0 или B < –2
  export function checkInequality2(A, B) {
    return A >= 0 || B < -2;
  }
  
  // Задача 5
  // Проверяет, находится ли B строго между A и C (в любом порядке)
  export function checkBetweenNumbers(A, B, C) {
    return (A < B && B < C) || (C < B && B < A);
  }

// Задача 6
// Проверяет, является ли число нечетным и трехзначным
export function checkOddThreeDigitNumber(number) {
    const absNum = Math.abs(number);
    return absNum >= 100 && absNum <= 999 && number % 2 !== 0;
  }
  
  // Задача 7
  // Проверяет, различны ли все цифры в трёхзначном числе
  export function checkUniqueDigits(number) {
    const absNum = Math.abs(number);
    if (absNum < 100 || absNum > 999) return false;
    const hundreds = Math.floor(absNum / 100);
    const tens = Math.floor((absNum % 100) / 10);
    const units = absNum % 10;
    return hundreds !== tens && hundreds !== units && tens !== units;
  }
  
  // Задача 8
  // Проверяет, находится ли точка во второй координатной четверти
  export function isSecondQuadrant(x, y) {
    return x < 0 && y > 0;
  }
  
  // Задача 9
  // Проверяет, является ли треугольник равнобедренным
  export function isIsoscelesTriangle(a, b, c) {
    return a === b||b === c||a === c;
  }
  
  // Задача 10
  // Проверяет, имеют ли два поля шахматной доски одинаковый цвет
  export function areSameColorFields(x1, y1, x2, y2) {
    return (x1 + y1) % 2 === (x2 + y2) % 2;
  }
