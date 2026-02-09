function isPositive(num)
{
    return num>0;
}

console.log(isPositive(3));
console.log(isPositive(-1));

function hello()
{
    console.log("Hello");
}

function add(a,b)
{
    return a+b;
}

console.log(add(5,6));
console.log(add)
console.log(typeof add)

function greet(name="User")
{
    console.log("Hello " +name);
}

greet("Alice");
greet();

//recursion
function factorial(n)
{
    if(n==0)
    {
        return 1;
    }
    return n*factorial(n-1);
}

console.log(factorial(5));

let isEven=function(num)
{
    return num%2==0;
}

console.log(isEven(4));
console.log(isEven(5));

let arr=[1,2,3,4,5];
let findsum=function(arr)
{
    let sum=0;
    for(let val of arr)
    {
        sum+=val;
    }
    return sum;
}

console.log(findsum(arr));

let volume= (l,b,h)=> l*b*h
console.log(volume(2,3,4));