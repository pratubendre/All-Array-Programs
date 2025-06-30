let a = [1,2,3,4,5];
let start = 0;
let end = a.length - 1;
let find = 2;
let found = false;


while(start<=end)
{
   let mid = Math.floor((start + end)/2);

   if(a[mid] === find)
   {
        console.log("Number found at : "+mid); 
        found = true;
        break;
   }
   else if(a[mid] > find)
   {
        end = mid - 1;
   }
  else
  {
        start = mid + 1;
  }
  
}

if (!found) {
    console.log("Not Found!");
}