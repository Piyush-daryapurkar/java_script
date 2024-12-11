//for loop

for(let i=1;i<=10;i++)
{
    document.write("piyush <br>");
    
}

//nester for loop

for(let i=1;i<=4;i++)
    {
        for(let j=1;j<=i;j++)
        {
            document.write("*")

        }
        document.write("<br>")
        
    }

    //  whle loop

let i=1;
while(i<=10){
    document.write("piyush <br>")
    i++;
}

//do while
let j=1;
do{
    document.write(j," <br>")
    j++;
}
while(j<=10)

    //for of loop (using for string and array)

let str ="piyush";

for(let i of str){
    document.write(" i= ", i,"<br>")
}

//for in loop (used in objects and array)

let stu ={
    name : "piyush",
    age : 24,
    cgpa : 9.8,
    isPass : true,
};

for(let key in stu){
    console.log("kay",key, "value",stu[key]);
}

//qustion made a game
let gamenum=7;
let usernum=prompt("guess the number ");

while( usernum != gamenum)
{
    usernum =prompt("you guess wrong number ,guess again");

}
document.write("you win");
