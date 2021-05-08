let heightMinh = prompt("Please enter Minh's height", 1.8);
let weightMinh = prompt("Please enter Toan's width", 60);

let heightToan = prompt("Please enter Minh's height", 1.8);
let weightToan = prompt("Please enter Toan's width", 60);

let bmiMinh = (weightMinh / heightMinh) ** 2;
let bmiToan = (weightToan / heightToan) ** 2;

if (bmiMinh > bmiToan) {
  alert("BMI Của Minh Lớn Hơn Toàn");
} else if (bmiMinh < bmiToan) {
  alert("BMI Của Toàn Lớn Hơn Minh");
} else {
  alert("BMI Của Toàn Bằng Minh");
}
