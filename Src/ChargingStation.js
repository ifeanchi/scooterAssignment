const Scooter = require('../Src/Scooter')

class ChargingStation {
    constructor (locx, locy) {
        this.locX = locx
        this.locY = locy
        this.allScooters = [];
        this.currentInventory = [];

    }

    addScooter(Scooter) {
        this.allScooters.push(Scooter)
        this.currentInventory.push(Scooter)
    }

    checkOut(Scooter) {
        this.currentInventory.splice(this.currentInventory.indexOf(Scooter), 1)
        this.checkedOutScooters.push(Scooter)
   }

   checkIn(scooter) {
        this.currentInventoy.push(Scooter);
        this.checkedOutScooters.splice(this.checkedOutScooters.indexOf(Scooter), 1)
   }


    async chargeScooter (testScooter) {
        console.log("Charging will begin now.");
      await new Promise(resolve => setTimeout(resolve, 2000))
      testScooter.isCharged = true;
      console.log("Your scooter is fully charged again.");

    }
}
module.exports = ChargingStation