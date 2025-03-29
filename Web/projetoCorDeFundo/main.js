
function changeBackGroundColor() {
    let colors = ['red', 'coral', 'violete', 'pink', 'blue', 'grey']
    randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = randomColor
} 