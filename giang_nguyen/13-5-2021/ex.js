function sum(number1){
    return number1 + 2;
}
function showResult(number2){
    return number2 + 5;
}
const result = new Promise((res, rej) =>{
    const t = sum(3);
    res(t);
});
result.then(x => showResult(x))
       .then(y => console.log('r',y))
       .catch(err => console.log(err))
