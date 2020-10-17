class Speed {
    constructor(d, t) {
        this.d = d;
        this.t = t;
    }
    calSpeed() {
        return (this.d / this.t);
    }
}

let calculation = new Speed(50, 15);
let result = calculation.calSpeed();

console.log('result', result);