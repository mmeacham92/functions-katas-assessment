// Kata 1:
function add(a, b) {
  return a + b;
}

console.log(`The sum is ${add(44, 5)}`);

// Kata 2:
function multiply(a, b) {
  let product = 0;
  while (b > 0) {
    product = add(product, a);
    b = add(b, -1);
  }
  return product;
}

console.log(`The product is ${multiply(12, 10)}`);

// Kata 3:
function power(x, n) {
  let product = x;
  while (n > 1) {
    product = multiply(product, x);
    n = add(n, -1);
  }
  return product;
}

console.log(power(2, 5));

// Kata 4:
function factorial(a) {
  let sum = a;
  while (a > 1) {
    sum = multiply(sum, add(a, -1));
    a = add(a, -1);
  }
  return sum;
}

console.log(factorial(5));

// Kata 5:
function fibonacci(n) {
  let numbers = [];
  numbers.push(0);
  if (n >= 2) {
    numbers.push(1);
    let count = n;
    let i = 2;
    while (count > 0) {
      numbers[i] = add(numbers[add(i, -2)], numbers[add(i, -1)]);
      i = add(i, 1);
      count = add(count, -1);
    }
    // for (i = 2; i < n; i++) {
    //   numbers[i] = add(numbers[add(i, -2)], numbers[add(i, -1)]);
    // }
  }
  return numbers[add(n, -1)];
}

console.log(fibonacci(8));
