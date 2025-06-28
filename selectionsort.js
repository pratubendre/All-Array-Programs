a = [38,78,2,6,22];
let min;
let temp;


for(let i = 0;i<a.length;i++)
{
    min = i;
    for(let j = i+1;j<a.length;j++)
    {
        if(a[j] < a[min])
        {
            min = j;
        }
        
    }
        temp = a[i];
        a[i] = a[min];
        a[min] = temp;
    
}

for(let i = 0;i<a.length;i++)
{
    console.log(a[i]);
    
}