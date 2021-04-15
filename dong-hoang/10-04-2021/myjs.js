function bmiCompare() {
    const h1 = document.getElementById('hMinh').value;
    const w1 = document.getElementById('wMinh').value;
    const h2 = document.getElementById('hToan').value;
    const w2 = document.getElementById('wToan').value;
    console.log(h1,w1,h2,w2);
    const bmiMinh = w1/(h1**2);
    const bmiToan = w2/(h2**2);
    const result = document.getElementById('result');
    if (bmiMinh>bmiToan) {
        result.innerHTML = 'BMI của Minh lớn hơn BMI của Toàn';
    } else if (bmiMinh<bmiToan) {
        result.innerHTML = 'BMI của Minh nhỏ hơn BMI của Toàn';
    } else {
        result.innerHTML = 'BMI của Minh bằng BMI của Toàn';
    }
}
function inputNumber() {
    let y = prompt('Nhập vào số lớn hơn 100');
   while (y<=100) {
    y = prompt('Nhập vào số lớn hơn 100');
   }
   document.getElementById('userNumber').innerHTML = 'Số bạn vừa nhập là: '+ y;
}
