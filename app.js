
const art1Array = ["arta","artb","artc","artd","arte","artf","artg","arth","arti","artj","artk"];
let manupulatearray1 = art1Array.map(id=>document.getElementById(id));
manupulatearray1.forEach(element=>element.addEventListener(`click`,e=>colorfiller(e.target)));

const art2array = ["secondarta","secondartb","secondartc","secondartd","secondarte","secondartf","secondartg"];
let manupulatearray2 = art2array.map(id=>document.getElementById(id));
manupulatearray2.forEach((element)=>console.log(element));
// element.addEventListener(`click`,(e)=> colorfiller(e.target)));

var fillincolor;
var firstart = document.querySelector(".firstart");
var shape2 = document.querySelector(".shape2");
const classoffirstart = ["art0","art1","art2","art3","art4","art5","art6","art7","art8","art9","art10"];
const classofsecondart = ["secondart1","secondart2","secondart3","secondart4","secondart5","secondart6","secondart7"]; 

// for frist art

firstart.addEventListener(`click`,()=>{
    for (let index = 0; index < manupulatearray2.length; index++) {
        const element = manupulatearray2[index];
        element.classList.remove(classofsecondart[index]);
    };
    for (let index = 0; index < manupulatearray1.length; index++) {
        const element = manupulatearray1[index];
        element.classList.add(classoffirstart[index]);
    }; 
});


// for second art

shape2.addEventListener(`click`,()=>{
    for (let index = 0; index < manupulatearray1.length; index++) {
        const element = manupulatearray1[index];
        element.classList.remove(classoffirstart[index]);
    }; 
    for (let index = 0; index < manupulatearray2.length; index++) {
        const element = manupulatearray2[index];
        element.classList.add(classofsecondart[index]);
    };
});


// function for color fill

const colorarray = [".color1",".color2",".color3",".color4",".color5",".color6"];
let colorarraymanupulate = colorarray.map((id)=>document.querySelector(id));
function colorfiller(params){
    fillincolor = params;
 colorarraymanupulate.forEach((element)=>{element.addEventListener(`mouseenter`,(e)=>{
 fillincolor.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;  
 })})
};

// color generator

var lock1 = document.querySelector(".lock1");
var lock2 = document.querySelector(".lock2");
var lock3 = document.querySelector(".lock3");
var lock4 = document.querySelector(".lock4");
var lock5 = document.querySelector(".lock5");
var lock6 = document.querySelector(".lock6");

lock1.addEventListener(`click`,()=>{  

    if (condition[0] == true) {
        condition[0] = false;
        lock1.style.backgroundColor= "#EFAA3A";
    } else {
        condition[0] = true;
        lock1.style.backgroundColor= "#E8D8A4";
    }; 

});
lock2.addEventListener(`click`,()=>{  
    
    if (condition[1] == true) {
        condition[1] = false;
        lock2.style.backgroundColor= "#EFAA3A";
    } else {
        condition[1] = true;
        lock2.style.backgroundColor= "#E8D8A4";
    }; 
});
lock3.addEventListener(`click`,()=>{  
    
    if (condition[2] == true) {
        condition[2] = false;
        lock3.style.backgroundColor= "#EFAA3A";
    } else {
        condition[2] = true;
        lock3.style.backgroundColor= "#E8D8A4";
    }; 
});
lock4.addEventListener(`click`,()=>{  
    
    if (condition[3] == true) {
        condition[3] = false;
        lock4.style.backgroundColor= "#EFAA3A";
    } else {
        condition[3] = true;
        lock4.style.backgroundColor= "#E8D8A4";
    }; 
});
lock5.addEventListener(`click`,()=>{  
    
    if (condition[4] == true) {
        condition[4] = false;
        lock5.style.backgroundColor= "#EFAA3A";
    } else {
        condition[4] = true;
        lock5.style.backgroundColor= "#E8D8A4";
    }; 
});
lock6.addEventListener(`click`,()=>{  
    
    if (condition[5] == true) {
        condition[5] = false;
        lock6.style.backgroundColor= "#EFAA3A";
    } else {
        condition[5] = true;
        lock6.style.backgroundColor= "#E8D8A4";
    }; 
});
var condition =[true, true, true, true, true,true ];

var color7 = document.querySelector(".color7");
color7.onmousedown = moreclick;
color7.onmouseup = onclickrelise;

function moreclick() {
    color7.style.backgroundColor= "#3A5444";
    color7.style.color= "white";
};
function onclickrelise(){  
    color7.style.backgroundColor= "White";
    color7.style.color= "Black";
    for (let index = 0; index < colorarraymanupulate.length; index++) {
               const element = colorarraymanupulate[index];
               if (condition[index]) {
                var colorcode1 = Math.round(856635*Math.random());
                element.style.backgroundColor = "#"+colorcode1.toString();
               }
               } ; 
};

// color7.addEventListener(`click`,()=>{
//     moreclick(color7); 
//    for (let index = 0; index < colorarraymanupulate.length; index++) {
//        const element = colorarraymanupulate[index];
//        if (condition[index]) {
//         var colorcode1 = Math.round(856635*Math.random());
//         element.style.backgroundColor = "#"+colorcode1.toString();
//        }
//        } ;  
// });

// // click Animation

//  function moreclick(element){
//         element.style.backgroundColor= "#3A5444";
//         element.style.color= "white";
//    setTimeout(()=>{
//         element.style.backgroundColor= "White";
//         element.style.color= "Black";
//    },150)  
//    };
   
