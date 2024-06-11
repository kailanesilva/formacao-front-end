// 1 - Métodos
const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au au");
    }
};

console.log(animal.nome);

animal.latir();

// 2 - Aprofundando em Métodos
const pessoa = {
    nome: "Kailane",

    getNome: function() {
        return this.nome;
    },

    setNome: function(novoNome) {
        this.nome = novoNome;
    },
};

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Joaquim");

console.log(pessoa.getNome());

// 3 - Prototype
const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length); // propriedade herdada pelo objeto pai

console.log(Object.getPrototypeOf(arr));

// 4 - Mais Sobre Prototype
const myObject = { 
    a: "b"
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);