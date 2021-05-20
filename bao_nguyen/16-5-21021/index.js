// function out() {

//     const clas = document.getElementsByClassName('giatri')
//     let x = true



//     if (clas[0].value === '') {
//         alert('bạn chưa đăng nhập firstName')
//         x = false
//     }
//     if (clas[1].value === '') {
//         alert('bạn chưa đăng nhập lastName')
//         x = false
//     }
//     if (clas[2].value === '') {
//         alert('bạn chưa đăng nhập userName')
//         x = false
//     }
//     if (clas[3].value === '') {
//         alert('bạn chưa đăng nhập email')
//         x = false
//     }

//     if (clas[4].value === '') {
//         alert('bạn chưa đăng nhập password')
//         x = false
//     }
//     if (clas[5].value === '') {
//         alert('bạn chưa đăng nhập confirmpassword')
//         x = false
//     }
//     if (clas[4].value !== clas[5].value) {
//         alert('confirmpassword của bạn chưa đúng ')
//         x = false
//     }





//     setTimeout(function() {
//         if (x === true) {
//             alert(' bạn đã đăng ký thành công')

//         }

//     }, 5000)



// }
var kt = new Promise(
    function(res, rej) {
        // res();
        rej('baor quas ddepj terai ');

    }
)
kt.then(function() {
            console.log('baor');
        }


    )
    .catch(function(x) {
            console.log(x);
        }

    )
const API = "https://6050aa4a5346090017670332.mockapi.io/list-product";
const show = document.getElementById('show');


function getProduct() {
    fetch(API)
        .then((x) => x.json())

    .then((y) => {
        console.log(y)
        html = '';
        for (let i = 0; i < y.length; i++) {


            const showhome = `   <tr>
            <td>${i+1}</td>
            <td>${y[i].product_name}</td>
            <td>${y[i].price}</td>
            <td>${y[i].quantity}</td>
            
            </tr>
            `
            html += showhome








        }
        show.innerHTML = html
    })


}
getProduct();