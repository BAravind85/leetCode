let arr=["flower","flow","flight"]
function longestCommon(arr) {
    if(arr.length ===0){ return ""};
    
let a=""

for (let i=0; i<arr.length; i++){
    let char=arr[0][i]
    for(let j=0;j<arr.length; j++){
        if(arr[j][i]==char){  
            continue;    
        }else{
        return a;
        }
    }
        a+=char;
}
    return a;
}
    console.log(longestCommon(arr))



  
