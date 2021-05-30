function myFunction() {
  var i = parseInt(document.getElementById("myNumber").value);
  switch(i){
    case 1:
      soChan();
      break;
    case 2:
      nhapSo();
      break;
    case 3:
      min();
      break;
    case 4:
      soThuNhat = prompt("nhập số thứ nhất");
      soThuHai = prompt("nhập số thứ hai");
      phepTinh = prompt("chọn phép tính");
      tinhToan(soThuNhat,soThuHai,phepTinh);
      break;
    case 5:
      var n = prompt();
      nguyenTo(n);
      break;
  }
}
function soChan(){
  var i;
  for(i=2;i<=10;i++){
    if(i%2==0){
    i;
    console.log(i);
    }
  }
}
function nhapSo(){
  alert("nhập một số lớn hơn 100");
  do{
    var n = prompt();
  }while(n<100);
  alert("số " +n+ " đã đúng yêu cầu");
}
function min(){
  var a= prompt("nhap so a");
  var b= prompt("nhap so b");
  if(a>b){
    console.log("giá trị "+b+ "nhỏ nhất");
  }else if(a<b){
    console.log("giá trị "+a+" nhỏ nhất");
  }else{
    console.log("không có giá trị nào nhỏ nhất");
  }
}
function tinhToan(soThuNhat,soThuHai,phepTinh){
  if(phepTinh == "cong"){
    console.log(soThuNhat + soThuHai);
  }
  if(phepTinh == "tru"){
    console.log(soThuNhat - soThuHai);
  }
  if(phepTinh == "nhan"){
    console.log(soThuNhat * soThuHai);
  }
  if(phepTinh == "chia"){
    console.log(soThuNhat / soThuHai);
  }
}
function nguyenTo(n){
var k=0,i;
    if(n<2){
      console.log(n+" không phải là số nguyên tố");
    }else{
      for(i = 2;i < n;i++){
        if(n%i !== 0){
          k++;
        }
      }
      if(k== 0){
        console.log(n+" là số nguyên tố");
      }else{
        console.log(n+" không phải là số nguyên tố");
      }
  }
}