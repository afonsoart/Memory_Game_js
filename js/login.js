const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');
const audio = new Audio("../audio/former.mp3");

const validateInput = ({ target }) => {
   if (target.value.length > 2) {
    button.removeAttribute('disabled');
    return;
     }
    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
   event.preventDefault();
   
   localStorage.setItem('player', input.value);
   window.location = 'pages/game.html';
  
}

function playMusic () {
   audio.play();
 }
 
 function stopMusic () {
   audio.pause();
 }

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);