// let box2 = document.querySelector(".box2");
// let boxa = document.querySelector(".boxa");
// let box1 = document.querySelector(".box1");
// let boxb = document.querySelector(".boxb");
// let body = document.querySelector(".body");
// let canvas = document.querySelector(".cnv");
// let selectbox;

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// function colorfiller(parameters) { 
//       selectbox = parameters;
//       boxa.addEventListener(`mouseenter`,()=>{
//             selectbox.style.backgroundColor = window.getComputedStyle(boxa).backgroundColor;
//       },);
//       boxb.addEventListener(`mouseenter`,()=>{
//             selectbox.style.backgroundColor = window.getComputedStyle(boxb).backgroundColor;
//       },);      
// }

// box1.addEventListener(`click`,()=>{
//       colorfiller(box1);
// },);

// box2.addEventListener(`click`,()=>{
//       colorfiller(box2);
// },);

//  var shape = canvas.getContext("2d");

//  for (let index = 0; index < 3; index++) {
//        let x = Math.random()*window.innerWidth;
//        let y = Math.random()*window.innerHeight;
//       //  shape.fillRect(x, y, 50, 50); 
//       shape.beginPath();
//       shape.arc(x, y, 20, 0, 2*Math.PI);
//       shape.stroke();   
//  }


var fillincolor;
var art1 = document.querySelector(".art1");
var art2 = document.querySelector(".art2");
var art3 = document.querySelector(".art3");
var art4 = document.querySelector(".art4");
var art5 = document.querySelector(".art5");
var art6 = document.querySelector(".art6");
var art7 = document.querySelector(".art7");
var art8 = document.querySelector(".art8");
var art9 = document.querySelector(".art9");
var art10 = document.querySelector(".art10");
var canvas = document.querySelector("canvas");
var shape = document.querySelector("shape2");

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var color5 = document.querySelector(".color5");
var color6 = document.querySelector(".color6");


art1.addEventListener(`click`,()=>{
    colorfiller(art1);
});
art2.addEventListener(`click`,()=>{
    colorfiller(art2);
});
art3.addEventListener(`click`,()=>{
    colorfiller(art3);
});
art4.addEventListener(`click`,()=>{
    colorfiller(art4);
});
art5.addEventListener(`click`,()=>{
    colorfiller(art5) 
});
art6.addEventListener(`click`,()=>{
    colorfiller(art6) 
});
art7.addEventListener(`click`,()=>{
    colorfiller(art7);
});
art8.addEventListener(`click`,()=>{
    colorfiller(art8);
});
art9.addEventListener(`click`,()=>{
    colorfiller(art9);
});
art10.addEventListener(`click`,()=>{
    colorfiller(art10);
});

shape.addEventListener(`click`,()=>{
    // art1.style.backgroundColor = window.getComputedStyle(color1).backgroundColor;
    console.log("siddh");
});

function colorfiller(params) {
    fillincolor = params;
    color1.addEventListener(`mouseenter`,()=>{
        fillincolor.style.backgroundColor = window.getComputedStyle(color1).backgroundColor; 
    });
    color2.addEventListener(`mouseenter`,()=>{
        fillincolor.style.backgroundColor = window.getComputedStyle(color2).backgroundColor; 
    });
    color3.addEventListener(`mouseenter`,()=>{
        fillincolor.style.backgroundColor = window.getComputedStyle(color3).backgroundColor; 
    });
    color4.addEventListener(`mouseenter`,()=>{
        fillincolor.style.backgroundColor = window.getComputedStyle(color4).backgroundColor; 
    });
    color5.addEventListener(`mouseenter`,()=>{
        fillincolor.style.backgroundColor = window.getComputedStyle(color5).backgroundColor; 
    });
    color6.addEventListener(`mouseenter`,()=>{
        fillincolor.style.backgroundColor = window.getComputedStyle(color6).backgroundColor; 
    });
};