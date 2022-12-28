/*

// this was setup code from the lesson

const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

*/

const bigFace = document.getElementById("avatar");

function moveFace() {
    const randX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randY = Math.floor(Math.random() * (window.innerHeight - 100));
    console.log([randX, randY]);
    bigFace.animate({"left": randX + "px", "top": randY + "px"});
}

function gotMe() {
    alert("Got me!")
}

bigFace.addEventListener("mouseover", moveFace);
bigFace.addEventListener("click", gotMe)

