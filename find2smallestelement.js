a = [2,9,4,1,3];
let temp;

for(let i = 0;i<a.length;i++)
{
    for(let j = i + 1;j<a.length;j++)
    {
        if(a[i] > a[j])
        {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }

    if(i == 1)
    {
        break;
    }
}

for(let i = 0;i<a.length;i++)
{
    console.log(a[i]);
    
}
console.log("Second Smallest Element :: " + a[1]);
