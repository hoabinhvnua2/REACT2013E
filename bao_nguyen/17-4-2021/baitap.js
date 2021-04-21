var soNhapVao = +prompt("nhap so can nhap");
// tinh so gia thua

function giaThua(a) {
    let tong = 1;
    for (let i = 1; i <= a; i++) {
        tong = tong * a;
    }
    return tong;
}
console.log(giaThua(soNhapVao) + " là giai thừa của " + soNhapVao);
console.log("--------------------------------------------------------");
// so nhap vao co phai so hoan hao ko

function soHoanHao(a) {
    let tong = 0;
    for (let i = 1; i < a; i++) {
        if (a % i == 0) {
            tong = tong + i;
        }
    }
    if (tong === a) {
        return true;
    } else {
        return false;
    }
}
if (soHoanHao(soNhapVao)) {
    console.log(soNhapVao + "  là số hoàn hảo ");
} else {
    console.log(soNhapVao + "  ko phải là số hoàn hảo ");
}
// so nguyen to
console.log("--------------------------------------------------------");

function nguyenTo(a) {
    let kt = true;
    if (a <= 2) {
        kt = true;
    }
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            kt = false;
            break;
        }
    }
    return kt;
}
if (nguyenTo(soNhapVao)) {
    console.log(soNhapVao + " là số nguyên tố ");
} else {
    console.log(soNhapVao + " không phải số nguyên tố ");
}
console.log("--------------------------------------------------------");

function soChinhPhuong(a) {
    let kt = false;
    for (let i = 1; i < a; i++) {
        if (i * i == a) {
            kt = true;
            break;
        }
    }
    return kt;
}
if (soChinhPhuong(soNhapVao)) {
    console.log(soNhapVao + " là só chính phương ");
} else {
    console.log(soNhapVao + " không phải là số chính phương ");
}
// yeeu caauf soos nhaapj đúng
switch (soNhapVao > 0) {
    case soNhapVao < 10:
        console.log("số bạn nhập nhỏ hơn 10 ");
        break;
    case soNhapVao < 20:
        console.log("số bạn nhập nhỏ hơn 20");
        break;
    case soNhapVao < 30:
        console.log("số bạn nhập nhỏ hơn 30");
        break;
    case soNhapVao < 40:
        console.log("số bạn nhập nhỏ hơn 40");
        break;
    case 41 < soNhapVao < 50:
        console.log("số bạn nhập nhỏ hơn 50");
        break;
    case soNhapVao < 60:
        console.log("số bạn nhập nhỏ hơn 60");
        break;
    case soNhapVao < 70:
        console.log("số bạn nhập nhỏ hơn 70");
        break;
    case soNhapVao < 80:
        console.log("số bạn nhập nhỏ hơn 80");
        break;
    case soNhapVao < 90:
        console.log("số bạn nhập nhỏ hơn 90");
        break;
    default:
        console.log("số bạn nhập nhỏ hơn 100");

}