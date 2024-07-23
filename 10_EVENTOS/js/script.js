// 1 - Adicionando Eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function() {
    console.log("Clicou aqui!");
})

// 2 - Removendo Evento
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");

    secondBtn.removeEventListener("click", imprimirMensagem);
})

// 3 - Argumento do Evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})

// 4 - Propagação
const containerBtn = document.querySelector("#btn-container");

const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2");
})

// 5 - Removendo Evento Padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Não alterou a página");
})

// 6 - Eventos de Tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
})

document.addEventListener("keydown", (e) => {
    console.log(`Pressionou a tecla ${e.key}`);
})

// 7 - Eventos de Mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão");
})

mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou o botão");
})

mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique duplo");
})