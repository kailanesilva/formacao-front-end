// 1 - Criando uma função
function minhaFuncao() {
    console.log("Testando");
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function (){
    console.log("Função em variável");
}

minhaFuncaoEmVariavel();

function funcaoComParametro (txt){
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Imprimindo alguma coisa");
funcaoComParametro("Outra função");

// 2 - Return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1,n2){
    return n1 + n2;
}

const resultado = soma(a,b);

console.log(resultado);

console.log(soma(c,d));

// 3 - Escopo da Função
let y = 10;

function testandoEscopo(){
    let y = 20;
    console.log(`Y dentro da função é: ${y}`);
}
testandoEscopo();
console.log(`Y fora da função é: ${y}`);