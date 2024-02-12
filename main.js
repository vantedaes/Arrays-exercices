const fruits = ["Apple", "Orange", "Kiwi", "Banana"];
// // const fruitsSliced = fruits.slice(1, 4);
// // console.log(fruitsSliced);

// // fruits.splice(1, 0, "Pear");
// // console.log(fruits);

//  const vegetables = ["Beans", "Lettuce", "Carrot", "Potato", "Onion"]
//  const greenGrocery = fruits.concat(vegetables)
//  console.log(greenGrocery)

//  const hour = "14:58"
//  const arrayHours = hour.split(":")
//  console.log(arrayHours[1])

//.join() => junta los elementos de un array y devuelve un string
// console.log(fruits.join());
// console.log(fruits.join(""));
// console.log(fruits.join(" "));

// console.log(fruits.sort());
// // ['Apple', 'Banana', 'Kiwi', 'Orange']

//Crear una función `obtenerMenor` que tome como argumento un array de números `numeros` y devuelva el menor de ellos. Ejemplo:

// const obtenerMenor = [5, 7, 99, 34, 54, 2, 12];

// const obtenerMenor = (numeros) => {
//   return Math.min(...numeros);
// };

// console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12])); // 2*/

//sumar(numeros)
//Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:

const sumarNumeros = (numeros) => {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
};

console.log(sumarNumeros([5, 7, 10, 12, 24])); // 58
