//find maximun element in array

let a =[30,45,2,56,22];
let max = min = a[0];

for(let i = 1;i<a.length;i++)
{
    if(a[i] > max)
    {
        max = a[i];
    }
    
    if(a[i] < min)
    {
        min = a[i];
    }
}

console.log("Maximum in array :: "+ max);
console.log("Minimum in array :: "+ min);
