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