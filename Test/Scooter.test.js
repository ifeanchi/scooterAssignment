const Scooter = require('../Src/Scooter')

describe('Scooter object', () => {
    
    const testScooter = new Scooter('GREGY23467', 3, true, false )
    
    // console.log(testScooter)

    test('the first 5 are letters, the rest are numbers', () => {
        const serialNum = testScooter.serial
        const serialArray = serialNum.split('')
        const firstFiveLetters = serialArray.slice(0, 5).join('') 
        // console.log(firstFiveLetters)

        const lastFiveChar = parseInt(serialArray.slice(5).join(''))

        expect(typeof firstFiveLetters).toBe('string')
        expect(typeof lastFiveChar).toBe('number')

    })

    test('that scooter has wheels', () => {
        expect(testScooter.wheels).toEqual(3)
    })
    
    test('that scooter is charged', () => {
        expect(testScooter.isCharged).toEqual(true)
    })

    test('that scooter is not broken', () => {
        expect(testScooter.isBroken).toEqual(false)
    })

})