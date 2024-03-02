//Importando la funcion SUM del archivo app.js
/* const { sum } = require('./app.js')   */

test('One euro should be 1.07 dollars', () => {
    const { fromEuroToDollar } = require('./app.js')

    //De EURO a USD
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.07

    expect(dollars).toBe(expected)
})

test('One dolar should be 146,26 yenes', () => {
    const { fromUsdToYen } = require('./app.js')

    //De USD a YEN
    const yen = fromUsdToYen(5)
    const expectedOfYen = 5 * (156.5 / 1.07)

    expect(yen).toBe(expectedOfYen)
})

test('One yen should be 0.006 libra', () => {
    const { fromYenToPound } = require('./app.js')

    //De YEN a LIBRAS
    const libras = fromYenToPound(10)
    const expectedOfLibra = 10 * (0.87 / 156.5)

    expect(libras).toBe(expectedOfLibra)
})