//Todos los que son multiples de 3 deben imprimir la palabra FIZZ
// Todos los que son multiples de 20 deben imprimir la palabra BUZZ
// Los que son multiples de 3 y de 5 deben imprimir FIZZBUZZ

const arreglo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];


for(let i = 0; i < arreglo.length; i++){


    if(arreglo[i] % 3 == 0 && arreglo[i] % 5 == 0){
         
      console.log(`${arreglo[i]} FIZZBUZZ`);
      continue;

    }

   else if(arreglo[i] % 3 == 0){
     
      console.log(`${arreglo[i]} FIZZ`);
      continue;

   }else if(arreglo[i] % 5 == 0){
     
      console.log(`${arreglo[i]} BUZZ`);
      continue;

   }else{
      
      console.log(`${arreglo[i]}`);

   }

}