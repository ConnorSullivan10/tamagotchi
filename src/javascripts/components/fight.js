import '../../styles/fight.scss';
import utilities from '../helpers/utilities';

const increaseFightStrength = () => {
  let currentLength = document.getElementById('strength').value;
  if (currentLength < 99.1) {
    currentLength += 1;
    document.getElementById('strength').value = currentLength;
  } else if ((currentLength > 99 && currentLength < 100)) {
    currentLength = 100;
    document.getElementById('strength').value = 100;
  }
};

const decreaseFightStrength = () => {
  let currentLength = document.getElementById('strength').value;
  if (currentLength > 10) {
    currentLength -= 10;
    document.getElementById('strength').value = currentLength;
  } else if (currentLength > 0 && currentLength < 10.1) {
    currentLength = 0;
    document.getElementById('strength').value = currentLength;
  }
};

const fightPrinter = () => {
  const domString = `
<div id="fightButtonWrapper">
<h2 id="fightHeader">Fight</h2>
<button id="run">Flee</button>
<button id="violence">Jab</button>
</div>
<br>
<progress id="strength" value="100" max="100"></progress>
 `;
  utilities.printToDom('fight', domString);
  document.getElementById('run').addEventListener('click', increaseFightStrength);
  document.getElementById('violence').addEventListener('click', decreaseFightStrength);
};

export default { fightPrinter };
