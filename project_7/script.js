let nameItem = document.getElementById("nameItem");
let amountItem = document.getElementById("amountItem");


const add = document.getElementById("add");
const remove = document.getElementById("remove");

let total = document.getElementById("total");




add.addEventListener("click", function(){
    let a = nameItem.value;
    let b = amountItem.value;

    let store = document.getElementById("demo");
    let p = document.createElement("p");

    p.classList.add("dispaly");
    p.innerHTML += `${a}: Rs.${b}`;

    store.appendChild(p);
    // console.log(store);
    p.style.display = "block";


    // let valueAdd = 0;
    // valueAdd += parseInt(valueAdd + b);

    let d = 0;
    d += parseInt(d + b)
    total.innerHTML = d;

    remov(p);
});

function remov(p){
    remove.addEventListener("click", function(){
        p.innerHTML = "";
        p.style.display = "none";
        total.innerHTML = "";
    })
}
