const containerEl = document.querySelector(".container");

const careers = ["YouTube", "Web Developer", "Freelancer", "Instructor"];

let careerInd = 0;
let charcterIndex = 0;

updateText();

function updateText(){
    charcterIndex++;
    containerEl.innerHTML = `
    <h1>I am ${careers[careerInd].slice(0,1) === "I" ? "an" : "a"} ${careers[careerInd].slice(0,charcterIndex)}</h1>
    `;

    if (charcterIndex === careers[careerInd].length){
        careerInd++;
        charcterIndex = 0;
    }
    if(careerInd === careers.length){
        careerInd = 0;
    }
    setTimeout(updateText, 400);
}
