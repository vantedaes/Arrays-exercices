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

//========================================================================================================
//EJERCICIOS
//========================================================================================================

//Crear una función `obtenerMenor` que tome como argumento un array de números `numeros` y devuelva el menor de ellos. Ejemplo:

// const obtenerMenor = [5, 7, 99, 34, 54, 2, 12];

// const obtenerMenor = (numeros) => {
//   return Math.min(...numeros);
// };

// console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12])); // 2*/

//========================================================================================================

//sumar(numeros)
//Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:

// const sumarNumeros = (numeros) => {
//   let suma = 0;
//   for (let i = 0; i < numeros.length; i++) {
//     suma += numeros[i];
//   }
//   return suma;
// };

// console.log(sumarNumeros([5, 7, 10, 12, 24])); // 58

//=====================================================================================================

// contiene(numero, numeros)
// Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

// const contiene = (numero, numeros) => {
//   for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] === numero) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])); // true
// console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])); // false

//=====================================================================================================

// invertirCaso(string)
// Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

// const invertirCaso = (letters) => {
//   let resultado = "";
//   for (let i = 0; i < letters.length; i++) {
//     if (letters[i] === letters[i].toUpperCase()) {
//       resultado += letters[i].toLowerCase();
//     } else {
//       resultado += letters[i].toUpperCase();
//     }
//   }
//   return resultado;
// };

// console.log(invertirCaso("Ada Lovelace")); // 'aDA lOVELACE'
// console.log(invertirCaso("feliz cumple")); // 'FELIZ CUMPLE'
// console.log(invertirCaso("jAvAsCrIpT")); // 'JaVaScRiPt'

//=====================================================================================================

// gano(tragamonedas)
// Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.

// const gano = (tragamonedas) => {
//   for (let i = 0; i < 5; i++) {
//     if (tragamonedas[i] !== "⭐️") {
//       return true;
//     }
//     return false;
//   }
// };

// const gano = (tragamonedas) => {
//   for (let i = 0; i < 5 && i < tragamonedas.length; i++) {
//     if (tragamonedas[i] !== tragamonedas[0]) {
//       return false; // Si un símbolo no es igual al primero, devuelve false inmediatamente
//     }
//   }
//   return true; // Si todos los símbolos son iguales, devuelve true
// };
// console.log(gano(["⭐️", "⭐️", "⭐️", "💫", "✨"])); // false
// console.log(gano(["💫", "💫", "💫", "💫", "💫"])); // true
// console.log(gano(["💫", "💫", "💫", "💫", "💫", "⭐️"])); // true

// estanJuntos(personajes)
// Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:

// const estanJuntos = (personajes) => {
//   for (let i = 0; i < personajes.length; i++) {
//     if (personajes[i] === "Sam") {
//       if (personajes[i + 1] === "Frodo" || personajes[i - 1] === "Frodo") {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// console.log(estanJuntos(["Sam", "Frodo", "Legolas"])); // true
// console.log(estanJuntos(["Aragorn", "Frodo", "Frodo"])); // false
// console.log(estanJuntos(["Sam", "Orco", "Frodo"])); // false

// Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

const separar = (animalitos) => {
  let perros = [];
  let gatos = [];

  for (let i = 0; i < animalitos.length; i++) {
    if (animalitos[i] === "🐶") {
      perros.push("🐶");
    } else if (animalitos[i] === "🐱") {
      gatos.push("🐱");
    }
  }
  return perros.join("") + gatos.join("");
};

console.log(separar("🐶🐱🐶🐱🐱🐶🐶")); // '🐶🐶🐶🐶🐱🐱🐱'
