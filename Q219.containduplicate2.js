let nums=[1,2,3,1,2,3];
let k=3;

function dupicate(nums,k){
  const map=new Map();
    for(let i=0;i<nums.length;i++){
      if(i-map.get(nums[i])<=k) return true;
      map.set(nums[i],i);
          console.log(map)

    }
    return false;
}
console.log(dupicate(nums,k))