// EXEMPLO BÁSICO
function multiplica(a, b) {
  return a * b;
}

function aoQuadrado(numero) {
  return multiplica(numero, numero);
}

function prints(number) {
  return console.log(aoQuadrado(number));
}

prints(4);

// EXEMPLO ASSÍNCRONO COM VENDOR API 1
setTimeout(function () {
  prints(4);
}, 2000);

// EXEMPLO ASSÍNCRONO COM VENDOR API 2
fetch('https://viacep.com.br/ws/91260000/json/')
  .then((data) => data.json())
  .then((json) => {
    console.log(json);
  });

console.log('CHEGOU AQUI');
