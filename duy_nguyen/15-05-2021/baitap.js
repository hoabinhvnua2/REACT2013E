$(document).ready(function () {
    baitap.funcs.getDataFromAPI();
})
var baitap = {
    funcs: {

        checkEmpty: function (e) {
            if (e.value == "") {
                e.focus();
                e.style.borderColor = "red";
                return;
            }
        },
        checkPassWord: function (a, b) {

            if (a == "" || b == "" || a != b) {
                alert("Mật khẩu không đúng");
                return;
            }

        },
        getElementValue: function (id) {
            let e = document.getElementById(id);
            baitap.funcs.checkEmpty(e);
            return document.getElementById(id).value;
        },
        getDataFromAPI: function () {
            let url = "https://6050aa4a5346090017670332.mockapi.io/list-product";
            fetch(url).then(res => res.json()).then(data => baitap.funcs.setDataToTable(data));
        },
        setDataToTable: function (a) {
            console.log(a);

            let body = document.getElementById("body_table");
            let row = "";

            for (let i = 0; i < a.length; i++) {

                row  += `              
                <tr>
                <th scope="row">${a[i].id}</th>
                <td>${a[i].product_name}</td>
                <td>${a[i].quantity}</td>
                <td>${a[i].price}</td>
                </tr>
                `
            }
            body.innerHTML = row;

        }


    },
    events: {
        clickSignIn: function () {
            let firstname = baitap.funcs.getElementValue("firstName");
            let lastname = baitap.funcs.getElementValue("lastName");
            let username = baitap.funcs.getElementValue("userName");
            let mail = baitap.funcs.getElementValue("mail");
            let password = baitap.funcs.getElementValue("passWord");
            let confirm_password = baitap.funcs.getElementValue("confirm_PassWord");
            let cbbGender = document.getElementById("cbbGender").value;
           
            if (firstname != "" && lastname != "" && username != "" && username != "" && mail != "" && password != "" && confirm_password != "" && cbbGender != "") {
                if(password != confirm_password){
                    alert("Mật khẩu không đúng");
                    return;
                }
                setTimeout(function () { alert("Đăng ký thành công") }, 5000);
            }
        }
    }
}
document.getElementById("sign_in").addEventListener("click", baitap.events.clickSignIn);