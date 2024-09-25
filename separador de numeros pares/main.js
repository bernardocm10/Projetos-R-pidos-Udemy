let startInput = document.getElementById('start');
let endInput = document.getElementById('end');
let outputDiv = document.getElementById('output');

let startInputOdd = document.getElementById('startOdd');
let endInputOdd = document.getElementById('endOdd');
let outputDivOdd = document.getElementById('outputOdd'); 

function showEvenNumbers() {
    let start = Number(startInput.value);
    let end = Number(endInput.value);
    
    let i = start;
    let output = 0;
    
    while (i <= end){
        if(i % 2 == 0){
            output = output + i + ' '
            outputDiv.innerHTML = output
        }
        i++
    }
}
function showOdd() {
    let startOdd = Number(startInputOdd.value);
    let endOdd = Number(endInputOdd.value);
  
    let i = startOdd;
    let outputOdd = 0;

    do {
        if (i % 2 !== 0) {
            outputOdd = outputOdd + i + ' '
            outputDivOdd.innerHTML = outputOdd
    } 
    i++ 
    } while (i <= endOdd)
  
    }

  
