var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0
const somar = document.getElementsByName('adicionar')[0]
const subtrair = document.getElementsByName('subtrair')[0]

somar.addEventListener('click', () => { increment(), numberCheck()})
subtrair.addEventListener('click', () => { decrement(), numberCheck()})

function numberCheck(){
    if(currentNumber < 0) {
        currentNumberWrapper.style.color = "red"
    } else {
        currentNumberWrapper.style.color = "black"
    }
}

function increment() {
   if (currentNumber < 10){
    subtrair.style.backgroundColor = "buttonface"
    currentNumber++
    currentNumberWrapper.innerHTML = currentNumber 
        if (currentNumber == 10){
        somar.style.backgroundColor = "grey"
        }
    } 
}

function decrement() {
   if (currentNumber > -10){
    somar.style.backgroundColor = "buttonface"
    currentNumber--
    currentNumberWrapper.innerHTML = currentNumber
        if (currentNumber == -10) {
            subtrair.style.backgroundColor = "grey"
        } 
   } 
   
}

console.log(somar)
console.log(subtrair)