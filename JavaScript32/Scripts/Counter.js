let btnCounter = document.querySelector("#btnCounter")

let counter = 0

btnCounter.addEventListener('click', function() {
    counter++;
    document.querySelector("#titleRes").innerHTML = counter
})