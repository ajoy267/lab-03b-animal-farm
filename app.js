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
    horseImg.style.transform = 'rotate(360deg)';
    horseImg.style.transition = '2s ease';
});

catImg.addEventListener('click', ()=>{
    catSound.play();
    catImg.style.transform = 'rotate(360deg)';
    catImg.style.transition = '2s ease';
});

dogImg.addEventListener('click', ()=>{
    dogSound.play();
    dogImg.style.transform = 'rotate(360deg)';
    dogImg.style.transition = '2s ease';
});

document.addEventListener('keydown', (event)=> {
    if (event.key === 'h'){
        horseSound.play();
        horseImg.style.transform = 'rotate(360deg)';
        horseImg.style.transition = '2s ease';
    } if (event.key === 'c'){
        catSound.play();
        catImg.style.transform = 'rotate(360deg)';
        catImg.style.transition = '2s ease';
    } if (event.key === 'd'){
        dogSound.play();
        dogImg.style.transform = 'rotate(360deg)';
        dogImg.style.transition = '2s ease';
    }
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
