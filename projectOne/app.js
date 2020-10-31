class Square {
    constructor() {
        this.value = null;
    }
}


class Grid {
    constructor() {
        this.arr = new Array(9).fill().map(s => new Square());
    }
}


class Game {
    constructor() {
        // super(this.arr);
        this.turn = Game.O;
        this.ON = true;
        this.winner = null;
        this.moves = 0; //check for zeros
        this.grid = Game.index;
    }
    checkMove(i) {
        // // for (i = 0; i < Game.index.length; i++) {
        if (this.ON && !Game.index[i].value) {
            Game.index[i].value = this.turn;
            this.moves++;
            this.turn = (this.turn === Game.O) ? Game.X : Game.O;
        }
        // // }


        // // for (i = 0; i < Game.index.length; i++) {
        // if (this.ON && !this.arr[i].value) {
        //     this.arr[i].value = this.turn;
        //     this.moves++;
        //     this.turn = (this.turn === Game.O) ? Game.X : Game.O;
        // }
        // // }
    }
    WinCon() {
        const winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],

        ];
        winner.forEach((win) => {
            const [a, b, c] = win;
            const ChkA = Game.index[a];
            const ChkB = Game.index[b];
            const ChkC = Game.index[c];
            if (ChkA.value && ChkA === ChkB.value && ChkA.value === ChkC.value) {
                this.On = false;
                this.winner = ChkA.value;

            }
        })
    }


}

let newB = new Grid()
Game.index = newB.arr;
Game.X = "X";
Game.O = "O";





// let newB = new Board()
let arr = newB.arr;

function setup() {

    createCanvas(400, 300)
}

function draw() {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            let iPos = i * 100;
            let jPos = j * 100;
            // fill(66, 135, 245);
            rect(iPos, jPos, 100);
            stroke(5);

        }


    }

}