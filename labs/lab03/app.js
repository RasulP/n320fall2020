let rectDiv = document.getElementsByClassName("grid");
let Rect = document.getElementsByClassName("s-rect");
let bRect = document.getElementById("big-rect");
// grid animation slid in
TweenMax.to(rectDiv, { duration: 2, y: 100 });
// grid animation slid in- opacity 
TweenMax.from(rectDiv, { duration: 4, alpha: 0, })

// On click exit animation funcition 
function rectClicked() {
    console.log("clciked")
    TweenMax.to(bRect, { duration: 2, alpha: 0, })
}