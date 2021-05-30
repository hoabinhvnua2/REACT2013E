//bài 1:
//bạn có một ký tự a chuỗi S. xóa đi chữ thứ k của S C[K]. Sau khi xúa chữ a, giá trị của những chữ còn lại không tay đổi
//ví dụ S="ab" và C=[1,3] sau khi xóa chữ a, xóa chữ b vẫn sẽ bằng 3
// muốn xóa vài chữ từ S để được một chuỗi không có hai chữ liên tiếp lặp lại. tổng giá trị nhỏ nhất sau khi xóa là bao nhiêu
function mincost(s, cost){
    count = 0;
    mincost = 0;
    i = 0;
    while(i< s.length -1 ){
        if(s[i] == s[i+1]){
            if(cost[i]<cost[i+1]){
                mincost += cost[i];
            }else{
                mincost += cost[i+1];
                cost[i + 1] = cost[i];
            }
        }
        i++;
    }
    return mincost;
}
let s = ['a','b','c','c','d'];
let cost = [1,2,3,4,5];
console.log(mincost(s, cost));
//bài 2: viết một hàm đưa ra một số tự nhiên N, trả về số lớn nhất có thể khi chèn số năm vào số tự nhiên N đưa ra.
// cho rằng số N = [-8000;8000];
function max(n){

    n = n.toString();
    maxn = Math.max(n);
    min = Math.min(n);
    s = [];
    min = 0;
    k = 0;
    for(i = 0;i < n.length; i++){
        s.push(n[i]);
    }
    for(i = 0;i < n.length; i++){
        if(s[i] == min || s[0] == '-' && s[i] == maxn){
            k = i;
            break;
        }
    }
    if(s[0] != '-'){
        s.splice(k, 0, '5');
    }else{
        s.splice(k+1,0,'5');
    }
    n = s.join('');

    console.log(parseFloat(n));

}
n = -6;
max(n);