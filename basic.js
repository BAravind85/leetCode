let a=[3,4,6,3]
let b=[16,36,9,9]

let obja={}
let objb={}
for(let i=0;i<a.length;i++){
  obja[a[i]]+=1;
}
for(let i=0;i<b.length;i++){
  objb[b[i]]+=1;
}
for(key in obja){
  obja[key * key ] !=objb[key];
  
  console.log('false')
}
console.log('true')


