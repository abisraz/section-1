
let nums=[11,33,64,31,88,52];
for(let i=0;i<nums.length; i++);{
if(nums[i]%2==0){
    console.log(nums[i]);
}
}
console.log('-----------------\n');
//for each loop ; for-of loop
let newArr=[];
for(let n of nums){
   if(n%2==0){
       // console.log(n);
       newArr.push(n)
   }
}