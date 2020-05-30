var m = 0;


document.querySelector('.dropdown').addEventListener("click",function(e){
console.log(m);
let a = document.querySelector('.dropdown-content');
let i = 0;
let b = document.querySelectorAll(".item");
if(m == 0){


a.style.display = "block";
a.style.dusplay = "flex";
a.style.flexDirection = "column";
a.style.alignItems = "center";
a.style.animation = "menu 1s forwards";
a.style.justifyContent = "center"
a.style.width = "100%";
a.style.height = "100%";


for(i;i<b.length;i++){
b[i].style.color = "red";
b[i].style.display = "flex";
b[i].style.justifyContent = "center";
b[i].style.alignItems = "center";
b[i].style.width = "98%";
b[i].style.height = "23.6%";
b[i].style.border = "5px solid blue";
}
}
else{
    a.style.animation = "menuback 1s forwards";
    a.style.transformOrigin = "right";

    for(i;i<b.length;i++){
        b[i].style.display = "none";
    }
}

if(m == 0){
m++;
}
else{
    m = 0;
}
console.log(m);


            
});

