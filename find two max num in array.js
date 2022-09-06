let arr=[12,4,67,2,34];
let max=0
let occur=0;
let maxPair=0;
for(let i=0;i<arr.length;i++){
    let sum=arr[i];
    for(let j=i+1;j<arr.length;j++){
        max= sum + arr[j];
    }
    if(max>occur){
        occur=max;
        maxPair=occur-arr[i]

    }
}
let secondMax=occur-maxPair;
console.log(secondMax,maxPair)



