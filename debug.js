// Throw: Quando apresenta a declaração do throw, ele irá retornar a string declarada como se fosse um erro no código.

function verificarPalindromo(string) {
    if(!string) return "String inválida" ;

    return string === string.split ('').reverse().join('');
}

verificarPalindromo('cat');

console.log(verificarPalindromo('ana'))


function verificarPalindromo2(string) {
    if(!string) throw "String inválida" ;

    return string === string.split ('').reverse().join('');
}

verificarPalindromo2('');

console.log(verificarPalindromo2(''))

// try ... catch: É uma declaração que dentro do bloco try ele irá verificar o código, é se o código apresentar algum tipo de erro, ele irá ser capturado pela função catch, é o erro pode ser manipulado dentro do catch. O catch permite que possamos manipular todas as propriedades do erro.
 
function verificarPalindromo3(string) {
    if(!string) throw "String inválida" ;

    return string === string.split ('').reverse().join('');
}

function tryCatchExemplo (string) {
    try {
        verificarPalindromo3(string)
    }
    catch(e) {
        console.log(e)
    }
}

tryCatchExemplo('');
console.log(tryCatchExemplo(''))

//Finally:  Try ... catch pode também ser composto por finally. O finally e uma instrução que vai chamada independente se o código apresenta um erro ou não
 

function verificarPalindromo4(string) {
    if(!string) throw "String inválida" ;

    return string === string.split ('').reverse().join('');
}

function tryCatchExemplo2 (string) {
    try {
        verificarPalindromo3(string)
    }
    catch(e) {
        throw e;
    }
    finally {
        console.log('A string enviada foi:' + string)
    }
}

tryCatchExemplo2('cat')
console.log(tryCatchExemplo2(''))