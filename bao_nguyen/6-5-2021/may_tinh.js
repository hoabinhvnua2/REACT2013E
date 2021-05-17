function pheptinh(x) {
    const a = +document.getElementById('soThuNhat').value
    const b = +document.getElementById('soThuHai').value
    const c = document.getElementById('dapAn');

    switch (x) {

        case x = '+':

            c.value = a + b;
            document.getElementById("+").style.backgroundColor = "red";
            document.getElementById("-").style.backgroundColor = "#fff";
            document.getElementById("*").style.backgroundColor = "#fff";
            document.getElementById("/").style.backgroundColor = "#fff";
            document.getElementById("**").style.backgroundColor = "#fff";

            break;
        case x = '-':

            c.value = a - b;
            document.getElementById("+").style.backgroundColor = "#fff";
            document.getElementById("-").style.backgroundColor = "red";
            document.getElementById("*").style.backgroundColor = "#fff";
            document.getElementById("/").style.backgroundColor = "#fff";
            document.getElementById("**").style.backgroundColor = "#fff";

            break;
        case x = '*':

            c.value = a * b;
            document.getElementById("*").style.backgroundColor = "red";
            document.getElementById("+").style.backgroundColor = "#fff";
            document.getElementById("-").style.backgroundColor = "#fff";

            document.getElementById("/").style.backgroundColor = "#fff";
            document.getElementById("**").style.backgroundColor = "#fff";


            break;
        case x = '/':
            if (b == 0) {
                alert('không thể thực hiện phép chia ')
            }

            c.value = a / b;
            document.getElementById("/").style.backgroundColor = "red";
            document.getElementById("+").style.backgroundColor = "#fff";
            document.getElementById("-").style.backgroundColor = "#fff";
            document.getElementById("*").style.backgroundColor = "#fff";

            document.getElementById("**").style.backgroundColor = "#fff";


            break;
        case x = '**':
            let tong = a;
            for (let i = 1; i < b; i++) {
                tong = tong * a;
            }

            c.value = tong;
            document.getElementById("**").style.backgroundColor = "red";
            document.getElementById("+").style.backgroundColor = "#fff";
            document.getElementById("-").style.backgroundColor = "#fff";
            document.getElementById("*").style.backgroundColor = "#fff";
            document.getElementById("/").style.backgroundColor = "#fff";


            break;

        default:
            break;
    }

}