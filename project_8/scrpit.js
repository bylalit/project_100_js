const testimonial = [
    {
        name: "Cherise G",
        photoUrl: "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."
    },
    {
        name: "Rosetta Q",
        photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multipal level it."
    },
    {
        name: "Constantine V",
        photoUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "This is simply unbelievable! I would be lost without Apple. I love it! Apple impressed me on multipal level it."
    },
];


const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let i = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = 
    testimonial[i];
    imgEl.src = photoUrl;
    textEl.innerHTML = text;
    usernameEl.innerHTML = name;
    i++;

    if (i === testimonial.length){
        i = 0;
    }

    setTimeout(()=>{
        updateTestimonial();
    }, 2000)
}