let box2 = document.querySelector(".box2");
let boxa = document.querySelector(".boxa");
let box1 = document.querySelector(".box1");
let boxb = document.querySelector(".boxb");
let body = document.querySelector(".body");
let canvas = document.querySelector(".cnv");
let selectbox;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(window.innerWidth);
console.log(window.innerHeight);

function colorfiller(parameters) { 
      selectbox = parameters;
      boxa.addEventListener(`mouseenter`,()=>{
            selectbox.style.backgroundColor = window.getComputedStyle(boxa).backgroundColor;
      },);
      boxb.addEventListener(`mouseenter`,()=>{
            selectbox.style.backgroundColor = window.getComputedStyle(boxb).backgroundColor;
      },);      
}

box1.addEventListener(`click`,()=>{
      colorfiller(box1);
},);

box2.addEventListener(`click`,()=>{
      colorfiller(box2);
},);

//  var shape = canvas.getContext("2d");

//  for (let index = 0; index < 3; index++) {
//        let x = Math.random()*window.innerWidth;
//        let y = Math.random()*window.innerHeight;
//       //  shape.fillRect(x, y, 50, 50); 
//       shape.beginPath();
//       shape.arc(x, y, 20, 0, 2*Math.PI);
//       shape.stroke();   
//  }
