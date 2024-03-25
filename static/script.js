let li = [document.getElementById('1'),document.getElementById('2'),document.getElementById('3')]
let li2 = [document.getElementById('4'),document.getElementById('5'),document.getElementById('6')]
let li3 = [document.getElementById('7'),document.getElementById('8'),document.getElementById('9')]

const labelX = document.getElementById('labelx')
const labelO = document.getElementById('labelo')
labelX.style.color = 'rgb(110, 255, 136)'
labelO.style.color = 'rgb(253, 124, 124)'
sum = 0
function adding(element){
    ele = document.getElementById(element)
    if (ele.classList.value == 'emptybox'){
        sum++
        ele.classList.remove('emptybox')
        ele.classList.add('box')
        if (sum%2 == 0){
            shape='O'
            labelX.style.color = 'rgb(110, 255, 136)'
            labelO.style.color = 'rgb(253, 124, 124)'
    }
        else{
            shape='X'
            labelO.style.color = 'rgb(110, 255, 136)'
            labelX.style.color = 'rgb(253, 124, 124)'
    }
        ele.innerHTML = shape
        if (sum == 9){
            labelO.style.color = 'aliceblue'
            labelX.style.color = 'aliceblue'
        }
    }
}
if (sum == 9){
    labelO.style.color = 'aliceblue'
    labelX.style.color = 'aliceblue'
}