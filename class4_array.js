let marks = [10,40,60,70,87]
console.log(marks);

let hero = ['ironman','hanuman','thor']
console.log(hero);

// //if i want to change value

let mark = [10,40,60,70,87]
let m=mark[1]=48
console.log(mark)

let h = ['ironman','hanuman','thor','saktiman']
//print aaray using for loop
for(let i=0;i<h.length;i++)
{
    console.log(h[i]);
    
}

//print aaray using for of  loop

for(let hero of h)
{
    console.log(hero);
    
}


//print aaray using for in  loop

for(let heros of h)
    {
        console.log(heros);
        
    }



    //qus add msrks of 6 stu and avg 

let stu=[90,70,80,78,84];
let sum=0;
let len = stu.length;
for(let i=0 ; i<len;i++)
{
    sum=sum+stu[i]
}
let avg = sum/len;
console.log(`avg marks of studant is ${avg}`);


//qus2
let price=[300,487,985,695,456,1230];
let idx=0;
for(let i=0;i<price.length;i++)
{
    let dic=price[i]/10;
    let final=price[i]-dic;
    console.log(`value after discount= ${final}`);
    
}

for(let val of price)
{
    let dic=val/10;
    let final=val-dic;
    console.log(`value after discount= ${final}`);
    }



//<--------------------------------------method /function in array--------------------------------------------------->//


let food =["lichi","apple","tomato","pineapple"]//if we want push any item in array than we can use push (add item in last of array)
food.push("chips","panir")
console.log(food);


let a =["lichi","apple","tomato","pineapple"]//delete last item and return 
let del = a.pop();//return delated item in del
console.log(a);
console.log(del);


let b =["lichi","apple","tomato","pineapple"]//convert array to string 
console.log(b.toString());


let marvel =["thor","spiderman","iron man"];//add to array
let dc = ["superman","batman"];
let ind = ["saktiman","balweer","krish"]
let heros= marvel.concat(dc,ind)
console.log(heros);


let mar =["thor","spiderman","iron man"];//add to start
let ant = mar.unshift("antman");
console.log(mar);


let ar =["thor","spiderman","iron man"];//delete first item in array
let nt = ar.shift();
console.log(ar);


let s =["lichi","apple","tomato","pineapple"];//scice for sliciing orgignal array me changes nai krta
let v= s.slice(1,2);
console.log(v);


let sp =[1,2,3,4,5,6,7,8,9];//splice (starting , how many no you want delete , add new nomber)
sp.splice(1,4,87,78,98,89);
console.log(sp);

let spp =[1,2,3,4,5,6,7,8,9];//splice delete (starting , how many no you want delete , add new nomber)
spp.splice(1,0,89);
console.log(spp);

let sppp =[1,2,3,4,5,6,7,8,9];//splice delate(starting , how many no you want delete , add new nomber)
sppp.splice(3,1);
console.log(sppp);

let com =["bloomberg","microsoft","ubar","google","IBM","netflix"];
com.pop();
console.log(com);
com.splice(2,0,"ola");
console.log(com);
com.push("amazone");
console.log(com);











