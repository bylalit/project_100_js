let amount = document.querySelector("#amount");
const period = document.getElementById("period");
const interest = document.getElementById("interest");
const btn = document.getElementById("btn");



btn.addEventListener("click", function(){
let start = 1;

while (start <= period.value) {
   let result = amount.value * interest.value / 100;
   console.log(result);
   console.log(amount);
   amount += result;
   console.log(amount.value);
   console.log("hii");
    start += 1;
}
});