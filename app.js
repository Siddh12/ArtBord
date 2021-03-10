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
var art0 = document.querySelector(".art0");
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
var firstart = document.querySelector(".firstart");

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var color5 = document.querySelector(".color5");
var color6 = document.querySelector(".color6");
var shape2 = document.querySelector(".shape2");

var array =[art0,art1,art2,art3,art4,art5,art6,art7,art8,art9,art10,];

firstart.addEventListener(`click`,()=>{
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element == art9) {
            element.style.border= "white";
            element.style.borderStyle = "solid";
            element.style.bottom = "23.7cm";
            element.style.left= "10.4cm";
            element.style.backgroundColor = "#404040";
        } else if(element == art10){
            element.style.border= "white";
            element.style.borderStyle = "solid";
            element.style.bottom = "25.32cm";
            element.style.left= "7.5cm";
            element.style.backgroundColor = "#404040";
        } else{
            element.style.border= "white";
            element.style.borderStyle = "solid";
            element.style.backgroundColor = "#404040";
        }
        
    }
})

shape2.addEventListener(`click`,()=>{
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element == art9) {
               element.style.backgroundColor = "#404040";
               element.style.border = "#404040";
               element.style.bottom = "23cm"
               element.style.left= "10.4cm"
        } else if(element == art10){
                element.style.backgroundColor = "#404040";
                element.style.border = "#404040";
                element.style.bottom = "23cm"
                element.style.left= "10.4cm"
        } else {
                element.style.backgroundColor = "#404040";
                element.style.border = "#404040";   
        }
    }
});

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



