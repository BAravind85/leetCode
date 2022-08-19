var twoSum = function(nums, target) {
    let hash={}
    for(let i=0;i<=nums.length;i++){
        let pot=target-nums[i];
        if(hash.hasOwnProperty(pot)){
            return [hash[pot],i]
        }
        hash[nums[i]]=i
    }
    
};
let nums=[2,7,11,15];
let target = 9;
console.log(twoSum(nums, target));