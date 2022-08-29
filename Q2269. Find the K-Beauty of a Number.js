/* The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

It has a length of k.
It is a divisor of num.
Given integers num and k, return the k-beauty of num.

Note:

Leading zeros are allowed.
0 is not a divisor of any value.
A substring is a contiguous sequence of characters in a string.

 

Example 1:

Input: num = 240, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- "24" from "240": 24 is a divisor of 240.
- "40" from "240": 40 is a divisor of 240.
Therefore, the k-beauty is 2.
Example 2:

Input: num = 430043, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- "43" from "430043": 43 is a divisor of 430043.
- "30" from "430043": 30 is not a divisor of 430043.
- "00" from "430043": 0 is not a divisor of 430043.
- "04" from "430043": 4 is not a divisor of 430043.
- "43" from "430043": 43 is a divisor of 430043.
Therefore, the k-beauty is 2.*/

var divisorSubstrings = function(num, k) {
if(k==0 || num==0) return 0;
    let flag=0;
    let n=num
     let mod=Math.pow(10,k) //in ordre to get k number of digits 10^k=> 10^2=>100
    
    while(n>=mod/10){ //43>=100/10 (43) it will continuing of excution if 4>=100/10 execution will stop here 
        //console.log(n)
        if(num %(n%mod)==0){ // 430043%430043%100==0 
            flag++; // if condition is true count will increase one
        }n=parseInt(n/10)  // it will not convert into decimal numbet that is why we are using parseInt
        // console.log(n)
    }
    return flag // return flag increament
    
}
let num =430043, k = 2;
console.log(divisorSubstrings(num,k))