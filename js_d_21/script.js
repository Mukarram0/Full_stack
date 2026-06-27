// for each 
let arr=[1,2,3,4,9];
function print(el)
{
    console.log(el);
}
arr.forEach(print);

// map methods
let num=[1,2,3];
let db=num.map(function(el){
    return el*2;    
});

// filter

let even=arr.filter((num)=>{
    return (num%2==0)
});

// reduce method
let n=arr.reduce((res,el)=>{
return(res+el);
});

// finding maximum using reduce
let max=arr.reduce(function(m,el)
{
    if(el>m)
    {
        return el;
    }
    else
    {
        return m;
    }
});
console.log(max);

// multiple of 10 or not
let arr1=[10,20,30];
let mul=arr1.every((el)=> el%10==0);

// default parameters
function sum(a,b=2)
{
    return a+b;
}
//spread in js
let ar=[10,20,30];
console.log(...ar);
console.log(..."spread");
console.log("minimum = "+Math.min(...ar));
//spread with array literals

let char=[..."hello"];//['h','e','l','l','o']
let od=[1,3,5];
let eve=[2,4,6];
let s=[...od,...char,...eve];

//spread with objects literals

let data={
    username:"rahul01",
    pass:"0101"
};
let datacopy={...data,id:23};

//rest 
function sm(...args)
{
    return args.reduce((add,el)=> add+el);
}