a = [38,78,2,6,22];
let temp,j;

for(let i = 1;i<a.length;i++)
{
    temp = a[i];
    j = i;
    while( j > 0 && a[j-1] > temp)
    {
        a[j] = a[j + 1];
        j--;
    }

    a[j] = temp;
}

for(let i = 0;i<a.length;i++)
{
    console.log(a[i]); 
}   