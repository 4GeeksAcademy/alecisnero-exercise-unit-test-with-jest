/* const sum = (a,b) => {
    return a+b
} */

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

//funcion que convierte moneda de EUR a USD
const fromEuroToDollar = (valorUserInEuro) => {
    let resultEuroToUsd = valorUserInEuro * 1.07
    return resultEuroToUsd
}

//Funcion que convierte de USD a YEN
const fromUsdToYen = (valorUserInUsd) => {
    let resultUsdToYen = valorUserInUsd * (156.5 / 1.07) 
    return resultUsdToYen
}

//Funcion que convierte de YEN a Libras
const fromYenToPound = (valorUserInYen) => {
    let resultYenToPound = valorUserInYen * (0.87 / 156.5)    
    return resultYenToPound
}

/* console.log("1 euro son: "+ fromEuroToDollar(1) + " USD")
console.log("1 dolar son: "+ fromUsdToYen(1).toFixed(3)+ " YEN")
console.log("1 yen son: "+fromYenToPound(1).toFixed(3)+ " libra") */

module.exports = { fromEuroToDollar, fromUsdToYen, fromYenToPound };