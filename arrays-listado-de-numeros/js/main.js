function get100Numbers() {
  const numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
  return numbers;
}

const numeros = get100Numbers(); // las funciones con return hay que almacenarlas en una constante?

console.log(numeros);

for (let i = 0; i <= 100; i++) {
  console.log(numeros[i]);
}


function getReversed100Numbers() {
  const guardarNumeros = get100Numbers()
  return numeros.reverse()
}

console.log(getReversed100Numbers())

for (let i = 0; i <= 100; i++) {
  console.log(numeros[i]);
}