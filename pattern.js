function pattern()
{
    for(let i = 0;i<=4;i++){
        let line = ""
        for(let j = 0;j<=4;j++)
        {
            line+= "* "
        }
        console.log(line);
        
    }
    console.log("\n");
    
    //output

    // * * * * *
    // * * * * *
    // * * * * *
    // * * * * *
    // * * * * *

}

function pattern1()
{
    for(let i = 0;i<=4;i++)
    {
        let star = "";
        for(j = 4;j>=i;j--)
        {
            star+= "* ";
        }
        console.log(star);
    }
}

function pattern2()
{
    for(let i = 0;i<=4;i++)
    {
        star = "";
        for(let j = 0;j<=i;j++)
        {
            star+="* ";
        }
        console.log(star);
       
    }
    
}

function pattern3(){
    for(let i = 0;i<=4;i++)
    {
        let star1=""
        for(let j = 0;j<=i;j++)
        {
            star1+="* "
        }
        console.log(star1);
    }

    for(let i = 0;i<=4;i++)
    {
        let star2=""
        for(let j = 3;j>=i;j--)
        {
            star2+="* "
        }
        console.log(star2);
    }
}

function pattern4()
{
    for(let i = 0;i<=4;i++)
    {
        let space=""
        for(let j = 3;j>=i;j--)
        {
            space+=" "
        }
        for(let k = 0;k<=i;k++)
        {
            space+="* "                                                     
        }
        console.log(space);
    }
}

pattern();
 console.log("\n");
pattern1();
 console.log("\n");
pattern2();
console.log("\n");
pattern3();
console.log("\n");
pattern4

