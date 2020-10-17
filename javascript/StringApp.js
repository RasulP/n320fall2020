let king = {
    age: 50,
    disposition: "dour"
}
let templateStr = ` 
    <h2>King Stats</h2> 
    <ul>   
        <li>Age: ${king.age}</li> 
        <li>Disposition: ${king.disposition}</li> 
    </ul>`;

//creates a new div
let newContainer = document.createElement("div");

newContainer.innerHTML = templateStr;

document.body.appendChild(newContainer);