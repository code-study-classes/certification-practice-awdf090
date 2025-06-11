// Задача 1
// Если число положительное, прибавить 1, иначе оставить без изменений
export function incrementIfPositive(number) {
    return number > 0 ? number + 1 : number;
  }
  
  // Задача 2
  // Вернуть порядковый номер (1 или 2) меньшего из двух чисел
  export function getIndexOfSmallerNumber(number1, number2) {
    return number1 <= number2 ? 1 : 2;
  }
  
  // Задача 3
  // Найти среднее из трех чисел (не среднее арифметическое)
  export function findMiddleNumber(number1, number2, number3) {
    if ((number1 <= number2 && number2 <= number3) || (number3 <= number2 && number2 <= number1)) {
      return number2;
    }
    if ((number2 <= number1 && number1 <= number3) || (number3 <= number1 && number1 <= number2)) {
      return number1;
    }
    return number3;
  }
  
  // Задача 4
  // Вернуть порядковый номер числа, отличного от трех равных
  export function findUniqueNumber(number1, number2, number3, number4) {
    if (number1 === number2 && number2 === number3) return 4;
    if (number1 === number2 && number2 === number4) return 3;
    if (number1 === number3 && number3 === number4) return 2;
    return 1;
  }
  
  // Задача 5
  // Посчитать значение функции f(x) по правилам
  export function calculateF(x) {
    if (x < 0) return 0;
    const intPart = Math.floor(x);
    return intPart % 2 === 0 ? 1 : -1;
  }

 // Задача 6
export function describeNumber(n) {
    const parity = n % 2 === 0 ? 'четное' : 'нечетное';
    let digits = '';
    if (n >= 1 && n <= 9) digits = 'однозначное';
    else if (n >= 10 && n <= 99) digits = 'двузначное';
    else if (n >= 100 && n <= 999) digits = 'трехзначное';
    return '${parity} ${digits} число';
  }
  
  // Задача 7
  export function getDayName(dayNumber) {
    switch (dayNumber) {
      case 1: return 'monday';
      case 2: return 'tuesday';
      case 3: return 'wednesday';
      case 4: return 'thursday';
      case 5: return 'friday';
      case 6: return 'saturday';
      case 7: return 'sunday';
      default: return 'Invalid day number.';
    }
  }
  
  // Задача 8
  export function convertToMeters(unitNumber, lengthInUnits) {
    switch (unitNumber) {
      case 1: return lengthInUnits / 10;        // дециметр
      case 2: return lengthInUnits * 1000;      // километр
      case 3: return lengthInUnits;             // метр
      case 4: return lengthInUnits / 1000;      // миллиметр
      case 5: return lengthInUnits / 100;       // сантиметр
      default: return 0;
    }
  }
  
  // Задача 9
  export function describeAge(age) {
    const decades = Math.floor(age / 10);
    const units = age % 10;
  
    const tensMap = {
      2: 'двадцать',
      3: 'тридцать',
      4: 'сорок',
      5: 'пятьдесят',
      6: 'шестьдесят',
    };
  
    const unitsMap = {
      1: 'один',
      2: 'два',
      3: 'три',
      4: 'четыре',
      5: 'пять',
      6: 'шесть',
      7: 'семь',
      8: 'восемь',
      9: 'девять',
    };
  
    let result = tensMap[decades];
    if (units !== 0) {
      result += ' ' + unitsMap[units];
    }
  
    if (units === 1) result += ' год';
    else if (units >= 2 && units <= 4) result += ' года';
    else result += ' лет';
  
    return result;
  }
  
  // Задача 10
  export function describeNumber2(number) {
    const hundreds = Math.floor(number / 100);
    const tens = Math.floor((number % 100) / 10);
    const units = number % 10;
  
    const hundredsMap = {
      1: 'сто',
      2: 'двести',
      3: 'триста',
      4: 'четыреста',
      5: 'пятьсот',
      6: 'шестьсот',
      7: 'семьсот',
      8: 'восемьсот',
      9: 'девятьсот'
    };
  
    const unitsMap = {
      1: 'один',
      2: 'два',
      3: 'три',
      4: 'четыре',
      5: 'пять',
      6: 'шесть',
      7: 'семь',
      8: 'восемь',
      9: 'девять'
    };
  
    const teensMap = {
      10: 'десять',
      11: 'одиннадцать',
      12: 'двенадцать',
      13: 'тринадцать',
      14: 'четырнадцать',
      15: 'пятнадцать',
      16: 'шестнадцать',
      17: 'семнадцать',
      18: 'восемнадцать',
      19: 'девятнадцать'
    };
  
    const tensMap = {
      2: 'двадцать',
      3: 'тридцать',
      4: 'сорок',
      5: 'пятьдесят',
      6: 'шестьдесят',
      7: 'семьдесят',
      8: 'восемьдесят',
      9: 'девяносто'
    };
  
    const result = [hundredsMap[hundreds]];
  
    if (tens === 1) {
      result.push(teensMap[tens * 10 + units]);
    } else {
      if (tensMap[tens]) result.push(tensMap[tens]);
      if (unitsMap[units]) result.push(unitsMap[units]);
    }
  
    return result.filter(Boolean).join(' ');
  }
