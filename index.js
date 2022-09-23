var counter = document.querySelector('.counter');
var saveCounter = document.querySelector('.prev');


//function
let count = 0;
function increment() {
count += 1;
counter.textContent = count;
}

function save(){
    let prevCounter = count + " - ";
    saveCounter.textContent += prevCounter;
    counter.textContent = 0;
    count = 0;
}
