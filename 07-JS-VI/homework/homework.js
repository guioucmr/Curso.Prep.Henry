// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
  cb();
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  var resultado = 0;
  for(i = 0; i < numeros.length; i++){
    resultado = resultado + numeros[i]
  }
  return cb(resultado);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  for( i = 0; i< array.length; i++){
   cb(array[i]);
  }
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  var nuevoarray= []
  for (i = 0; i< array.length; i++){
    nuevoarray[i]=cb(array[i])
  }
  return nuevoarray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
