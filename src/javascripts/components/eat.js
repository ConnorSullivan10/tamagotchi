import '../../styles/eat.scss';
import utilities from '../helpers/utilities';

const increaseFullLength = () => {
  let currentLength = document.getElementById('myProgress').value;
  if (currentLength < 90) {
    currentLength += 10;
    document.getElementById('myProgress').value = currentLength;
  } else if ((currentLength > 90 && currentLength < 100)) {
    currentLength = 100;
    document.getElementById('myProgress').value = 100;
  }
};

const decreaseFullLength = () => {
  let currentLength = document.getElementById('myProgress').value;
  if (currentLength > 1) {
    currentLength -= 3;
    document.getElementById('myProgress').value = currentLength;
  } else if (currentLength > 0 && currentLength < 3) {
    currentLength = 0;
    document.getElementById('myProgress').value = currentLength;
  }
};

const eatPrinter = () => {
  const domString = `
<h2>Eat</h2>
<progress id="myProgress" value="100" max="100"></progress>
<br>
<button id="healthy">Healthy Food</button>
<button id="unhealthy">Unhealthy Food</button>
 `;
  utilities.printToDom('eat', domString);
  document.getElementById('healthy').addEventListener('click', increaseFullLength);
  document.getElementById('unhealthy').addEventListener('click', decreaseFullLength);
};


export default { eatPrinter };
