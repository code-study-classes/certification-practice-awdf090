// Задача 1
export function sumOfSquares(A, B) {
    let sum = 0;
    for (let i = A; i <= B; i++) {
      sum += i * i;
    }
    return sum;
  }
  
  // Задача 2
  export function power(A, N) {
    let result = 1;
    for (let i = 0; i < N; i++) {
      result *= A;
    }
    return result;
  }
  
  // Задача 3
  export function factorialProduct(N) {
    let result = 1;
    for (let i = 2; i <= N; i++) {
      result *= i;
    }
    return result;
  }
  
  // Задача 4
  export function fibonacciSequence(N) {
    let a = 1, b = 1;
    for (let i = 3; i <= N; i++) {
      const next = a + b;
      a = b;
      b = next;
    }
    return b;
  }
  
  // Задача 5
  export function sumOfPowers(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
      let power = 1;
      for (let j = 0; j < i; j++) {
        power *= i;
      }
      sum += power;
    }
    return sum;
  }

// Задача 6
export function remainingLength(A, B) {
    while (A >= B) {
      A -= B;
    }
    return A;
  }
  
  // Задача 7
  export function findExponent(N) {
    let K = 0;
    let power = 1;
    while (power < N) {
      power *= 2;
      K++;
    }
    return K;
  }
  
  // Задача 8
  export function findMinKAndSum(N) {
    let sum = 0;
    let K = 0;
    while (sum < N) {
      K++;
      sum += K;
    }
    return K;
  }
  
  // Задача 9
  export function calculateGCD(A, B) {
    while (B !== 0) {
      let temp = B;
      B = A % B;
      A = temp;
    }
    return A;
  }
  
  // Задача 10
  export function findFibonacciIndex(N) {
    let a = 1, b = 1, index = 2;
    while (b < N) {
      const temp = b;
      b = a + b;
      a = temp;
      index++;
    }
    return index;
  }
