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
    nome: "kailane",

    getNome: function() {
        return this.nome;
    },
};

console.log(pessoa.nome);

console.log(pessoa.getNome);