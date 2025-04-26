let numbers = [1, 2, 3, 4, 5]
let acumulador = 0
/*let suma = numbers [0] + numbers [1] + numbers [2] + numbers [3] + numbers [4]
let media = suma/5 */
numbers[5] = 6

for (let i=0; i<6; i++){
  acumulador += numbers [i]
}

let media = acumulador/6

console.log(media)


function average (numbers){
  let acumulador = 0
  for (let i=0; i < numbers.length; i++){
    acumulador += numbers[i]
  }

  let media = acumulador/numbers.length

  return media
}

console.log (average (numbers))

console.log (average ([3, 6, 9]))


