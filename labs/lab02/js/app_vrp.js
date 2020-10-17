class VirtualPet {
    constructor(name) {
            this.name = name;
            this.hunger = 50;
            this.energy = 100;
        }
        //this is just a method for creat a strin template
    render() {
        return `      
    <div>${this.name}</div>     
     <div>Hunger: ${this.hunger}</div>   
        <div>Energy: ${this.energy}</div>  
          `;
    }
    feed() { this.hunger--; }
}





let myPet = new VirtualPet("Gidget"); //o


let petDiv = document.getElementById("petDiv");
petDiv.innerHTML = myPet.render();

function feedPet() {
    myPet.feed();
    petDiv.innerHTML = myPet.render();
}