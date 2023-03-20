//wap to fillter all non-perfect square from an array

let arr=[4,6,9,16,20,25,36,40,82,75,81,64,65,49,50];
let res=arr.filter(  (n)=>{return (n!=(n**0.5)*(n**0.5))})
console.log(res);

//create a fun that takes an array and index as parameter and remove the single index and return the array

let fun=(arr,i)=>{return[arr.slice(0,i),...arr.slice(i+1)];}
let res1=fun(arr,3);
console.log(res1);

console.log('$3400');
console.log(parseInt('$3400'.slice(1)));


let prices=['$2344','$3444','$3400','$5600','$8700'];

let newprices=prices.map((p)=>{return parseInt(p.slice(1))})
console.log(newprices);

let nums=[2,3,4,6,7,9,16,36,35,44];
let perfects= nums.filter ((n)=>{return n**0.5 !==parseInt(n**0.5)});

console.log(perfects);

const eleRem= (arr,i)=>{
    arr.splice(i,1);
    return arr;
}
let res3 = eleRem(nums,3);
console.log(res3);



