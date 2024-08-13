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


btn2.addEventListener("click", clearer);

function clearer(){
    innertext.innerHTML = "";

    totalAmount = 0;
    document.getElementById("totalAmount").innerHTML = `Total Amount: ₹0.00`;

    nameItem.value = "";
    amountItem.value = "";
}