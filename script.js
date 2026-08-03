window.addEventListener("load",()=>{
    document.body.classList.add("loaded");
});


window.addEventListener("DOMContentLoaded",()=>{

const button = document.getElementById("openBook");
const cover = document.getElementById("cover");
const book = document.getElementById("book");

console.log(button, cover, book);


function animatePages(){

const pages = document.querySelectorAll(".page");

pages.forEach((page, index) => {

setTimeout(() => {
page.classList.add("show");
}, index * 350);

});

}

function createPetalBurst(){

const petals=["🌸","🌺","🌷","💮"];

for(let i=0;i<28;i++){

const petal=document.createElement("div");

petal.className="flower";

petal.innerHTML=
petals[Math.floor(Math.random()*petals.length)];

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=
(18+Math.random()*18)+"px";

petal.style.animationDuration=
(4+Math.random()*3)+"s";


document.body.appendChild(petal);


setTimeout(()=>{
petal.remove();
},7000);

}

}



if(button){

button.addEventListener("click",()=>{

createPetalBurst();

cover.classList.add("opening");


setTimeout(()=>{

cover.style.display="none";

book.classList.remove("hidden");

window.scrollTo({
top:0,
behavior:"smooth"
});


animatePages();


},900);


});

}


});
