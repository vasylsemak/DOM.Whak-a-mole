let score = 0;
const screenScore = document.getElementById('score');
const holes = Array.from(document.getElementsByClassName('hole'));

const moleToggler = () => {
  const randomHole = Math.floor(Math.random() * holes.length);
  holes[randomHole].classList.toggle('mole');
};
const runMoleToggler = () => setInterval(moleToggler, 200);
runMoleToggler();

document.getElementById('whack-a-mole').addEventListener('click', event => {
  if (event.target.classList.contains('mole')) {
    event.target.classList.remove('mole');
    score++;
    screenScore.innerText = score;
  }
  if (score === 6) {
    let won = document.getElementById('won');
    won.innerText = 'YOU WON A PRIZE!!!';

    setTimeout(() => {
      score = 0;
      screenScore.innerText = score;
      won.innerText = '';
    }, 2000);
  }
});
