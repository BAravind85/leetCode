var smallestSubsequence = function(s) {
    const n=s.length, stack=[],map={},visited={};
    for(let i=0;i<n;i++){
        map[s[i]]=i
    }
    for(let i=0;i<n;i++){
        const char=s[i]
        if(visited[char]) continue;
        while(stack.length && stack[stack.length-1]>char && map[stack[stack.length-1]]>i) {
            visited[stack[stack.length-1]] = 0;
            stack.pop()
        }
        visited[char]=1;
        
        stack.push(char);
     }
    return stack.join('');

};
let s="cbacdcbc"
console.log(smallestSubsequence(s))