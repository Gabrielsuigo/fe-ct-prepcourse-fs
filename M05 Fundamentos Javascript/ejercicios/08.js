function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:

  return Number.isInteger(numero)
  // if (typeof numero !== 'number'){return false
  //  }else if (numero % 1 === 0) return true
  //  return false
  
  
}

module.exports = esNumeroEntero;