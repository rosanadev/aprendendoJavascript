let colorList = []
for (let i = 1; i <=3; i++){
    let userColor = prompt('Digite a cor ' + i + ':')
    colorList.push(userColor)
}
document.getElementById('listacores').innerHTML = colorList