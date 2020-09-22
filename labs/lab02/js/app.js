// Vending Machin class
class vendingMachine {
    constructor() {
        this.firstCandy = 10;
        this.secondCandy = 15;
        this.firstChip = 20;

    }


    //   class render to html markup 
    render() {
            return `           
     <div> in Stock: ${this.firstCandy}</div> 
     
    <button onclick="itemOne()">Buy item</button>
     <div> in Stock: ${this.secondCandy}</div> 
     <button onclick="itemTwo()">Buy item</button>
     <div> in Stock: ${this.firstChip}</div>  
     <button onclick="itemThree()">Buy item</button>   `;
        }
        // Class methods to purchase items, stock reduction and conditional check for stock. 
    itemOne() {
        console.log(this.firstCandy);
        if (this.firstCandy > 0) {
            this.firstCandy--;
        } else {
            window.alert("out of stock");
        }

    }
    itemTwo() {
        console.log(this.secondCandy);
        if (this.secondCandy > 0) {
            this.secondCandy--;
        } else {
            window.alert("out of stock");
        }

    }
    itemThree() {
        console.log(this.firstChip);
        if (this.firstChip > 0) {
            this.firstChip--;
        } else {
            window.alert("out of stock");
        }

    }
}





let purchase = new vendingMachine(); // Object instatiaton

// referencing div element  from index file 
let snackDiv = document.getElementById("vending-item");
snackDiv.innerHTML = purchase.render(); // render template to inner html


// purchase functions for each item
function itemOne() { //First Candy item
    purchase.itemOne();
    snackDiv.innerHTML = purchase.render();
}

function itemTwo() { // Second andy item
    purchase.itemTwo();
    snackDiv.innerHTML = purchase.render();
}

function itemThree() { //First Chip item
    purchase.itemThree();
    snackDiv.innerHTML = purchase.render();
}