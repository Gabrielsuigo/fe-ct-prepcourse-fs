function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var tablaN = []
  for (var i = 0; i < 11; i++) {
    tablaN.push(6 * i)
  }
  return tablaN
    
}

module.exports = tablaDelSeis;
