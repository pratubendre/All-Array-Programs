let a = [6,7,9,29,2];
let temp;

for(let i = 0;i<a.length;i++)
{
   for(let j = i + 1;j<a.length;j++)
   {
        if(a[i] < a[j])
        {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
   }
   if(i==1)
   {
        break;
   }
}
console.log("Second Largest Number :: "+a[1]);


