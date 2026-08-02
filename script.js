
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
