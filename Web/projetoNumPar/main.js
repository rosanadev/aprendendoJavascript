let startInput = document.getElementById('start');
let endInput = document.getElementById('end');
let outputDiv = document.getElementById('output');

function showEvenNumbers() {
    let start = Number(startInput.value);
    let end = Number(endInput.value);

    let i = start;
    let output = '';

    while (i <= end) {  
        if (i % 2 === 0) {
            output += i + ' '; 
            outputDiv.innerHTML = output
        }
        i++; 
    }

}