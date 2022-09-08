let arr=[-20, -12 ,42 ,-10, 25]
let max=-Infinity
let sum=0;

for(let i=0; i<arr.length; i++) {
    sum +=arr[i];
    max=Math.max(max,sum);
      sum=Math.max(sum,0);
    //  console.log(max,sum)
}
console.log(sum);