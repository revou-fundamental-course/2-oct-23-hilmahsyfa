let celciusInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector ('#kelvin > Input')

let btn = document; querySelector ('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}
    
celciusInput.addEventListener('click', function (){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5))+ 32
    let kTemp = cTemp + 237.15

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})

fahrenheitInput.addEventListener('click', function (){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp + 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15
    
    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})

kelvinInput.addEventListener('click', function (){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (5/9) + 32
   
    celciusInputtInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
})

