console.log('aula de programacao web');

//variaveis basicas no js
const nome='mirelle';
let idade = 26;

//console.log("oi meu nome é ",nome);
console.log(idade);

function imprimeNome(){
    //funcao aqui
    console.log("oi meu nome é "+nome);
}

// pega ao id
//const titulo = document.getElementById("titulo-principal");

//pega a tag h1
//no get selector pode passar um id,uma classe e uma tag
const titulo= document.querySelector("#titulo-principal");

/* titulo.textContent = "Meu blog de JavaScript";
titulo.style.color = "green";

const botao = document.querySelector("#btn");

function mudarTituto(){
    botao.textContent = "Titulo mudado";
}

botao.addEventListener("click", imprimeNome);*/

const mudarBotaoTitulo = document.querySelector("#btn");
const tituloPrincipal = document.querySelector("h1");

//definir o que a funcao vai fazer
function mudarTitulo(){
    console.log("botao clicado!!!!");
    tituloPrincipal.textContent = " Blog de outras coisas";
    tituloPrincipal.style.color = "orange";
}

mudarBotaoTitulo.addEventListener("click", mudarTitulo);

// adicionar borda vermelha no post principal
const addBorda = document.querySelector("#post-button");

function addBordaPost(){
    const postPrincipal = document.querySelector(".post");
    postPrincipal.style.border = "8px solid red";
}
addBorda.addEventListener("click", addBordaPost);

function saudar(nome){
    console.log("oi, " +nome+"seja bem vindo!");
}
saudar("mizi");

function somar(a,b){
    const result = a+b;
    console.log("o resultado é = "+result);
}
somar(5,5);

function somarComRetorno(a,b){
    return a+b;
}

// comentarios
const form = document.querySelector("#comment-form");
const commentInput = document.querySelector("#comment-input");
const commentsSection = document.querySelector("#comments-section")

function addComentario(event){
    //a pag n recarrega quando envia o formulario
    event.preventDefault();
    //console.log("formulario enviado sem recarregar");

    //pega o texto digitado pelo usuario
    const textoDoComentario = commentInput.value;

    if(textoDoComentario == ""){
        alert("digite um comentário antes de enviar ;))");
        return;
    }

    //cria novo paragrafo
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = textoDoComentario;

    //add comentario na seção de comentarios
    commentsSection.appendChild(novoParagrafo);

    commentInput.value="";
}

form.addEventListener('submit', addComentario);