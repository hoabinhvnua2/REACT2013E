function out() {

    const clas = document.getElementsByClassName('giatri')
    let x = true



    if (clas[0].value === '') {
        alert('bạn chưa đăng nhập firstName')
        x = false
    }
    if (clas[1].value === '') {
        alert('bạn chưa đăng nhập lastName')
        x = false
    }
    if (clas[2].value === '') {
        alert('bạn chưa đăng nhập userName')
        x = false
    }
    if (clas[3].value === '') {
        alert('bạn chưa đăng nhập email')
        x = false
    }

    if (clas[4].value === '') {
        alert('bạn chưa đăng nhập password')
        x = false
    }
    if (clas[5].value === '') {
        alert('bạn chưa đăng nhập confirmpassword')
        x = false
    }
    if (clas[4].value !== clas[5].value) {
        alert('confirmpassword của bạn chưa đúng ')
        x = false
    }





    setTimeout(function() {
        if (x === true) {
            alert(' bạn đã đăng ký thành công')

        }

    }, 5000)



}