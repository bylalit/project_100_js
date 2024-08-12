const images = document.querySelector(".image-container");

let btn = document.querySelector(".btn");


btn.addEventListener("click", ()=>{
    imageNum = 10;
    addNewImage();
});

function addNewImage(){

    for (let index = 0; index < imageNum; index++) {
        
        const newImg = document.createElement("img");

        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    
        images.appendChild(newImg);
    }



 
}
