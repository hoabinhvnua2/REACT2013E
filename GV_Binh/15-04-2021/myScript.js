


// cử dụng var để khai báo biến khi nó là global
// còn lại moitj trường hợp các bạn sử dụng let
// function cũng let, for cũng let

function showTest() {
    var test =  document.getElementById('testNumber');

    console.log(test.value)
    console.log(typeof test.value)
}
