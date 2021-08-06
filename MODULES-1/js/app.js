import form, { updateResult } from './modules/form.js';
import { calculate as mathCalculate } from './modules/math.js';

// VARIABLES
const $button = document.querySelector('button');
const calculate = null;

// EVENT LISTENERS
$button.addEventListener('click', () => {
  const result = mathCalculate();
  updateResult(result);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'i') {
    form.addInput();
  }
});
