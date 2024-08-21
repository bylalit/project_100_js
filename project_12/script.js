const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let input = document.getElementById("input").value;
  if (input.length > 0) {
    alert("Please enter the your birthday date");
  } else {
    let output = document.getElementById("output");
    output.innerHTML = input.toUpperCase();
    output.style.color = "blue";
  }
});
