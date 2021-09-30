// import functions and grab DOM elements
const horseImg = document.getElementById('horse');
const catImg = document.getElementById('cat');
const dogImg = document.getElementById('dog');
const catSound = document.getElementById('cat-audio');
const dogSound = document.getElementById('dog-audio');
const horseSound = document.getElementById('horse-audio');
// initialize global state
// set event listeners 
horseImg.addEventListener('click', ()=>{
    horseSound.play();
});

catImg.addEventListener('click', ()=>{
    catSound.play();
});

dogImg.addEventListener('click', ()=>{
    dogSound.play();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'h'){
        horseSound.play();
    } if (event.key === 'c'){
        catSound.play();
    } if (event.key === 'd'){
        dogSound.play();
    }
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
