
const button = document.getElementById("openBook");
const cover = document.getElementById("cover");
const book = document.getElementById("book");

button.addEventListener("click", () => {
    cover.style.display = "none";
    book.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Falling flowers

const flowers = ["🌸","🌺","🌼","💮","🌷"];

setInterval(()=>{

const flower=document.createElement("div");

flower.className="flower";

flower.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

flower.style.left=Math.random()*window.innerWidth+"px";

flower.style.animationDuration=(6+Math.random()*5)+"s";

flower.style.fontSize=(18+Math.random()*18)+"px";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},12000);

},500);
