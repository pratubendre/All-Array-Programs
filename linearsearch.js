let a = [34,1,78,4];
let find = 34;
let flag;

for(let i = 0;i<a.length;i++)
{
    if(find == a[i])
    {
        flag = 1;
        
    }
   
}

if(flag == 1)
{
    console.log("Founded !");
    
}
else
{
    console.log("Not Founded !");
    
}