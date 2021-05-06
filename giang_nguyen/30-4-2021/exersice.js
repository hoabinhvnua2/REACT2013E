let firstName = ['Quang', 'Nam', 'Nhật', 'Minh', 'Ngọc', 'Lan', 'Bình', 'Sơn', 'Hương', 'Vinh', 'Phương', 'Xuân', 'Dương', 'Oanh', 'Cúc', 'Thu', 'Đạt', 'Trường', 'Tín'];
let lastName = ['Trần', 'Nguyễn', 'Mai', 'Tạ', 'Nhữ', 'Đặng', 'Thái', 'Phạm', 'Đỗ', 'Vũ', 'Cao', 'Đinh', 'Hoàng'];
let lop = ['10A', '10B', '10C'];
let obj = [];
//bài 1
function arr(){
    for(let i = 1; i < 31; i++){
        obj.push(
            {
                id:i,
                firstName:firstName[Math.floor(Math.random() * firstName.length)],
                lastName: lastName[Math.floor(Math.random() * lastName.length)],
                class: lop[Math.floor(Math.random() * lop.length)],
                point: Math.floor(Math.random() * 11),
            }
        )
    }
    console.log(obj);
}
arr();
//bài 2
let obj1 = [];
for (let i = 0; i < 30; i++) {
    if(obj[i].point > 7){
        obj1.push(obj[i]);
    }
}

let class10A = [];
let class10B = [];
let class10C = [];
for(let i = 0; i < obj1.length; i++){
    if(obj1[i].class == '10A'){
        class10A.push({
            fullName: obj1[i].firstName + obj1[i].lastName,
            point: obj1[i].point
        });
    }
    if(obj1[i].class == '10B'){
        class10B.push({
            fullName: obj1[i].firstName + obj1[i].lastName,
            point: obj1[i].point
        });
    }
    if(obj1[i].class == '10C'){
        class10C.push({
            fullName: obj1[i].firstName + obj1[i].lastName,
            point: obj1[i].point
        });
    }
}
let diemlonhon7 = [];
diemlonhon7.push(
    {
        class10A,
        class10B,
        class10C
    }
)
console.log(diemlonhon7);
//bài 3
obj1 = [];
for (let i = 0; i < 30; i++) {
    if(obj[i].point < 5){
        obj1.push(obj[i]);
    }
}

class10A = [];
class10B = [];
class10C = [];
for(let i = 0; i < obj1.length; i++){
    if(obj1[i].class == '10A'){
        class10A.push({
            fullName: obj1[i].firstName + obj1[i].lastName,
            point: obj1[i].point
        });
    }
    if(obj1[i].class == '10B'){
        class10B.push({
            fullName: obj1[i].firstName + obj1[i].lastName,
            point: obj1[i].point
        });
    }
    if(obj1[i].class == '10C'){
        class10C.push({
            fullName: obj1[i].firstName + obj1[i].lastName,
            point: obj1[i].point
        });
    }
}
diemnhohon5 = [];
diemnhohon5.push(
    {
        class10A,
        class10B,
        class10C
    }
)
console.log(diemnhohon5);
//bài 5
obj1 = [];
let sum = 0;
for (let i = 0; i < 30; i++) {
    if(obj[i].point == 7){
        sum++;
        obj1.push(obj[i]);
    }
}
console.log(obj1);
console.log('các bạn có điểm 5 là '+ sum+' người');