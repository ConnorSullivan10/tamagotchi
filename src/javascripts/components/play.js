import '../../styles/play.scss';
import utilities from '../helpers/utilities';

const increaseFunLengthFitty = () => {
  let currentFunLength = document.getElementById('fun').value;
  if (currentFunLength < 51) {
    currentFunLength += 50;
    document.getElementById('fun').value = currentFunLength;
  } else if ((currentFunLength > 50 && currentFunLength < 100)) {
    currentFunLength = 100;
    document.getElementById('fun').value = 100;
  }
};

const increaseFunLengthToo = () => {
  let currentFunLength = document.getElementById('fun').value;
  if (currentFunLength < 98.1) {
    currentFunLength += 2;
    document.getElementById('fun').value = currentFunLength;
  } else if (currentFunLength > 97 && currentFunLength < 100) {
    currentFunLength = 100;
    document.getElementById('fun').value = 100;
  }
};

const playPrinter = () => {
  const domString = `
<progress id="fun" value="50" max="100"></progress>
<br>
<div id="playButtonWrapper">
<button id="superFun">Plank</button>
<button id="slightlyFun">Dab</button>
<h2 id="playHeader">Play</h2>
</div>
 `;
  utilities.printToDom('play', domString);
  document.getElementById('superFun').addEventListener('click', increaseFunLengthFitty);
  document.getElementById('slightlyFun').addEventListener('click', increaseFunLengthToo);
};

export default { playPrinter };
