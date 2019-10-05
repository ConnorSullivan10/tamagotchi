import '../../styles/eat.scss';
import utilities from '../helpers/utilities';

const increaseFullLength = () => {
  let currentLength = document.getElementById('full').value;
  if (currentLength < 90) {
    currentLength += 10;
    document.getElementById('full').value = currentLength;
  } else if ((currentLength > 90 && currentLength < 100)) {
    currentLength = 100;
    document.getElementById('full').value = 100;
  }
};

const decreaseFullLength = () => {
  let currentLength = document.getElementById('full').value;
  if (currentLength > 1) {
    currentLength -= 3;
    document.getElementById('full').value = currentLength;
  } else if (currentLength > 0 && currentLength < 3) {
    currentLength = 0;
    document.getElementById('full').value = currentLength;
  }
};

const eatPrinter = () => {
  const domString = `
<progress id="full" value="100" max="100"></progress>
<br>
<div id="buttonwrapper">
<h2>Eat</h2>
<button id="healthy">Salad</button>
<button id="unhealthy">Pie</button>
</div>
 `;
  utilities.printToDom('eat', domString);
  document.getElementById('healthy').addEventListener('click', increaseFullLength);
  document.getElementById('unhealthy').addEventListener('click', decreaseFullLength);
};

export default { eatPrinter };
