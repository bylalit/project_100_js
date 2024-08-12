let nameItem = document.getElementById("nameItem");
let amountItem = document.getElementById("amountItem");


const add = document.getElementById("add");
const remove = document.getElementById("remove");

let total = document.getElementById("total");

let store = document.getElementById("demo");
let p = document.createElement("p");
add.addEventListener("click", function(){
    let a = nameItem.value;
    let b = amountItem.value;

    p.classList.add("dispaly");
    p.innerHTML += `${a}: Rs.${b}`;

    store.appendChild(p);
    console.log(store);
    p.style.display = "block";
    let valueAdd = 0;
    valueAdd += parseInt(valueAdd + b);
    total.innerHTML = valueAdd;
});

function remov(){
    remove.addEventListener("click", function(){
        p.innerHTML = "";
        p.style.display = "none";
    })
}
remov()