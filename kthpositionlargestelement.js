let a = [7,8,1,4,2];
let temp;
let k = 4;
for(let i = 0;i<a.length;i++)
{
    for(let j = 0;j<a.length;j++)
    {
        if(a[i] < a[j])
        {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}

for(let i = 0;i<a.length;i++)
    {
        console.log(a[i]);
        
    }
