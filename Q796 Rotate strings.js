/* Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false*/
let a = "abcde";
let b = "cdeab";
function rotate(a,b){
    let curr="";

    for(let i=0;i<a.length;i++){
        curr +=a[i];
        if(a.slice(i+1)+curr===b){
          return true;
        }
     } return false;
}
console.log(rotate(a,b))