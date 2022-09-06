var maxSubArray = function(nums) {
    let Max= -Infinity
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
        Max=Math.max(sum,Max);
        // console.log(sum,'<',Max)
        sum=Math.max(sum,0)
        // console.log(sum,'<',0)
    }
    return Max;
    
};
console.log(maxSubArray([-20,-12, 42, -10, 25]));