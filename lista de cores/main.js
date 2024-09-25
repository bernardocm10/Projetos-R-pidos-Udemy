let colorList = []

for (let i = 1; i <= 3; i++){
    let userColor = prompt("Digite a cor " + i + ":")
    colorList.push(userColor)
}

let consoleOutput = "sua lista de cores ficou assim: " + colorList

console.log(consoleOutput);
const consoleOutputElement = document.getElementById("console-output");
consoleOutputElement.innerHTML = consoleOutput;