//if statments 

let age=18;
if(age>=18)
{
    console.log("tou can give vote")
}


//if else statments 
let a=16//age
if(a>=18)
    {
        console.log("tou can give vote")
    }
    
else{
    console.log("not eligible");
    
}

//nested if statments

let b=16//age
if(b>=18  && b<=30)
    {
        console.log("young")
    }
    else if(b>=1 && b<=17){
        console.log("child")

    }
    else{
    console.log("older");
    
    }

    //turnary oprator

    let q=78;
    q>=18 ? console.log("voters") : console.log("not");
    
    

//qus1

// let ab= prompt(parseInt("number"))
// if(ab%5==0)
// {
//     console.log(ab,"divide");
    
// }
// else{
//     console.log(ab,"not");
    
// }

let num = prompt(parseInt("enter num : "))
if(num>=90 && num<=100)
{
    console.log("A gread");
    
}
 else if(num>=70 && num<=89)
    {
        console.log("B gread");
        
    }
else if(num>=60 && num<=69)
       {
        console.log("C gread");
        
    }
else if(num>=50 && num<=59)
        {
        console.log("D gread");
                
        }

else{
    console.log("fail");
    
}