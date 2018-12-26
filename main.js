class Airplane {
    constructor(name, occupancy, speed) {
        this.Name = name;
        this.Occupancy = occupancy;
        this.Speed = speed;
    }

    set Name(value) {
        if (value == undefined || value == '') {
            throw new Error("Name cannot be empty");
        }
        this.name = value;
    }

    get Name() {
        return this.name;
    }

    set Occupancy(value) {
        if (value == undefined || value == '') {
            throw new Error("Occupancy cannot be empty");
        }

        if (value < 0) {
            throw new Error("Occupancy cannot be negative");
        }

        if (this.occupancy + value > 180) {
            throw new Error("Occupancy cannot be more than 180");
        }

        this.occupancy = value;
    }

    get Occupancy() {
        return this.occupancy;
    }

    set Speed(value) {
        if (value == undefined || value == '') {
            throw new Error("Speed cannot be empty");
        }

        if (value < 0) {
            throw new Error("Speed cannot be negative");
        }

        if (this.speed + value >= 901) {
            throw new Error("Speed cannot be more than 900");
        }
        this.speed = value;
    }

    get Speed() {
        return this.speed;
    }

    increaseSpeed(value) {
        this.Name = this.Name + value;
    }

    decreaseSpeed(value) {
        this.Name = this.Name - value;
    }
    status() {
        console.log("Airplane : " + this.Name + " with " + this.Occupancy + " occupancy, is moving at " +
            this.Speed + " km/hr");
    }


}

var plane1 = new Airplane('Air Asia', 180, 900);
console.log(plane1.status());
var plane2 = new Airplane('SpiceJet', 300, 600);
console.log(plane2.status());
var plane3 = new Airplane('United', 60, 700);
console.log(plane3.status());

plane1.Speed = 200;
console.log(plane1.status())
console.log(plane2.status())
console.log(plane3.status())