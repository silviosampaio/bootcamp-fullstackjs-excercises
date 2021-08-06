export const calculate = () => {
  const $inputs = document.querySelectorAll('input[type=number]');
  return Array.from($inputs).reduce((total, input) => {
    return total + parseInt(input.value);
  }, 0);
};
