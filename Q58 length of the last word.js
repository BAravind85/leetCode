function last(s){
    let words=s.trim().split(" ")
    
    return words.length ? words[words.length-1]:0;
}
console.log(last("hello world"))