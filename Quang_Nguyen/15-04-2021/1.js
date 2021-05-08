var a = prompt('Mời bạn nhập vào số 1: ');
console.log('số 1 là: ',a)
console.log(typeof(+a))
var b = prompt('Mời bạn nhập vào số 2: ');
console.log('số 2 là: ',b)
console.log(typeof(b))
function maths(a,b) {
    if (a>b) {
        console.log('Số nhỏ nhất là',b);
    } else if (a < b) {
        console.log('Số nhỏ nhất là',a);
    } else if (a == b) {
        console.log('2 số bằng nhau');
    }
}
maths(a,b)