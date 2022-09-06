function solution(a) {
    //Write your solution here
      let map={};
      for(let i of a){
          map[i]=map[i]+1 || 1;
      }
      for(let j in map){ 
          if(map[j]>Math.floor(a.length/2))
              return j;
          }
      return 0;
  }
  solution([1,2,1,2,2])
  