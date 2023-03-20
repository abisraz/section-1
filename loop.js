for(let i=0; i>101; i++){

console.log(i);
}

for(let i=1; i<=100; i++){

if(i%7==0||i%13==0){
    console.log(i);
 }
}

let[a,b]=[0,1];

for(let i=0;i<10;i++)
{
let c = a+b;
console.log(c);
[a, b]=[b, c];
}
//  a=5
// if(a>n)
// for(let i=0; i<100; i++)
// {
// f=f*a;
// console.log(a);
// }

let mynum=7;
let prime= true;

for(let i=2; i<=mynum/2; i++){

if(mynum%i==0){
    prime=false;
    console.log('not prime');
    break;
}

}
if(prime)console.log('prime');


let n1=5646;
let reverse=0;
while(n1>0){
{
  let  r =n1% 10;
  reverse=reverse*10+r;
  n1=parseInt(n1/10);
}
  console.log(n1);
}

