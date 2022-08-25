let S="hello world";
let map={};
let m=""
for(let i=0;i<S.length;i++){
    char=S.charAt(i);
    if(char!=" "){
    if(map[char]){
        map[char]+=1            
    }else{
        map[char]=1;
    }}
   }
console.log(map)