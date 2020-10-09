// Kata 1:
function add(a, b) {
  return a + b;
}

console.log(`The sum is ${add(3, 5)}`);

// Kata 2:
function multiply(a, b) {
  let product = 0;
  while (b > 0) {
    product = add(product, a);
    b--;
  }
  return product;
}

console.log(`The product is ${multiply(12, 5)}`);

// Kata 3:
function power(x, n) {
  let product = x;
  while (n > 1) {
    product = multiply(product, x);
    n--;
  }
  return product;
}

let total = power(5, 7);
console.log(total);

// Kata 4:
function factorial(a) {
  let sum = a;
  while (a > 1) {
    sum = multiply(sum, a - 1);
    a--;
  }
  return sum;
}

console.log(factorial(6));

// Kata 5:
function fibonacci(n) {
  let numbers = [];
  let sum = 0;
  numbers.push(sum);
  if (n >= 2) {
      numbers.push(1);
      for (i = 2; i < n; i++) {
          numbers[i] = add(numbers[i-2], numbers[i-1]);
      }
  }
  return numbers[n - 1];
}

console.log(fibonacci(33));
