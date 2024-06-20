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

// 5 - Classes Básicas
const cachorro = {
    raca: null,
    patas: 4
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

console.log(bulldog.patas);

// 6 - Função Como Classe - Função Construtora
function criarCachorro(nome,raca){

    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro("Bob", "Vira lata");

console.log(bob);

const jack = criarCachorro("Jack", "Poodle");

console.log(jack);

console.log(Object.getPrototypeOf(jack));

// 7 - Funções Como Classe
function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky Siberiano");

// 8 - Métodos na Função Construtora
Cachorro.prototype.uivar = function(){
    console.log("Auuuuu!")
}

husky.uivar();

// 9 - Classes ES6
class CachorroClasse{
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new CachorroClasse("Jeff","Labrador");

console.log(jeff);

console.log(Object.getPrototypeOf(jeff));

// 10 - Mais Sobre Classes
class Caminhao {
    constructor(eixos, cor){
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "Vermelha");

console.log(scania);

scania.descreverCaminhao();

Caminhao.prototype.motor = 4.0;  //não tão usual mais é assim que adiciona uma nova propriedade a uma classe

console.log(scania.motor);