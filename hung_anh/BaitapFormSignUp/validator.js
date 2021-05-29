//Constructor Function Form 
function Validation(obj) {
    let formElement = document.querySelector(obj.form);
    //Tạo một mảng để nhận tất cả các phương thức kiểm tra
    //Có tác dụng có thể tách ra mà không bị ghi đè lên nhau
    let selectorHandlers = {};
    if (formElement) {
        //Duyệt qua các tác vụ xử lí
        obj.handlers.forEach(handler => {
            //Nếu giá trị nhận về không phải mảng (có một giá trị) thì push vào object selectorHandlers.
            //Nếu giá trị nhận về là mảng (có nhiều giá trị) thì nhận về một mảng.
            if(Array.isArray(selectorHandlers[handler.selector])) {
                selectorHandlers[handler.selector].push(handler.check);
            } else {
                selectorHandlers[handler.selector] = [handler.check];
            }
            //Lấy ra các element thẻ input và các element thẻ tương ứng với element input đó
            //Sử dụng parentElement để tìm thẻ cha 
            let inputElement = formElement.querySelector(handler.selector);
            let messageElement = inputElement.parentElement.querySelector(obj.formMessage);
            //Lấy ra các phương thức kiểm tra 
            let handlersMethod = selectorHandlers[handler.selector];
            if (inputElement) {
                //Xử lí khi ấn ra khỏi ô input
                onBlur(inputElement,messageElement,handlersMethod);
                //Xử lí khi bạn nhập vào ô input
                onInput(inputElement,messageElement);
            }
        }); 
    }
}

//Xử lí Blur ra khỏi input
function onBlur(inputElement,messageElement,handlersMethod) {
    inputElement.onblur = () => {
        let errorMessage;
        //Lọc qua tất các value trong obj handlersMethod để kiểm tra.
        for (i = 0 ; i < handlersMethod.length ; ++i) {
            errorMessage = handlersMethod[i](inputElement.value);
            if (errorMessage) {
                messageElement.innerText = errorMessage;
                inputElement.style.border="red solid 2px";
                messageElement.style.color="red";
                //Thoát khỏi vòng lặp.
                break;
            }
        }

        
    }
     
}
//Sự kiện khi bạn bắt dầu viết lại trong ô input.
function onInput(inputElement,messageElement) {
    inputElement.oninput = () => {
        messageElement.innerText ="";
        inputElement.style.border="none";
        messageElement.style.color="none";
    }
}
//Logic xử lí khi muốn ô input bắt buộc phải nhập.
Validation.isRequired = (selector,errorMessage) => {
    return {
        selector : selector,
        check : (inputValue) => {
            // Nếu có giá trị thì trả về undefined nếu không sẽ trả về chuỗi lỗi
            return inputValue ? undefined : errorMessage;
           
        }
    }
}
//Logic xử lí có phải là email hay không.
Validation.isEmail = (selector,errorMessage) => {
    return {
        selector : selector,
        check : (inputValue) => {
            //Kiểm tra email nếu là email trả về undefined còn không trả về chuỗi lỗi
            const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return inputValue.match(regex) ? undefined : errorMessage;      
        }
    }
}
//Logic xử lí có đủ kí tự mật khẩu chưa. 
Validation.isPassword = (selector,number,errorMessage) => {
    return {
        selector : selector,
        check : (inputValue) => {
            return inputValue.length >= number ? undefined : errorMessage;
        }
    }
}
//Logic xử lí khi bạn nhập phần confirm mà chưa hoàn thành phần mật khẩu
Validation.isPasswordRight =(selector,valuePassword,number,errorMessage) => {
    return {
        selector : selector,
        check : () => {
            console.log(valuePassword().length);
            console.log(number);
            return valuePassword().length >= number ? undefined : errorMessage;
        }
    }
}
//Logic xử lí so sánh xác nhận giá trị mật khẩu đã giống với giá trị mật khẩu chưa
Validation.isConfirmPassword = (selector,valuePassword,errorMessage) => {
    return {
        selector : selector,
        check : (inputValue) => {
            return inputValue === valuePassword() ? undefined : errorMessage; 
        }
    }
}

