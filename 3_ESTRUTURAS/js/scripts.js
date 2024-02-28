// 1 - Variáveis
let nome = "Kailane";

console.log(nome);

nome = "Kailane Silva";

console.log(nome);

const idade = 19;

console.log(idade);

//variáveis como const não podem ter seus valores mudados. Uma vez atríbuido, não aceita mudanças.

console.log(typeof nome);

console.log(typeof idade);

// 2 - Mais Sobre Variáveis
//let 2teste = "inválido"
//let @teste = "inválido"

let a = 10, b = 20, c = 30;

console.log(a, b, c);

let nomecompleto = "Kailane Silva";

let nomeCompleto = "João da Silva";

console.log(nomecompleto);

console.log(nomeCompleto);

let _teste = "ok";
let $teste = "ok";

console.log(_teste, $teste);

// Nomes reservados - Jamais declarar variáveis com funcionalidades do JavaScript, como:
/* break case catch class const continue debbuger default delete do else enum export extends
false finally function if implements import interface in instanceof let new package
private protected public return static super switch this throw true try typeof
var void while with yield*
É possível unir ela a outra palavra pra formar a variável. Ex: let breakTeste = 1;*/

// 3 - Prompt
//const age = prompt("Digite a sua idade:");

//console.log(`Você tem ${age} anos.`);

// 4 - Alert
//alert("Testando a função alert");

//const z = 10;

//alert(`O número é ${z}`);

// 5 - Math
console.log(Math.max(5, 2, 1, 10));

console.log(Math.min(1, 2, 3, 4, 5));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

// 6 - Console
console.log("teste!");

console.error("Erro!");

console.warn("Aviso!");

// 7 - If
const m = 10;

if(m > 5){
    console.log("M é maior que 5!");
}

const user = "João";

if(user === "João"){
    console.log("Olá, João!");
}

if(user === "Maria"){
    console.log("Olá, Maria!");
}

console.log(user === "João", user === "Maria");