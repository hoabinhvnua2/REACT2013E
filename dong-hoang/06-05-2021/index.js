//BT1
function solution(S,C) {
    let sum = 0;
    Sarr = S.split('');
    for (let i=0;i<Sarr.length-1;i++) {
        if (Sarr[i] == Sarr[i+1]) {
            if (C[i] < C[i+1]) {
                sum = sum + C[i]
                Sarr.splice(i,1)
            } else {
                sum = sum + C[i+1];
                Sarr.splice(i+1,1)}
    } 
}
console.log(Sarr.join(''))
return sum;
}
console.log(solution('ababab',[1,2,1,2,1,2]));

//BT2
function S(N) {
    let res = 0;
    if (N==0) return 50;
    if (N>0) {
        sArr = N.toString().split('');
        sArr.forEach(e => {
            parseInt(e)
        });
        for(let i =0;i<sArr.length;i++) {
            if (sArr[i] < 5) {
                sArr.splice(i,0,'5');
                res = parseInt(sArr.join(''))
                break;
            } 
        }
        if (res == 0) {
            sArr.push('5');
            res = parseInt(sArr.join(''))
        }
    } else {
        sArr = (N*(-1)).toString().split('');
        sArr.forEach(e => {
            parseInt(e)
        });
        for(let i=0;i<sArr.length;i++) {
            if (sArr[i] > 5) {
                sArr.splice(i,0,'5');
                res = (-1)*parseInt(sArr.join(''));
                i++;
                break;
            } 
    }
    if (res ==0) {
        sArr.splice(0,0,'5');
                res = (-1)*parseInt(sArr.join(''))
                i++;
            }
    }
    return res;
}
console.log(S(268));
console.log(S(670));
console.log(S(0));
console.log(S(-999));