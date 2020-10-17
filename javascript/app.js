var item = {
    name: "Shovel",
    graphic: "img/realm.gif"
}
var temp = document.getElementById("iitem");
var clone = temp.content.cloneNode(true);


clone.querySelector(".name").innerHTML = item.name;
clone.querySelector(".igraphic").setAttribute("src", item.graphic);
document.body.appendChild(clone);