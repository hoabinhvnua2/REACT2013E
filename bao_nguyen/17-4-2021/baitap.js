// var soNhapVao = +prompt("nhap so can nhap");
// // tinh so gia thua

// function giaThua(a) {
//     let tong = 1;
//     for (let i = 1; i <= a; i++) {
//         tong = tong * a;
//     }
//     return tong;
// }
// console.log(giaThua(soNhapVao) + " là giai thừa của " + soNhapVao);
// console.log("--------------------------------------------------------");
// // so nhap vao co phai so hoan hao ko

// function soHoanHao(a) {
//     let tong = 0;
//     for (let i = 1; i < a; i++) {
//         if (a % i == 0) {
//             tong = tong + i;
//         }
//     }
//     if (tong === a) {
//         return true;
//     } else {
//         return false;
//     }
// }
// if (soHoanHao(soNhapVao)) {
//     console.log(soNhapVao + "  là số hoàn hảo ");
// } else {
//     console.log(soNhapVao + "  ko phải là số hoàn hảo ");
// }
// // so nguyen to
// console.log("--------------------------------------------------------");

// function nguyenTo(a) {
//     let kt = true;
//     if (a <= 2) {
//         kt = true;
//     }
//     for (let i = 2; i < a; i++) {
//         if (a % i == 0) {
//             kt = false;
//             break;
//         }
//     }
//     return kt;
// }
// if (nguyenTo(soNhapVao)) {
//     console.log(soNhapVao + " là số nguyên tố ");
// } else {
//     console.log(soNhapVao + " không phải số nguyên tố ");
// }
// console.log("--------------------------------------------------------");

// function soChinhPhuong(a) {
//     let kt = false;
//     for (let i = 1; i < a; i++) {
//         if (i * i == a) {
//             kt = true;
//             break;
//         }
//     }
//     return kt;
// }
// if (soChinhPhuong(soNhapVao)) {
//     console.log(soNhapVao + " là só chính phương ");
// } else {
//     console.log(soNhapVao + " không phải là số chính phương ");
// }
// // yeeu caauf soos nhaapj đúng
// switch (soNhapVao > 0) {
//     case soNhapVao < 10:
//         console.log("số bạn nhập nhỏ hơn 10 ");
//         break;
//     case soNhapVao < 20:
//         console.log("số bạn nhập nhỏ hơn 20");
//         break;
//     case soNhapVao < 30:
//         console.log("số bạn nhập nhỏ hơn 30");
//         break;
//     case soNhapVao < 40:
//         console.log("số bạn nhập nhỏ hơn 40");
//         break;
//     case 41 < soNhapVao < 50:
//         console.log("số bạn nhập nhỏ hơn 50");
//         break;
//     case soNhapVao < 60:
//         console.log("số bạn nhập nhỏ hơn 60");
//         break;
//     case soNhapVao < 70:
//         console.log("số bạn nhập nhỏ hơn 70");
//         break;
//     case soNhapVao < 80:
//         console.log("số bạn nhập nhỏ hơn 80");
//         break;
//     case soNhapVao < 90:
//         console.log("số bạn nhập nhỏ hơn 90");
//         break;
//     default:
//         console.log("số bạn nhập nhỏ hơn 100");

// }
// // bài tập về string

// const baiTap = '      javascript là ngôn ngữ kịch bản không phải ngôn ngữ hướng đối tượng         ';
// baiTap.trim();
// baiTap.toUpperCase();
// if (baiTap.length > 50) {
//     alert('xâu quá dài ');
// }
// if (baiTap.indexOf('phải')) {
//     alert(baiTap.indexOf('phải'))
// }
// bài tập về mảng
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let mangBeHon5 = [];
// let mangLonHon5 = [];
// let mangSqrt = [];
// let mangMoi = [];
// let arr1Length = arr1.length;
// for (let item = 0; item < arr1Length; item++) {
//     if (arr1[item] > 5) {
//         mangBeHon5.push(arr1[item]);
//     } else if (arr1[item] < 5) {
//         mangLonHon5.push(arr1[item]);
//     }
//     mangSqrt.push(arr1[item] * 2);
// }
// console.log(mangBeHon5);
// console.log(mangLonHon5);
// console.log(mangSqrt);
// mangMoi = arr1.concat(mangSqrt);
// console.log(mangMoi);
// bài tập js
console.log("-------------------- đây là bài tập 1 ---------------------");
let firstName = [
    "Quang",
    "Nam",
    "Nhật",
    "Minh",
    "Ngọc",
    "Lan",
    "Bình",
    "Sơn",
    "Hương",
    "Vinh",
    "Phương",
    "Xuân",
    "Dương",
    "Oanh",
    "Cúc",
    "Thu",
    "Đạt",
    "Trường",
    "Tín",
];
let lastName = [
    "Trần",
    "Nguyễn",
    "Mai",
    "Tạ",
    "Nhữ",
    "Đặng",
    "Thái",
    "Phạm",
    "Đỗ",
    "Vũ",
    "Cao",
    "Đinh",
    "Hoàng",
];
let lop = ["10A", "10B", "10C"];
let object = [];

function arr() {
    for (let i = 1; i < 31; i++) {
        object.push({
            id: i,
            firstName: firstName[Math.floor(Math.random() * firstName.length)],
            lastName: lastName[Math.floor(Math.random() * lastName.length)],
            class: lop[Math.floor(Math.random() * lop.length)],
            point: Math.floor(Math.random() * 11),
        });
    }
    console.log(object);
}
arr();
console.log("-------------------- đây là bài tập 2 lớn hơn 7 ---------------------");
let AdiemLonHon7 = object.filter(function(item) {
    if (item.point > 7) {
        if (item.class === "10A") {
            return item;
        }
    }
});
let BdiemLonHon7 = object.filter(function(item) {
    if (item.point > 7) {
        if (item.class === "10B") {
            return item;
        }
    }
});
let CdiemLonHon7 = object.filter(function(item) {
    if (item.point > 7) {
        if (item.class === "10C") {
            return item;
        }
    }
});
console.log(AdiemLonHon7);
console.log(BdiemLonHon7);
console.log(CdiemLonHon7);
let lonHon7 = {
    class10A: [],
    class10B: [],
    class10C: [],
};

for (let i = 0; i < AdiemLonHon7.length; i++) {
    lonHon7.class10A.push({
        fullName: AdiemLonHon7[i].lastName + " " + AdiemLonHon7[i].firstName,
        point: AdiemLonHon7[i].point,
    });
}
for (let i = 0; i < BdiemLonHon7.length; i++) {
    lonHon7.class10B.push({
        fullName: BdiemLonHon7[i].lastName + " " + BdiemLonHon7[i].firstName,
        point: BdiemLonHon7[i].point,
    });
}
for (let i = 0; i < CdiemLonHon7.length; i++) {
    lonHon7.class10C.push({
        fullName: CdiemLonHon7[i].lastName + " " + CdiemLonHon7[i].firstName,
        point: CdiemLonHon7[i].point,
    });
}
console.log(lonHon7);
console.log("-------------------- đây là bài tập nhỏ hơn 5 ---------------------");
let AdiemNhoHon5 = object.filter(function(item) {
    if (item.point < 5) {
        if (item.class === "10A") {
            return item;
        }
    }
});
let BdiemNhoHon5 = object.filter(function(item) {
    if (item.point < 5) {
        if (item.class === "10B") {
            return item;
        }
    }
});
let CdiemNhoHon5 = object.filter(function(item) {
    if (item.point < 5) {
        if (item.class === "10C") {
            return item;
        }
    }
});
console.log(AdiemNhoHon5);
console.log(BdiemNhoHon5);
console.log(CdiemNhoHon5);
let nhoHon5 = {
    class10A: [],
    class10B: [],
    class10C: [],
};

for (let i = 0; i < AdiemNhoHon5.length; i++) {
    nhoHon5.class10A.push({
        fullName: AdiemNhoHon5[i].lastName + " " + AdiemNhoHon5[i].firstName,
        point: AdiemNhoHon5[i].point,
    });
}
for (let i = 0; i < BdiemNhoHon5.length; i++) {
    nhoHon5.class10B.push({
        fullName: BdiemNhoHon5[i].lastName + " " + BdiemNhoHon5[i].firstName,
        point: BdiemNhoHon5[i].point,
    });
}
for (let i = 0; i < CdiemNhoHon5.length; i++) {
    nhoHon5.class10C.push({
        fullName: CdiemNhoHon5[i].lastName + " " + CdiemNhoHon5[i].firstName,
        point: CdiemNhoHon5[i].point,
    });
}
console.log(nhoHon5);
console.log("-------------------- đây là bài tập 5---------------------");

tong = object.reduce(function(acc, item) {
    if (item.point > 7) {
        acc++;
    }
    return acc;
}, 0);

console.log(tong);