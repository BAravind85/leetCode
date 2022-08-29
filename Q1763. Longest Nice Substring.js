function longestCom(s){
    let start=end=max=0;
    const set=new Set();
    while (start<s.length){

         console.log(start,'<',s.charAt(start))
        console.log(start,'<',s[start])

        if(!set.has(s.charAt(start))){
            set.add(s.charAt(start));
            start++
            max=Math.max(max,set.size);
        }else{
            set.delete(s.charAt(end));
            end++;
        }
        }
        return max;
}
let s="YazaAay"
console.log(longestCom(s))