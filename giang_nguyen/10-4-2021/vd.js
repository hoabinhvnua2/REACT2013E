var height = prompt();
var weight = prompt();
var bmi1 = weight/(height*2);
alert("nhập chiều cao của minh"+height);
alert("nhập cân nặng của minh"+weight);
alert(bmi1);
var height = prompt();
var weight = prompt();
var bmi2 = weight/(height*2);
alert("nhập chiều cao của toan"+height);
alert("nhập cân nặng của toan"+weight);
alert(bmi2);
if(bmi1>bmi2){
  alert("BMI của minh lớn hơn toàn");
}else if(bmi1==bmi2){
  alert("BMI của minh bằng toàn");
}else{
  alert("BMI của minh nhỏ hơn toàn");
}