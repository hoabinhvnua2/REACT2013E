

const numberOne = document.getElementById('number1');
const numberTwo = document.getElementById('number2');
const result = document.getElementById('result');
const arrButton = document.getElementsByTagName('button')
console.log(arrButton)
// bài tập: làm nốt phần click vào button nào thì button đó được gán thêm style or class
function tinhToan(phepTinh) {
    switch (phepTinh) {
        case "+":
            if (numberOne.value && numberTwo.value) {
                result.textContent = parseInt(numberOne.value) + parseInt(numberTwo.value);
            }
            break;
        case "-":
            if (numberOne.value && numberTwo.value) {
                result.textContent = numberOne.value - numberTwo.value;
            }
            break;
        case "*":
            if (numberOne.value && numberTwo.value) {
                result.textContent =numberOne.value * numberTwo.value;
            }
            break;
        case "/":
            if (numberOne.value && numberTwo.value && numberTwo.value !== '0') {
                result.textContent = numberOne.value / numberTwo.value;
            }
            break;
    
        default:
            break;
    }
}

// bài tập hiển thị các dữ từ mảng ra UI
const arrData = [
    {
        productName: 'Iphone 1',
        price: 1000,
        sl: 5
    },
    {
        productName: 'Iphone 5',
        price: 5000,
        sl: 6
    },
    {
        productName: 'Iphone 12',
        price: 12000,
        sl: 10
    },
    {
        productName: 'Iphone 10',
        price: 10000,
        sl: 12
    },
    {
        productName: 'Iphone 8',
        price: 8000,
        sl: 8
    },
];


const rowData = document.getElementById('rowData');

function showData(data) {
    let html = '';
    for (let i = 0; i < data.length; i++) {
        const row = `<tr>
        <td>${i + 1 }</td>
        <td>${data[i].productName}</td>
        <td>${data[i].price}</td>
        <td>${data[i].sl}</td>
      </tr>`
        html += row
    }
    rowData.innerHTML = html
}

showData(arrData);