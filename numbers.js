// Задача 1
export function calculateDistance(x1, x2) {
    return Math.abs(x2 - x1);
  }
  
  // Задача 2
  export function calculateSegmentProduct(A, B, C) {
    const AC = Math.abs(C - A);
    const BC = Math.abs(B - C);
    return AC * BC;
  }
  
  // Задача 3
  export function calculateKilobytes(fileSizeInBytes) {
    return Math.floor(fileSizeInBytes / 1024);
  }
  
  // Задача 4
  export function calculateSegments(lengthA, lengthB) {
    return Math.floor(lengthA / lengthB);
  }
  
  // Задача 5
  export function calculateDigitSum(twoDigitNumber) {
    const tens = Math.floor(twoDigitNumber / 10);
    const units = twoDigitNumber % 10;
    return tens + units;
  }
  
  // Задача 6
export function swapHundredsAndTens(threeDigitNumber) {
    const hundreds = Math.floor(threeDigitNumber / 100);
    const tens = Math.floor((threeDigitNumber % 100) / 10);
    const units = threeDigitNumber % 10;
    return tens * 100 + hundreds * 10 + units;
  }
  
  // Задача 7
  export function getHundredsDigit(number) {
    if (number <= 999) return 0;
    return Math.floor(number / 100) % 10;
  }
  
  // Задача 8
  export function getFullHours(seconds) {
    return Math.floor(seconds / 3600);
  }
  
  // Задача 9
  export function getDayOfWeek(dayOfYear) {
    return (dayOfYear + 0) % 7; // 1 января — понедельник (1), а воскресенье — 0
  }
  
  // Задача 10
  export function countSquares(A, B, C) {
    const squaresPerRow = Math.floor(A / C);
    const squaresPerColumn = Math.floor(B / C);
    return squaresPerRow * squaresPerColumn;
  }
