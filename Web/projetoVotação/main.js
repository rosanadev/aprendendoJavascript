let idade = 0

idade = prompt('Quantos anos você tem? ')
titulo = prompt('Você tem título de eleitor? (sim/não) ')

if (idade >= 18 && titulo == 'sim') {
    alert('Você pode votar!')
} else if (idade >= 18 && titulo == 'não') {
    alert('Você precisa tirar um título de eleitor para votar!')
} else if (idade < 18 && titulo == 'sim'|| titulo == 'não')
    alert('Você não tem a idade necessária para votar!')