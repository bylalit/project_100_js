const imageContainerEl = document.querySelector(".image-cointainer");


const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
prevEl.addEventListener("click", ()=>{
    x += 45;
    updateGalley();
});

function updateGalley(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}