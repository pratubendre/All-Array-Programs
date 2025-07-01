let a = [8,2,6,3,1];

for(let i = 0;i<a.length;i++)
{
    temp = a[i];
    j = i - 1;
    while(j>=0 && a[j] >temp)
    {
        a[j+1] = a[j];
        j--;
    }
    a[j + 1] = temp;
}

for(let i = 0;i<a.length;i++)
{
    console.log(a[i]);
    
}