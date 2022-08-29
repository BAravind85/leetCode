let arr=[1,3,-1,-3,5,3,6,7] //3,3,5,5,7 // n-k+1=> 7-3+1=> 8-4 = 4;
let n=arr.length
let k=3;
let result=[]
for(let i=0;i<n-k+1;i++){
    let max=arr[i]
    //console.log(max)
    for(let j=1;j<k;j++){
        // console.log(max,'<',arr[i+j])
        if(max<arr[i+j]){
            max=arr[i+j];
            
        } 
    }
    result.push(max)
}
console.log(result)