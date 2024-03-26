li = [[0,0,0],[0,0,0],[0,0,0]]

const labelX = document.getElementById('labelx')
const labelO = document.getElementById('labelo')
const dashbord = document.querySelector('label')
labelX.style.color = 'rgb(110, 255, 136)'
labelO.style.color = 'rgb(253, 124, 124)'
let sum = 0
let win = false

function adding(element,liner){
    let sin = -1
    ele = document.getElementById(String(element+liner*3))
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
        li[liner][element-1] = shape
        ele.innerHTML = shape

        for  (let line = 0; line < 3; line++){
            x = 0
            o = 0
            for (let num = 0; num < 3; num++){
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
        for  (let num = 0; num < 3; num++){
            x = 0
            o = 0
            for (let line = 0; line < 3; line++){
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
        for  (let num = 0; num < 3; num++){
            x = 0
            o = 0
            sin++
            for (let line = 0; line < 3; line++){
                if (li[line+sin][num] == 'X'){
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
            labelX.style.color = 'rgb(253, 124, 124)'
            labelO.style.color = 'rgb(110, 255, 136)'
        } else if (win && sum%2 != 0){
            dashbord.innerHTML = 'win X!!'
            labelO.style.color = 'rgb(253, 124, 124)'
            labelX.style.color = 'rgb(110, 255, 136)'
        }else if (win == false && sum == 9){
            labelO.style.color = 'aliceblue'
            labelX.style.color = 'aliceblue'
            dashbord.innerHTML = 'Draw!!'
        }
    }
}