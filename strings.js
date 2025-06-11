// Задача 1
// Подсчитывает количество прописных латинских букв в строке
export function countUppercaseLetters(str) {
    return [...str].filter(char => char >= 'A' && char <= 'Z').length;
  }
  
  // Задача 2
  // Объединяет первые N1 символов S1 и последние N2 символов S2
  export function combineStrings(N1, N2, S1, S2) {
    const part1 = S1.slice(0, N1);
    const part2 = S2.slice(-N2);
    return part1 + part2;
  }
  
  // Задача 3
  // Проверяет, содержит ли строка S подстроку S0
  export function containsSubstring(S, S0) {
    return S.includes(S0);
  }
  
  // Задача 4
  // Заменяет первое вхождение подстроки S1 на S2 в строке S
  export function replaceSubstring(S, S1, S2) {
    return S.replace(S1, S2);
  }
  
  // Задача 5
  // Считает слова, начинающиеся и заканчивающиеся одной и той же буквой
  export function countWordsWithSameLetters(sentence) {
    return sentence
      .split(' ')
      .filter(word => word.length > 0 && word[0].toLowerCase() === word[word.length - 1].toLowerCase())
      .length;
  }

  // Задача 6
// Считает количество слов, содержащих хотя бы одну букву 'A' или 'a'
export function countWordsWithA(sentence) {
    return sentence
      .split(/\s+/)
      .filter(word => word.toLowerCase().includes('a'))
      .length;
  }
  
  // Задача 7
  // Нормализует пробелы между словами: только один пробел между словами и без пробелов по краям
  export function normalizeSpaces(sentence) {
    return sentence.trim().split(/\s+/).join(' ');
  }
  
  // Задача 8
  // Извлекает имя файла без расширения из полного пути
  export function extractFileName(fullFileName) {
    const parts = fullFileName.split('/');
    const lastPart = parts[parts.length - 1];
    return lastPart.split('.')[0];
  }
  
  // Задача 9
  // Шифрует строку: сначала символы с чётных индексов, потом с нечётных в обратном порядке
  export function encryptSentence(sentence) {
    let evenChars = '';
    let oddChars = '';
    for (let i = 0; i < sentence.length; i++) {
      if (i % 2 === 0) {
        evenChars += sentence[i];
      } else {
        oddChars = sentence[i] + oddChars;
      }
    }
    return evenChars + oddChars;
  }
  
  // Задача 10
  // Проверяет правильность скобок: 0 — всё правильно, -1 — не хватает закрывающих, иначе индекс лишней закрывающей
  export function checkBrackets(expression) {
    let stack = [];
    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];
      if (char === '(') {
        stack.push(i);
      } else if (char === ')') {
        if (stack.length === 0) {
          return i; // Лишняя закрывающая скобка
        }
        stack.pop();
      }
    }
    return stack.length === 0 ? 0 : -1; // Если остались незакрытые скобки — не хватает закрывающих
  }
