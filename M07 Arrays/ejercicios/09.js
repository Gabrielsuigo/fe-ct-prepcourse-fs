function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var contar = 0
  for (let i = 0; i < array.length; i++) {
if(array[i] > 10){
  contar ++
}
  }
  return contar
}

module.exports = contarElementosMayoresA10;
