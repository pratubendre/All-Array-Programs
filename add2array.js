// adding 2 array

let a = [2,5,5];
let b = [3,5,3];
let c = [];

for(let i = 0;i<a.length;i++)
{
    c[i] = a[i] + b[i];
}

for(let i= 0;i<c.length;i++)
{
    console.log(c[i]);
}

// concat the 2 array

for(let i = 0;i<a.length;i++)
{
    c[i] = String(a[i]) + String(b[i]);
    console.log(c[i]);
}

// add 2 dim matrix
let a1 = [[2,3,6],[5,7,8],[9,0,6]];
let b1 = [[2,3,5],[4,5,5],[7,8,9]];
let c1 = [];

for(let i = 0; i<a1.length; i++)
{
    for(let j = 0; j<a1[i].length;j++)
    {
        console.log(a1[i][j]);
    }
    console.log("\n");
    
}

for(let i = 0;i<a1.length;i++)
{
    c1[i] = [];
    for(let j = 0;j<a1[i].length;j++)
    {
        c1[i][j] = a1[i][j] + b1[i][j];
    }
    console.log("\n");
    
}

for(let i = 0;i<c1.length;i++)
{
    for(let j = 0;j<c1[i].length;j++)
    {
        console.log(c1[i][j]);
        
    }
}