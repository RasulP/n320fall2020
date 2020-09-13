// parent  Class for Instruments 

class Instrument {
    constructor(family, verb, dB) {
            this.family = family;
            this.verb = verb;
            this.dB = dB;
        }
        ///this is the method for the parent class
    playInstrum() {
        console.log(this.family, this.verb + " at " + this.dB + " dB");
    }



}
/// child Class and extentions  under the parent class Instrument

class Woodwind extends Instrument {
    constructor(family, verb) {
        super(family, verb, 1.5);
    }

}
class Percussion extends Instrument {
    constructor(family, verb) {
        super(family, verb, 8);


    }
}
class Strings extends Instrument {
    constructor(family, verb) {
        super(family, verb, 3);


    }

}

// Object Array 
var players = [];

// class Instances 
players[0] = new Woodwind("Flute", "blowned");

players[1] = new Percussion("Xylophone", "played");

players[2] = new Strings("Violin", "performed");

// Foreache method  looping through array and  calling Log method
players.forEach(
    function(player) {
        player.playInstrum();
    }
)