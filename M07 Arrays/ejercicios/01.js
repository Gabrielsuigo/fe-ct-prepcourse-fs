function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  var arrayNuevo = []
  for (let i = array.length -1; i >= 0; i--) {
    arrayNuevo.push(array[i])
  }
   return arrayNuevo 

   // otro con metodos

   // return array.reverse()
}

module.exports = invertirArray;
