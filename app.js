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


var secondart1 = document.querySelector(".secondart1");
var secondart2 = document.querySelector(".secondart2");
var secondart3 = document.querySelector(".secondart3");
var secondart4 = document.querySelector(".secondart4");
var secondart5 = document.querySelector(".secondart5");
var secondart6 = document.querySelector(".secondart6");
var secondart7 = document.querySelector(".secondart7");


var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var color5 = document.querySelector(".color5");
var color6 = document.querySelector(".color6");
var shape2 = document.querySelector(".shape2");

var array =[art0,art1,art2,art3,art4,art5,art6,art7,art8,art9,art10,];
var array1 = [secondart1,secondart2,secondart3,secondart4,secondart5,secondart6,secondart7];
 
// for frist art


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
        
    };

    for (let index = 0; index < array1.length; index++) {
        const element = array1[index];
            element.style.border = "#404040";
            element.style.borderStyle = "solid";
            if (element == secondart1) {
                element.style.width = "0.1cm"
                element.style.height = "0.3cm"
                element.style.bottom = "15cm"
                element.style.left = "8cm"

            } else if(element == secondart2){
                element.style.width = "0.1cm"
                element.style.height = "0.3cm"
                element.style.bottom = "14.4cm"
                element.style.left = "8.5cm"

            } else if(element == secondart3){
                element.style.width ="0.1cm"
                element.style.height ="0.3cm"
                element.style.bottom ="15.8cm"
                element.style.left = "9cm" 
            }
             else if(element == secondart4){
                element.style.width = "0.1cm"
                element.style.height = "0.3cm"
                element.style.bottom = "15.3cm"
                element.style.left = "9.5cm" 
            }
             else if(element == secondart5){
                element.style.width = "4cm"
                element.style.height = "2cm"
                element.style.bottom = "38.4cm"
                element.style.left = "7.8cm" 
            }
             else if(element == secondart6){
                element.style.width = "0.8cm"
                element.style.height = "0.8cm"
                element.style.bottom = "38cm"
                element.style.left = "9.4cm" 
            }
            else if(element == secondart7){
                element.style.width = "1.5cm"
                element.style.height = "1.5cm"
                element.style.bottom = "43.6cm"
                element.style.left = "9.1cm" 
            }
        }
});


// for second art

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
    };

    for (let index = 0; index < array1.length; index++) {
        const element = array1[index];
            element.style.border = "white";
            element.style.borderStyle = "solid";
            element.style.backgroundColor = "#404040";
            if (element == secondart1) {
                element.style.width = "0.5cm"
                element.style.height = "4cm"
                element.style.bottom = "18cm"
                element.style.left = "8cm"

            } else if(element == secondart2){
                element.style.width = "0.5cm"
                element.style.height = "4cm"
                element.style.bottom = "22.12cm"
                element.style.left = "9cm"

            } else if(element == secondart3){
                element.style.width ="0.5cm"
                element.style.height ="4cm"
                element.style.bottom ="26.26cm"
                element.style.left = "10cm" 
            }
             else if(element == secondart4){
                element.style.width = "0.5cm"
                element.style.height = "4cm"
                element.style.bottom = "30.38cm"
                element.style.left = "11cm" 
            }
             else if(element == secondart5){
                element.style.width = "4cm"
                element.style.height = "2cm"
                element.style.bottom = "38.4cm"
                element.style.left = "7.8cm" 
            }
             else if(element == secondart6){
                element.style.width = "0.8cm"
                element.style.height = "0.8cm"
                element.style.bottom = "38cm"
                element.style.left = "9.4cm" 
            }
            else if(element == secondart7){
                element.style.width = "1.5cm"
                element.style.height = "1.5cm"
                element.style.bottom = "43.6cm"
                element.style.left = "9.1cm" 
            }
    }
});

// for box selection
 
secondart1.addEventListener(`click`,()=>{
    colorfiller(secondart1)
});
secondart2.addEventListener(`click`,()=>{
    colorfiller(secondart2)
});
secondart3.addEventListener(`click`,()=>{
    colorfiller(secondart3)
});
secondart4.addEventListener(`click`,()=>{
    colorfiller(secondart4)
});
secondart5.addEventListener(`click`,()=>{
    colorfiller(secondart5)
});
secondart6.addEventListener(`click`,()=>{
    colorfiller(secondart6)
});
secondart7.addEventListener(`click`,()=>{
    colorfiller(secondart7)
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

// function for color fill

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



