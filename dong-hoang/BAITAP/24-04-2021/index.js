// Cho mảng firstName = ['Quang', 'Nam', 'Nhật', 'Minh', 'Ngọc', 'Lan', 'Bình', 'Sơn', 'Hương', 'Vinh', 'Phương', 'Xuân', 'Dương', 'Oanh', 'Cúc', 'Thu', 'Đạt', 'Trường', 'Tín']
// cho mảng lastName = ['Trần', 'Nguyễn', 'Mai', 'Tạ', 'Nhữ', 'Đặng', 'Thái', 'Phạm', 'Đỗ', 'Vũ', 'Cao', 'Đinh', 'Hoàng']
// dấu ... là các giá trị mà các bạn phải viết hàm random để tạo ra nó
// 1. Viết 1 fumction tạo ra một mảng data chứa 30 object bao gồm các key value như sau:
// 	[{
// 		id: 1,
// 		firstName: 'Quang',
// 		lastName: 'Nguyen',
// 		class: '10A',
// 		point: 6
// 	}, ...]

// 2. Từ mảng C1 hãy tạo ra 1 object các bạn có điểm lớn hơn 7 theo từng lớp
// 	{
// 		class10A: [{fullName: firstName+lastName, ponit: 8}, ...],
// 		class10B: [{fullName: firstName+lastName, ponit: 8}, ...],
// 		...
// 	}
// 3. Từ mảng C1 hãy tạo ra 1 object các bạn có điểm nhỏ hơn 5 theo từng lớp
// 	{
// 		class10A: [{fullName: firstName+lastName, ponit: 4}, ...],
// 		class10B: [{fullName: firstName+lastName, ponit: 3}, ...],
// 		...
// 	}
// 4. Từ mảng C1 hãy tạo ra 1 object các bạn có điểm nhỏ hơn 5 theo từng lớp
// 	{
// 		class10A: [{fullName: firstName+lastName, ponit: 4}, ...],
// 		class10B: [{fullName: firstName+lastName, ponit: 3}, ...],
// 		...
// 	}
// 5. Tính tổng số các bạn có điểm 7 của tất cấc lớp

// --------------------------------
// Bài 1
const firstName = ['Quang', 'Nam', 'Nhật', 'Minh', 'Ngọc', 'Lan', 'Bình', 'Sơn', 'Hương', 'Vinh', 'Phương', 'Xuân', 'Dương', 'Oanh', 'Cúc', 'Thu', 'Đạt', 'Trường', 'Tín'];
const lastName = ['Trần', 'Nguyễn', 'Mai', 'Tạ', 'Nhữ', 'Đặng', 'Thái', 'Phạm', 'Đỗ', 'Vũ', 'Cao', 'Đinh', 'Hoàng'];
const myClasses = ['10A','10B','10C'];

const randomCreate = (a) => (Math.floor(Math.random()*a));
var defaultObj = {
    id: 0,
    firstName: '',
    lastName: '',
    class: '',
    point: 0,
};
const x = firstName.length;
const y = lastName.length;
const z = myClasses.length;

var initialArr = [defaultObj];
initialArr = initialArr.reduce((a,i) => a.concat(Array(30).fill(i)),[])
var myArr = [];
initialArr.reduce(function(acc,obj,index) {
    let myObj = {
        id: 0,
        firstName: '',
        lastName: '',
        class: '',
        point: 0,
    };
    myObj.id = index;
    myObj.firstName = firstName[randomCreate(x)];
    myObj.lastName = lastName[randomCreate(y)];
    myObj.class = myClasses[randomCreate(z)];
    myObj.point = randomCreate(10);
    myArr.push(myObj);
    return 
},[])
console.log("Mảng được tạo:", myArr);

//---------------------
// Bài tập 2
function groupBy1(objectArray, property) {
    return myArr.reduce(function (acc, obj) {
      let key = obj.class;
      if (!acc[key]) {
        acc[key] = []
      }
      let newObj = {};
      newObj.fullName = obj.lastName + ' ' + obj.firstName;
      newObj.point = obj.point;
      if (newObj.point > 7) {
      acc[key].push(newObj) }
      return acc
    }, {})
  }
  
  let groupedClass1 = groupBy1(myArr, 'class');

  console.log("Các bạn có điểm lớn hơn 7 theo từng lớp:" ,groupedClass1)

//-----------------------
// Bài tập 3
function groupBy2(objectArray, property) {
    return myArr.reduce(function (acc, obj) {
      let key = obj.class;
      if (!acc[key]) {
        acc[key] = []
      }
      let newObj = {};
      newObj.fullName = obj.lastName + ' ' + obj.firstName;
      newObj.point = obj.point;
      if (obj.point > 5) {
      acc[key].push(newObj) }
      return acc
    }, {})
  }
  
  let groupedClass2 = groupBy2(myArr, 'class');
  console.log("Các bạn có điểm nhỏ hơn 5 theo từng lớp:" ,groupedClass2)

//-----------------------
// Bài tập 5
let sum = 0;
function groupBy3(objectArray, property) {
    return myArr.reduce(function (acc, obj) {
      let key = obj.class;
      if (!acc[key]) {
        acc[key] = []
      }
      if (obj.point == 7) {
      acc[key].push(obj) 
    sum = sum+1;}
      return acc;
    }, {})
  }
  
  let total = groupBy3(myArr, 'class');
  console.log("Tổng các bạn có điểm 7:",sum)


