let li = []

const labelX = document.getElementById('labelx')
const labelO = document.getElementById('labelo')
const dashbord = document.querySelector('label')
labelX.style.color = 'rgb(110, 255, 136)'
labelO.style.color = 'rgb(253, 124, 124)'
sum = 0
win = false

function adding(element){
    ele = document.getElementById(element)
    if (ele.classList.value == 'emptybox' && win == false){
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
        li[sum] = shape
        ele.innerHTML = shape

        li = [[li[1],li[2],li[3]],[li[4],li[5],li[6]],[li[7],li[8],li[9]]]

        for (let line in Range(3)){
            x = 0
            o = 0
            for (let num in Range(3)){
                if (li[line][num] == 'X'){
                    x += 1
                    if (x == 3){
                        win = true
                        break
                    }
                }
                else if (li[line][num] == 'O'){
                    o += 1
                    if (o == 3){win = true;break}
                }
            }

        }

        if (win && sum%2 == 0){
            dashbord.innerHTML = 'win O!!'
        } else if (win && sum%2 != 0){
            dashbord.innerHTML = 'win X!!'
        }else if (win == false && sum == 9){
            labelO.style.color = 'aliceblue'
            labelX.style.color = 'aliceblue'
            dashbord.innerHTML = 'Draw!!'
        }
    }
}