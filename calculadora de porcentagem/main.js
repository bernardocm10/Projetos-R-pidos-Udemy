let valorTotal = 0

let valorConta = parseFloat(prompt("digite o valor da conta: "))
let gorjeta = parseFloat(prompt("digite o valor da gorjeta (%): "))

gorjeta = (valorConta * gorjeta) / 100
valorTotal = valorConta + gorjeta

alert("O valor total com gorjeta é R$" + valorTotal.toFixed(2))
