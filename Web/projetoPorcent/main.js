let conta = 0
let porcent = 0

conta = parseFloat(prompt('Digite o valor da conta: '))
porcent = (prompt('Digite o valor da porcentagem que você quer dar a gorgeta: '))
valorTotalConta = ((conta*porcent)/100)
conta += valorTotalConta

alert('O valor total da conta é R$' + conta.toFixed(2)) 