let s = "abcabcbb";
function test(s){
 let map={}
let result="";
for(let i=0;i<s.length;i++){
  if(map[s[i]]==undefined){
    map[s[i]]=0
  }
  map[s[i]]+=1;
  if(map[s[i]]==1){
    result += s[i];
  }
}
return true;
}
console.log(test(s));


