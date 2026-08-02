const button = document.getElementById("openBook");
const cover = document.getElementById("cover");
const book = document.getElementById("book");

button.addEventListener("click", () => {

    createPetalBurst();

    cover.style.display = "none";
    book.classList.remove("hidden");

    const music = document.getElementById("bgMusic");
    if (music) {
        music.volume = 0.35;
        music.play();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

function createPetalBurst(){

    const petals=["🌸","🌺","🌼","💮","🌷"];

    for(let i=0;i<20;i++){

        const petal=document.createElement("div");

        petal.className="flower";

        petal.innerHTML=petals[Math.floor(Math.random()*petals.length)];

        petal.style.left=Math.random()*window.innerWidth+"px";

        petal.style.animationDuration=(3+Math.random()*2)+"s";

        petal.style.fontSize=(16+Math.random()*18)+"px";

        document.body.appendChild(petal);

        setTimeout(()=>{
            petal.remove();
        },5000);

    }

}
