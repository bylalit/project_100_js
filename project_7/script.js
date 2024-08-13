// let nameItem = document.getElementById("nameItem");
// let amountItem = document.getElementById("amountItem");


// const add = document.getElementById("add");
// const remove = document.getElementById("remove");

// let total = document.getElementById("total");




// add.addEventListener("click", function(){
//     let a = nameItem.value;
//     let b = amountItem.value;

//     let store = document.getElementById("demo");
//     let p = document.createElement("p");

//     p.classList.add("dispaly");
//     p.innerHTML += `${a}: Rs.${b}`;

//     store.appendChild(p);
//     // console.log(store);
//     p.style.display = "block";


//     let d = 0;
//     d += parseInt(d + b)
//     total.innerHTML = d;

//     remov(p);
// });

// function remov(p){
//     remove.addEventListener("click", function(){
//         p.innerHTML = "";
//         p.style.display = "none";
//         total.innerHTML = "";
//     })
// }




const nameItem = document.getElementById("nameItem");
const amountItem = document.getElementById("amountItem");

const btn1 = document.getElementById("add");
const btn2 = document.getElementById("remove");

const innertext = document.getElementById("demo");

btn1.addEventListener("click", dispaly);

let totalAmount = 0;

function dispaly(){
    let amountValue = parseFloat(amountItem.value);
    let newEl = document.createElement("p");
    if (nameItem.value.trim() === "" || isNaN(amountValue)){
        alert("Please Enter the value!");
    }else{
        
        newEl.innerHTML += `${nameItem.value}: ₹${amountValue}.00`;

        totalAmount += amountValue;
        document.getElementById("totalAmount").innerHTML = `Total Amount: ₹${totalAmount}.00`;
        innertext.appendChild(newEl);

        nameItem.value = "";
        amountItem.value = "";
    };
};