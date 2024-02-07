function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
var resultado = array.map(function(elem1, elem2){
  
  return elem1 * elem2
})
return resultado

  }
//   var nuevoArray = []
//   for (let i = 0; i < array.length; i++) {
//     nuevoArray.push(array[i] * i)
//   }
//    return nuevoArray 
// }

module.exports = multiplicarElementosPorIndice;
