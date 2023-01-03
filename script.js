/*

// this was setup code from the lesson

const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

*/

/////////////////////

// move my face
const bigFace = document.getElementById("avatar");

function moveFace() {
    let randX = Math.floor(Math.random() * (window.innerWidth - 150));
    let randY = Math.floor(Math.random() * (window.innerHeight - 150));
    let move = [{left: randX + "px", top: randY + "px"}, {duration: 500}]
    let rotate360 = [
        {transform: 'rotate(360deg)'}
    ];
    let speed = {
        duration: 500,
        iterations: 1
    };
    function animationComplete() {
        bigFace.style.left = `${randX}px`;
        bigFace.style.top = `${randY}px`
    }
    let stopFace = animationComplete;
    console.log([randX, randY]);
    bigFace.animate(rotate360, speed);
    let faceMoving = bigFace.animate(...move);
    faceMoving.finished.then(() => animationComplete());
}
bigFace.addEventListener("mouseover", moveFace);



//////////////////

// photo pop up
const modal = document.getElementById("myModal");
const img = document.getElementById("singing");
const modalImg = document.getElementById("avatar");
const captionText = document.getElementById("caption");
function gotMe() {
    modal.style.display = "block";
    modalImg.src = avatar.src;
    captionText.innerHTML = `"${singing.alt}." -Nick Johnson, 2/29/20`;
}
const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
bigFace.addEventListener("click", gotMe)
/////////////////////




///////////////test button stuff below here////////////////
/*
const button = document.getElementById("emcee");

let randX = Math.floor(Math.random() * (window.innerWidth - 100));
let randY = Math.floor(Math.random() * (window.innerHeight - 100));
let move = [
    {left: randX + "px", top: randY + "px"}
]
let rotate360 = [
    {transform: 'rotate(360deg)'}
];
let speed = {
    duration: 500,
    iterations: 1
}

function moveButton() {
//    let randX = Math.floor(Math.random() * (window.innerWidth - 100));
//    let randY = Math.floor(Math.random() * (window.innerHeight - 100));
//    console.log([randX, randY]);
    button.animate(rotate360, speed);
    button.animate(move);
    console.log(move);
}

button.addEventListener("click", moveButton)
*/