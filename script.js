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
    let randX = Math.floor(Math.random() * (window.innerWidth - 200));
    let randY = Math.floor(Math.random() * (window.innerHeight - 200));
    let move = [{left: randX + "px", top: randY + "px"}, {duration: 500}];
    function animationComplete() {
        bigFace.style.left = `${randX}px`;
        bigFace.style.top = `${randY}px`
    };
    let faceMoving = bigFace.animate(...move);
    //let stopFace = animationComplete;
    console.log([randX, randY]);
    faceMoving.finished.then(() => animationComplete());

    function spinFace() {
        let rotate360 = [
            {transform: 'rotate(360deg)'}
        ];
        let speed = {
            duration: 500,
            iterations: 1
        };
        bigFace.animate(rotate360, speed);
    }
    spinFace();
}
bigFace.addEventListener("mouseover", moveFace);



//////////////////

// spin the title

const title = document.getElementById("title");
title.style.rotate = "0deg"

function spinTitle() {
    let rotate180 = [
        {transform: 'rotate(-180deg)'}
    ];
    let speed = {
        duration: 300,
        iterations: 1
    };
    function animationComplete() {
        if (title.style.rotate === "0deg") {
            title.style.rotate = "180deg"
        } else {
            title.style.rotate = "0deg"
        }
        console.log(title.style.rotate);
    }
    let titleMoving = title.animate(rotate180, speed);
    titleMoving.finished.then(() => animationComplete())
}
title.addEventListener("click", spinTitle);


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



