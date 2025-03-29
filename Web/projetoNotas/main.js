let nota = 0

nota = parseFloat(prompt('Coloque a nota do aluno: '))
if (nota > 100) {
alert('Nota inválida')
}
else if (nota >= 90 && nota <= 100) {
alert('A média do aluno é A')
} else if (nota >= 80 && nota <= 89) {
alert('A média do aluno é B')
} else if (nota >= 70 && nota <= 79) {
    alert('A média do aluno é C')
} else if (nota >= 60 && nota <= 69) {
    alert('A média do aluno é D') 
} else if (nota >= 50 && nota <= 59) {
    alert('A média do aluno é E')
} else {
    alert('A média do aluno é F')
}
