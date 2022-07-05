'use strict';
const btn7=document.querySelector("#yet");
const qosh=document.querySelector("#qosh");
const btn8=document.querySelector("#sak");
const btn9=document.querySelector("#toq");

const input=document.querySelector(".input");

const btn1=document.querySelector("#bir");
const btn2=document.querySelector("#ikki");
const btn3=document.querySelector("#uch");
const btn4=document.querySelector("#tort");
const btn5=document.querySelector("#besh");

const btn6=document.querySelector("#olti");
const btn0=document.querySelector("#nol");
const AC=document.querySelector("#AC");
const plusminus=document.querySelector("#PlusMinus");
const Foiz=document.querySelector("#foiz");

const boluv=document.querySelector("#bolish")
const kopay=document.querySelector("#kopay")
const minus=document.querySelector("#minus")

const natija=document.querySelector("#natija")
const vergul=document.querySelector("#vergul")



let arr=[];
let inn=[];
let b=0;

btn7.addEventListener("click",function(){
  //input.value="7";
  arr.push("7");
  //Number(arr.join(""));
  inn.push("7");
  input.value=(inn.join(""));
});
btn8.addEventListener("click",function(){
  //input.value="8";
  arr.push("8");
  //Number(arr.join(""));
  inn.push("8");
  input.value=(inn.join(""));
});
btn9.addEventListener("click",function(){
  //input.value="9";
  arr.push("9");
  //Number(arr.join(""));
  inn.push("9");
  input.value=(inn.join(""));
});


qosh.addEventListener("click",function(){
  
  b=b+Number(arr.join(""));
  console.log(b);
  console.log(arr);

  inn.push("+");
  input.value=inn.join("");

  
  //console.log(b);
  arr=[];
  natija.addEventListener("click",function(){
  b=b+Number(arr.join(""));
  // inn.push("=",b);
  // input.value=inn.join("");
  //input.value='';
  input.value=b;
  arr=[];
});
  
 
});


AC.addEventListener("click",function(){
  input.value='';
  
})


