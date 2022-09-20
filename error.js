function validaArray(arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw new TypeError("O array prescisa ser do tipo object");
    
        if(typeof num !== 'number') throw new TypeError("Num prescisa ser do tipo number");
    
        if(arr.length !== num) throw new RangeError("Tamanho Inválido");

        return arr;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro e um ReferenceError")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError")
            console.log(e.message)
        } else {
            console.log("Ocorreu um tipo de erro não esperado:" + e)
        }
    } 
}
//ReferenceError
console.log(validaArray());

//TypeError
console.log(validaArray([], 'a'));

//RangeError
console.log(validaArray([], 5));

//array sem erro
console.log(validaArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10));