import '../../styles/sleep.scss';
import utilities from '../helpers/utilities';

const catNap = () => {
  let currentLength = document.getElementById('energy').value;
  if (currentLength < 51) {
    currentLength += 50;
    document.getElementById('energy').value = currentLength;
  } else if ((currentLength > 50 && currentLength < 100)) {
    currentLength = 100;
    document.getElementById('energy').value = 100;
  }
};

const rumpelStilsken = () => {
  let currentLength = document.getElementById('energy').value;
  if (currentLength < 40.1) {
    currentLength += 60;
    document.getElementById('energy').value = currentLength;
  } else if (currentLength > 39 && currentLength < 100) {
    currentLength = 100;
    document.getElementById('energy').value = currentLength;
  }
};

const sleepPrinter = () => {
  const domString = `
<div id="sleepButtonWrapper">
<button id="lightSleep">Nap</button>
<button id="heavySleep">Coma</button>
<h2 id="sleepHeader">Sleep</h2>
</div>
<br>
<progress id="energy" value="50" max="100"></progress>
 `;
  utilities.printToDom('sleep', domString);
  document.getElementById('lightSleep').addEventListener('click', catNap);
  document.getElementById('heavySleep').addEventListener('click', rumpelStilsken);
};


export default { sleepPrinter };
