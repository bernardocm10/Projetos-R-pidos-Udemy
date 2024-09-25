let idade = parseInt(prompt('Digite sua idade: '))
let temTitulo = prompt('Tem titulo ou eleitor? (sim/não)')
let idadeMinima = 16;

if (idade >= idadeMinima && temTitulo == 'sim'){
    alert('Você pode votar');
}
else if(idade >= idadeMinima && temTitulo == 'não'){
    alert('Você pode votar, mas precisa de um título de eleitor');
}
else if(idade < idadeMinima && (temTitulo == 'sim' || temTitulo == 'não')){
    alert('Você não pode votar');
}
