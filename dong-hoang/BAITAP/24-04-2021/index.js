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
const firstName = ['Quang', 'Nam', 'Nhật', 'Minh', 'Ngọc', 'Lan', 'Bình', 'Sơn', 'Hương', 'Vinh', 'Phương', 'Xuân', 'Dương', 'Oanh', 'Cúc', 'Thu', 'Đạt', 'Trường', 'Tín'];
const lastName = ['Trần', 'Nguyễn', 'Mai', 'Tạ', 'Nhữ', 'Đặng', 'Thái', 'Phạm', 'Đỗ', 'Vũ', 'Cao', 'Đinh', 'Hoàng'];
const classes = ['10A','10B','10C'];
const randomCreate = () => (Math.floor(Math.random()*10) + 1);
var myObj = {
    id: 0,
    firstName: '',
    lastName: '',
    class: '',
    point: 0,
};
var myArr = new Array(30);
let j = Object.keys(myObj).length();
myArr.reduce

