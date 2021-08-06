const form = {
  addInput: () => {
    const $container = document.getElementById('input-container');
    const inputIndex = $container.children.length + 1;

    const $newInput = document.createElement('input');
    $newInput.type = 'number';
    $newInput.placeholder = `Número ${inputIndex}`;

    $container.appendChild($newInput);
  },
};

export const updateResult = (result) => {
  const $output = document.querySelector('h1');
  $output.innerText = `O resultado é ${result}`;
};

export default form;
