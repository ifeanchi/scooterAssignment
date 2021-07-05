const Scooter = require('../Src/Scooter')
const ChargingStation = require('../Src/ChargingStation')
describe('ChargingStation object', () => {
    test('Charging station charge Scooter', async () =>{
        let testScooter = new Scooter('GREGY23467', 3, true, false)
        let testChargeStation = new ChargingStation(20, 65)
        await testChargeStation.chargeScooter(testScooter)
        console.log("Test complete");
        expect(testScooter.isCharged).toEqual(true);
    })
     test('ChargingStation has at least one scooter', () => {
         let testScooter1 = new Scooter('GREGY23468', 3, true, false)
         let testChargeStation1 = new ChargingStation

         testChargeStation1.addScooter(testScooter1)

         expect(testChargeStation1.allScooters).toEqual([testScooter1])

     })
})