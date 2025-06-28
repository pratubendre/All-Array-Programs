a = [38,78,2,6,22];

for(let i = 0;i<a.length;i++)
{
    for(let j = i+1;j<a.length;j++)
    {
        if(a[i] > a[j])
        {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}

for(let i = 0;i<a.length;i++)
{
    console.log(a[i]);
    
}