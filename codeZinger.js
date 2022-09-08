let a=-100
let b =234567;
function swap(a,b) {
a=a+b;//a==>14
b=a-b;//b==>14-10 =>4
a=a-b;//a==>14-4 =>10
  return [a,b].join(" ")
}
console.log(swap(a,b));