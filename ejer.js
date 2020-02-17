const array1 = [1,2,3,4,5,];
const array2 = [2,3,4,5,6,];
const array3 = [3,4,5,6,7];
 
function mergeArrays(...array){
    let resultado = [];
    for(let i = 0; i<array.length; i++){
resultado = resultado.conca(array[i]);
    }
    return resultado;
}