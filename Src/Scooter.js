const ChargingStation = require('./ChargingStation.js')

class Scooter {
    constructor(serial, wheels, isCharged, isBroken) {
        this.serial = serial
        this.wheels = wheels;
        this.isCharged = isCharged;
        this.isBroken = isBroken;
        this.locX = 0;
        this.locY = 0;
    }
    drive (x, y) {
        this.locX = x
        this.locX =  y
    }

    park (x, y) {
        this.locX = x
        this.locX =  y

        if (this.locX == ChargingStation.locX & this.locY == ChargingStation.locY) {
            console.log("You have parked at the Charging Station!")
            ChargingStation.chargeScooter(this)
        }
  
}


}
module.exports = Scooter;

