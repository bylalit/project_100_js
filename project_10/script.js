const imageContainerEl = document.querySelector(".image-cointainer");


const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timer;
prevEl.addEventListener("click", ()=>{
    x += 45;
    clearTimeout(timer);
    updateGalley();
});
nextEl.addEventListener("click", ()=>{
    x -= 45;
    clearTimeout(timer);
    updateGalley();
});

// function updateGalley(){
//     imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
//     timer = setTimeout(()=>{
//         x -= 45;
//         updateGalley();
//     }, 3000);
// }

updateGalley();