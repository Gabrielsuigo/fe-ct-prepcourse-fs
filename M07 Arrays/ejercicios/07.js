function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
var arrayN = []
for (var i = 0; i < array.length; i++) {
  if(typeof array[i] === 'string')
 arrayN.push(array[i].toUpperCase())
}
return arrayN
  
}

module.exports = convertirStringAMayusculas;
