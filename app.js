var fillincolor;

const art1Array = [".art0",".art1",".art2",".art3",".art4",".art5",".art6",".art7",".art8",".art9",".art10"];
let manupulatearray1 = art1Array.map(id=>document.querySelector(id));
manupulatearray1.forEach((element)=>element.addEventListener(`click`,(e)=> colorfiller(e.target)));

const art2array = [".secondart1",".secondart2",".secondart3",".secondart4",".secondart5",".secondart6",".secondart7"];
let manupulatearray2 = art2array.map(id=>document.querySelector(id));
manupulatearray2.forEach((element)=>element.addEventListener(`click`,(e)=> colorfiller(e.target)));

var firstart = document.querySelector(".firstart");
var shape2 = document.querySelector(".shape2");


// for frist art


firstart.addEventListener(`click`,()=>{
    for (let index = 0; index < manupulatearray1.length; index++) {
        const element = manupulatearray1[index];
        element.style.border= "white";
        element.style.borderStyle = "solid";
        element.style.backgroundColor = "#404040";
        if (element == manupulatearray1[1]) {
            element.style.width = "1.3cm";
            element.style.height= "1.3cm";
            element.style.bottom = "5.2cm";
            element.style.left= "1.04cm";
        } else if(element == manupulatearray1[2]){
            element.style.width = "1.3cm";
            element.style.height= "1.3cm";
            element.style.bottom = "6.63cm";
            element.style.left= "17.46cm";
        } else if(element == manupulatearray1[3]){
            element.style.width = "7cm";
            element.style.height= "1cm";
            element.style.bottom = "2.3cm";
            element.style.left= "8cm";
        } else if(element == manupulatearray1[4]){
            element.style.width = "4cm";
            element.style.height= "0.4cm";
            element.style.bottom = "4.2cm";
            element.style.left= "9.53cm";
        } else if(element == manupulatearray1[5]){
            element.style.width = "0.5cm";
            element.style.height= "4cm";
            element.style.bottom = "10cm";
            element.style.left= "9.5cm";
        } else if(element == manupulatearray1[6]){
            element.style.width = "1.5cm";
            element.style.height= "1.5cm";
            element.style.bottom = "11cm";
            element.style.left= "9.75cm";
        } else if(element == manupulatearray1[7]){
            element.style.width = "2cm";
            element.style.height= "2cm";
            element.style.bottom = "16.5cm";
            element.style.left= "5cm";
        } else if(element == manupulatearray1[8]){
            element.style.width = "2cm";
            element.style.height= "2cm";
            element.style.bottom = "18.6cm";
            element.style.left= "12.5cm";
        } else if(element == manupulatearray1[9]){
            element.style.width = "1.5cm";
            element.style.height= "1.5cm";
            element.style.bottom = "23.7cm";
            element.style.left= "10.4cm";
        } else if (element == manupulatearray1[10]) {
            element.style.width = "1.5cm";
            element.style.height= "1.5cm";
            element.style.bottom = "25.32cm";
            element.style.left= "7.5cm";
        }   
    };

    for (let index = 0; index < manupulatearray2.length; index++) {
        const element = manupulatearray2[index];
            element.style.border = "#404040";
            element.style.borderStyle = "solid";
            if (element == manupulatearray2[0]) {
                element.style.width = "1.5cm"
                element.style.height = "1.5cm"
                element.style.bottom = "35cm"
                element.style.left = "8cm"

            } else if(element == manupulatearray2[1]){
                element.style.width = "0.1cm"
                element.style.height = "0.3cm"
                element.style.bottom = "44.4cm"
                element.style.left = "8.5cm"

            } else if(element == manupulatearray2[2]){
                element.style.width ="0.1cm"
                element.style.height ="0.3cm"
                element.style.bottom ="45.8cm"
                element.style.left = "9cm" 
            }
             else if(element == manupulatearray2[3]){
                element.style.width = "0.1cm"
                element.style.height = "0.3cm"
                element.style.bottom = "45.3cm"
                element.style.left = "9.5cm" 
            }
             else if(element == manupulatearray2[4]){
                element.style.width = "4cm"
                element.style.height = "2cm"
                element.style.bottom = "38.4cm"
                element.style.left = "7.8cm" 
            }
             else if(element == manupulatearray2[5]){
                element.style.width = "0.8cm"
                element.style.height = "0.8cm"
                element.style.bottom = "48cm"
                element.style.left = "9.4cm" 
            }
            else if(element == manupulatearray2[6]){
                element.style.width = "1.5cm"
                element.style.height = "1.5cm"
                element.style.bottom = "43.6cm"
                element.style.left = "9.1cm" 
            }
        }
});


// for second art

shape2.addEventListener(`click`,()=>{
    for (let index = 0; index < manupulatearray1.length; index++) {
        const element = manupulatearray1[index];
        element.style.border= "#404040";
        element.style.borderStyle = "solid";
        element.style.backgroundColor = "#404040";
        if (element == manupulatearray1[0]) {
            element.style.width = "0cm";
            element.style.height= "0.2cm";
            element.style.bottom = "55.2cm";
            element.style.left= "1.04cm";
        } else if (element == manupulatearray1[1]) {
            element.style.width = "0.2cm";
            element.style.height= "0.2cm";
            element.style.bottom = "15.2cm";
            element.style.left= "1.04cm";
        } else if(element == manupulatearray1[2]){
            element.style.width = "0.2cm";
            element.style.height= "0.2cm";
            element.style.bottom = "26.63cm";
            element.style.left= "17.46cm";
        } else if(element == manupulatearray1[3]){
            element.style.width = "0.2cm";
            element.style.height= "0.1cm";
            element.style.bottom = "22.3cm";
            element.style.left= "8cm";
        } else if(element == manupulatearray1[4]){
            element.style.width = "0.4cm";
            element.style.height= "0.1cm";
            element.style.bottom = "24.2cm";
            element.style.left= "9.53cm";
        } else if(element == manupulatearray1[5]){
            element.style.width = "0.4cm";
            element.style.height= "0.1cm";
            element.style.bottom = "30cm";
            element.style.left= "9.5cm";
        } else if(element == manupulatearray1[6]){
            element.style.width = "0.1cm";
            element.style.height= "0.1cm";
            element.style.bottom = "31cm";
            element.style.left= "9.75cm";
        } else if(element == manupulatearray1[7]){
            element.style.width = "0.2cm";
            element.style.height= "0.2cm";
            element.style.bottom = "26.5cm";
            element.style.left= "5cm";
        } else if(element == manupulatearray1[8]){
            element.style.width = "0.2cm";
            element.style.height= "0.2cm";
            element.style.bottom = "28.6cm";
            element.style.left= "12.5cm";
        } else if(element == manupulatearray1[9]){
            element.style.width = "0.1cm";
            element.style.height= "0.1cm";
            element.style.bottom = "23.7cm";
            element.style.left= "10.4cm";
        } else if (element == manupulatearray1[10]) {
            element.style.width = "1.5cm";
            element.style.height= "1.5cm";
            element.style.bottom = "25.32cm";
            element.style.left= "7.5cm";
        }
    };

    for (let index = 0; index < manupulatearray2.length; index++) {
        const element = manupulatearray2[index];
            element.style.border = "white";
            element.style.borderStyle = "solid";
            element.style.backgroundColor = "#404040";

            if (element == manupulatearray2[0]) {
                element.style.width = "0.5cm"
                element.style.height = "4cm"
                element.style.bottom = "6cm"
                element.style.left = "8.5cm"

            } else if(element == manupulatearray2[1]){
                element.style.width = "0.5cm"
                element.style.height = "4cm"
                element.style.bottom = "10.12cm"
                element.style.left = "9.5cm"

            } else if(element == manupulatearray2[2]){
                element.style.width ="0.5cm"
                element.style.height ="4cm"
                element.style.bottom ="14.26cm"
                element.style.left = "10.5cm" 
            }
             else if(element == manupulatearray2[3]){
                element.style.width = "0.5cm"
                element.style.height = "4cm"
                element.style.bottom = "18.38cm"
                element.style.left = "11.5cm" 
            }
             if(element == manupulatearray2[4]){
                element.style.width = "4cm"
                element.style.height = "2cm"
                element.style.bottom = "26.4cm"
                element.style.left = "8.25cm" 
            }
             else if(element == manupulatearray2[5]){
                element.style.width = "0.8cm"
                element.style.height = "0.8cm"
                element.style.bottom = "26cm"
                element.style.left = "9.85cm" 
            }
            else if(element == manupulatearray2[6]){
                element.style.width = "1.5cm"
                element.style.height = "1.5cm"
                element.style.bottom = "31.6cm"
                element.style.left = "9.5cm" 
            }
    }
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

var color7 = document.querySelector(".color7")

color7.addEventListener(`click`,()=>{
    moreclick(color7); 
   for (let index = 0; index < colorarraymanupulate.length; index++) {
       const element = colorarraymanupulate[index];
       if (condition[index]) {
        var colorcode1 = Math.round(856635*Math.random());
        element.style.backgroundColor = "#"+colorcode1.toString();
       }
       } ;  
});

// click Animation

 function moreclick(element){
        element.style.backgroundColor= "#3A5444";
        element.style.color= "white";
   setTimeout(()=>{
        element.style.backgroundColor= "White";
        element.style.color= "Black";
   },150)  
   };
   
