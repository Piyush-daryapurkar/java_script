function fun(){
    console.log("piyush");
    
}


fun();


//<--------map-------------->//

let num = [98,74,48];
num.map((val)=>{
    console.log(val);
});

//map with return value 

let number = [98,74,48];
let a=num.map((val)=>{
    return val;
});
console.log(a);


//----------------filter--------//

let num_arr =[10,14,19,78,98,87,77];
let even=num_arr.filter((val)=>{
    return val%2===0;
})
console.log(even);



//value greter than 3 using filter 
let num_ar =[10,2,14,19,78,98,87,77,100];
let greter=num_ar.filter((val)=>{
    return val>3;
})
console.log(greter);


//--------reduce---------------give single output

let ar =[1,5,9,2];
let res= ar.reduce((res,curr)=>{
    return res+curr;
})
console.log(res);

//find largest using reduce 

let aa =[1,5,98,2];
let re= aa.reduce((res,curr)=>{
    return res>curr ?res:curr ;
})
console.log(re);




