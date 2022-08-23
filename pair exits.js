let arr=[-5,-3,-2,1,2,5]
function sumOfclosest(arr){
 let result=[];
// let distance =3;
let left=0;
let right=arr.length-1;
while(left<right){
  if(arr[left]+arr[right]==0){
    result =[arr[left],arr[right]]
    return result;

   //result.push(result)
  }else if(arr[left]+arr[right]>0){
    right--;
  }else if(arr[left]+arr[right]<0){
    left++;
  }
}
}
 console.log(sumOfclosest(arr))