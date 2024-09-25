let firstName = prompt ('Digite seu primeiro nome:')
let lastName = prompt ('Digite seu sobrenome:')
let age = parseInt (prompt ('Digite sua idade:'))
let friends = ['Gon', 'Rick' , 'Pedro' , 'PV']

//age = age + 2 

let consoleOutput = 'seu nome é ' + firstName + ' ' + lastName +' e tem ' + age + ' anos' + ' 😎 '
//let consoleOutput = friends 
//friends[1] = 'Lorena' //replace
//friends[4] = 'Bella' //Add itens
//friends[5] = 1


console.log(consoleOutput);
const consoleOutputElement = document.getElementById("console-output");
consoleOutputElement.innerHTML = consoleOutput;