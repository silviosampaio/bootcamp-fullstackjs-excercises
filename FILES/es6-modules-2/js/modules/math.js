export const calculate = () => {
  const $output = document.querySelector('h1');
  const $inputs = document.querySelectorAll('input[type=number]');
  const result = Array.from($inputs).reduce((total, input) => {
    return total + parseInt(input.value);
  }, 0);

  $output.innerText = `O resultado é ${result}`;
};
