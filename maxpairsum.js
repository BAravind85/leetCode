let num=[1,2,3,89,4,10];
function maxPair(num){
let num2=num.sort(function(a,b){return a-b})
let arr=num2,highest=0;

 
for(let i=0;i<arr.length;i++){
   let a=0;
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]>0){
     a=arr[i]+arr[j]
    }    
  }
  if(a>highest){
    highest=a    
  }
}
      return highest
}
console.log(maxPair(num))