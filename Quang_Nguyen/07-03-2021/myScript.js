var chieuCaoToan = 1.7;
var canNangToan = 60;
var chieuCaoMinh = 1.75;
var canNangMinh = 90;

var bmiToan = 60 / canNangToan ** 2;
var bmiMinh = 90 / canNangMinh ** 2;

console.log('bmiToan');
console.log('bmiMinh');

if (bmiToan > bmiMinh ) {
    console.log("BMI của Toàn lớn hơn BMI Minh");
} else if (bmiToan < bmiMinh) {
    console.log("BMI của Minh lớn hơn BMI Toàn");
} else {
    console.log("BMI của Toàn bằng BMI của Minh");
}