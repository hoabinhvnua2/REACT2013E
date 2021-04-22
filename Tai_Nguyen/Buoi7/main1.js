// Bài 1
for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}

// Bài 2
let number = 0;
do {
  number = prompt("Enter number greater than 100: ");
} while (number < 100);

//Bài 3
function min(a, b) {
  if (a < b) return a;
  else if (a > b) return b;
  return a;
}

let a, b, c;

console.log("Bài 3 Min 2 số");
a = prompt("Enter number a: ", 0);
b = prompt("Enter number b: ", 0);
console.log("Min: " + min(a, b));

//Bài 4
function tinhToan(a, b, phepTinh) {
  if (phepTinh == "+") {
    return a + b;
  } else if (phepTinh == "-") {
    return a - b;
  } else if (phepTinh == "*") {
    return a * b;
  } else if (phepTinh == "/") {
    return a / b;
  } else return undefined;
}

console.log("Bài 4 Tính");
a = prompt("Enter number a: ", 0);
b = prompt("Enter number b: ", 0);
c = prompt("Enter calculation: ", "+");
console.log(tinhToan(+a, +b, c));

//Bài 5
function snt(a) {
  for (let i = 2; i < a; i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}

console.log("Bài 5 Kiểm tra số nguyên tố");
a = prompt("Enter number a: ");
if (snt(a)) {
  console.log("Là snt");
} else {
  console.log("Không snt");
}
