let arr = [1,4,2,3,5,6,7,8,1,8];
let k = 3;

function wind(n, k){
    let i = j = max = sum =0;
    while(j<n.length){
        sum = sum + n[j];
        // console.log(arr[i])
        if(j-i+1< k) j++;
        else if(j-i+1 == k){
            max = Math.max(max, sum);
            
            i++;
            j++;
        }
    }
    return max;
}

console.log(wind(arr, k));