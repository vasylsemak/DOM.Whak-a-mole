let score = 0;
const holes = Array.from(document.getElementsByClassName('hole'));

function moleToggler() {
  let randomHole = Math.floor(Math.random() * holes.length);
  holes[randomHole].classList.toggle('mole');
}

const runMoleToggler = () => setInterval(moleToggler, 100);

runMoleToggler();
