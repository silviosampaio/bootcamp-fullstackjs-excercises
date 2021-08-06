const form = {
  addInput: () => {
    const $container = document.getElementById('input-container');
    const inputIndex = $container.children.length + 1;

    const $newInput = document.createElement('input');
    $newInput.placeholder = `Número ${inputIndex}`;
    $newInput.type = 'number';

    $container.appendChild($newInput);
  },
};

export default form;
