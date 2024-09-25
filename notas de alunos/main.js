let grade = prompt("digite a nota do aluno: ")

if(grade > 100){
    alert("Nota invalida")
}
else if(grade >= 90){
    alert("A")
}
else if(grade >= 80){
    alert("B")
}
else if(grade >= 70){
    alert("C")
}
else if(grade >= 60){
    alert("D")
}
else{
    alert("F")
}