let nums=[11,33,64,31,88,52];
// for(let i=0;i<nums.length; i++);{
// if(nums[i]%2==0){
//     console.log(nums[i]);
// }
// }
// console.log('-----------------\n');
// //for each loop ; for-of loop
// let newArr=[];
// for(let n of nums){
//    if(n%2==0){
//        // console.log(n);
//        newArr.push(n)
//    }
// }
//console.log(newArr);
//filtering in array

console.log(nums);

let res=nums.filter((n)=>{return n%2!=0});
console.log(res);

let res2=nums.map((a)=>{return a*2});
console.log(res2);

const prices=[ 1200, 350, 3259, 4544,3544];
let res3=nums.map((a)=>{return a-a/10});
console.log(res3);
 
let newArr=['$3400','$845','$20','$940','$3700'];
for(let n of nums){
    if( n!=0){
 // newArr.push(n)
  console.log(newArr);
}
//console.log(...price[4].slice(1,5));
}