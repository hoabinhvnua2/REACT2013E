var n = +prompt("n");
var k = +prompt("k");
// tinh so gia thua
var i = 100000;
while (i <= 10000000) {
  document.write(i + "<br/>");
  i++; // tăng i lên nếu không sẽ bị lặp vô hạn
}
// function giaThua(a){

//     let tong = 1;
//     for(let i = 1 ; i<=a ; i++){
//         tong = tong*a;
//     }
//     return tong;

// }
// console.log(giaThua(soNhapVao) + ' là giai thừa của ' + soNhapVao);
// console.log('--------------------------------------------------------')
// // so nhap vao co phai so hoan hao ko

// function soHoanHao(a){
//     let tong = 0;
//     for( let i=1 ; i <a ; i++){
//         if(a % i == 0){
//             tong = tong +i;
//         }
//     }
//     if(tong ===  a){
//         return true;
//     }else{
//         return false;
//     }

// }
// if(soHoanHao(soNhapVao)){
//     console.log( soNhapVao +'  là số hoàn hảo ')
// }else {
//     console.log( soNhapVao +'  ko phải là số hoàn hảo ')
// }
// // so nguyen to
// console.log('--------------------------------------------------------')

// function nguyenTo (a){
//     let kt = true;
//     if(a<=2){
//         kt = true ;
//     }
//     for(let i=2 ; i<a ; i++){
//         if(a % i == 0){
//             kt = false;
//             break
//         }

//     }
//     return kt;
// }
// if(nguyenTo(soNhapVao)){
//     console.log(soNhapVao+ ' là số nguyên tố ')
// }else{
//     console.log(soNhapVao+ ' không phải số nguyên tố ')
// }
// console.log('--------------------------------------------------------')
// function soChinhPhuong(a){
//     let kt=false;
//     for( let i = 1; i < a ; i++){
//         if(i*i == a){
//             kt = true;
//             break;
//         }
//     }
//     return kt
// }
// if(soChinhPhuong(soNhapVao)){

//     console.log(soNhapVao+ ' là só chính phương ');
// }else{
//     console.log(soNhapVao+ ' không phải là số chính phương ');
// }
