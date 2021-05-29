// var height = prompt();
// var weight = prompt();
// var bmi1 = weight/(height*2);
// alert("nhập chiều cao của minh"+height);
// alert("nhập cân nặng của minh"+weight);
// alert(bmi1);
// var height = prompt();
// var weight = prompt();
// var bmi2 = weight/(height*2);
// alert("nhập chiều cao của toan"+height);
// alert("nhập cân nặng của toan"+weight);
// alert(bmi2);
// if(bmi1>bmi2){
//   alert("BMI của minh lớn hơn toàn");
// }else if(bmi1==bmi2){
//   alert("BMI của minh bằng toàn");
// }else{
//   alert("BMI của minh nhỏ hơn toàn");
// }
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "8e7149ce40mshf9a5aa260bf7178p1953dcjsn30b995fcfb3f",
		"x-rapidapi-host": "livescore6.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});


