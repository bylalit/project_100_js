const btn =  document.getElementById('btn');

btn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    let output = document.getElementById('output');
    output.innerHTML = input.toUpperCase();
});