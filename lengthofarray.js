let arr=[1,2,3,4,5]
let n=arr.length;
console.log(n)
function total(arr,n){
    if(n==0) return 0;
    console.log(arr[n-1])
    // return total(arr,n-1) + arr[n-1]
}
total(arr,n)

