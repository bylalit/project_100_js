let amount = document.getElementById("amount");
const period = document.getElementById("period");
const interest = document.getElementById("interest");
const btn = document.getElementById("btn");



// btn.addEventListener(function(){
//     console.log(amount.value);
//     console.log("Hello");
// })

btn.addEventListener("click", function(){
let start = 1;

while (start <= period.value) {
   let result = amount.value * interest.value / 100;
   console.log(result);
   amount += result;
   console.log(amount.value);
   console.log("hii");
    start += 1;
}
})

