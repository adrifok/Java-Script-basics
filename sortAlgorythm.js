const l = array.length;
  for (let i = 0; i < l; i++) {
      
      for (let j = 0; j < l -1 -i; j++) {
        if (array[j] > array[j+ 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          // if(array[i+1] > array[i]){
            // let swapElement = numeros[i+1];
            // numeros[i +1] = numeros[j];
            // numeros[j] = swapElement;
          }
        }
           sortPrimeHouses(array);
      }
  