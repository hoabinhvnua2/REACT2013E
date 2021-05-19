//Constructor Function Form 
function Validation(obj) {
    let formElement = document.querySelector(obj.form);
    let selectorHandlers = {};
    if (formElement) {
        obj.handlers.forEach(handler => {
            if(Array.isArray(selectorHandlers[handler.selector])) {
                selectorHandlers[handler.selector].push(handler.check);
            } else {
                selectorHandlers[handler.selector] = [handler.check];
            }
            let inputElement = formElement.querySelector(handler.selector);
            let messageElement = inputElement.parentElement.querySelector(obj.formMessage);
            let handlersMethod = selectorHandlers[handler.selector];
            if (inputElement) {
                //Xử lí Blur
                onBlur(inputElement,messageElement,handler,handlersMethod);
                onInput(inputElement,messageElement);
            }
        }); 
    }
}

//Xử lí Blur
function onBlur(inputElement,messageElement,handler,handlersMethod) {
    inputElement.onblur = () => {
        let errorMessage;
        for (i = 0 ; i < handlersMethod.length ; ++i) {
            errorMessage = handlersMethod[i](inputElement.value);
            if (errorMessage) {
                messageElement.innerText = errorMessage;
                inputElement.style.border="red solid 2px";
                messageElement.style.color="red";
                break;
            }
        }

        
    }
     
}

function onInput(inputElement,messageElement) {
    inputElement.oninput = () => {
        messageElement.innerText ="";
        inputElement.style.border="none";
        messageElement.style.color="none";
    }
}

Validation.isRequired = (selector,errorMessage) => {
    return {
        selector : selector,
        check : (inputValue) => {
            return inputValue ? undefined : errorMessage;
           
        }
    }
}

Validation.isEmail = (selector,errorMessage) => {
    return {
        selector : selector,
        check : (inputValue) => {
            const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return inputValue.match(regex) ? undefined : errorMessage;      
        }
    }
}

Validation.isPassword = (selector,number,errorMessage) => {
    return {
        selector : selector,
        check : (inputValue) => {
            return inputValue.length >= number ? undefined : errorMessage;
        }
    }
}

Validation.isPasswordRight =(selector,valuePassword,number,errorMessage) => {
    return {
        selector : selector,
        check : () => {
            return (valuePassword > number) ? undefined : errorMessage;
        }
    }
}

Validation.isConfirmPassword = (selector,valuePassword,errorMessage) => {
    return {
        selector : selector,
        check : (inputValue) => {
            return inputValue === valuePassword ? undefined : errorMessage; 
        }
    }
}