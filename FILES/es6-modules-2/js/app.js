import { calculate as calcular } from './modules/math.js';
import form from './modules/form.js';

// VARIABLES
const $button = document.querySelector('button');

// EVENT LISTENERS
$button.addEventListener('click', calcular);
document.addEventListener('keydown', (event) => {
  if (event.key === 'i') {
    form.addInput();
  }
});
