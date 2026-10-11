
/* 
const titulo = document.querySelector("h1");

function mouseSobre(){
    titulo.style.color = "orange";
}

function mouseSaida(){
    titulo.style.color = "black";
}

titulo.addEventListener();
*/

//funcoes da calculadora:

const expressaoVisor = document.querySelector("#expressao");
const resultadoVisor = document.querySelector("#resultado");
const botoes = document.querySelectorAll(".botoes button");

const botaoHistorico = document.querySelector("#btn-historico");
const painelHistorico = document.querySelector("#painel-historico");
const fecharHistorico = document.querySelector("#fechar-historico");
const listaHistorico = document.querySelector("#lista-historico");
const limparHistorico = document.querySelector("#limpar-historico");

let expressao = "";
let historico = [];

function atualizarVisor() {
    expressaoVisor.textContent = expressao || "0";
}

function mostrarHistorico() {
    listaHistorico.innerHTML = "";

    if (historico.length === 0) {
        listaHistorico.innerHTML = "<p>nenhuma conta ainda!</p>";
    } else {
        historico.forEach(function(conta) {
            const item = document.createElement("button");

            item.className = "item-historico";
            item.textContent = conta.expressao + " = " + conta.resultado;

            item.addEventListener("click", function() {
                expressao = conta.resultado;
                resultadoVisor.textContent = "= " + conta.resultado;
                atualizarVisor();
            });

            listaHistorico.appendChild(item);
        });
    }
}

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const acao = botao.dataset.action;
        const valor = botao.dataset.value;

        if (acao === "clear") {
            expressao = "";
            resultadoVisor.textContent = "";
        } else if (acao === "backspace") {
            expressao = expressao.slice(0, -1);
            resultadoVisor.textContent = "";
        } else if (acao === "equals") {
            try {
                const conta = expressao
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/,/g, ".");

                if (!conta || !/^[0-9+\-*/().\s]+$/.test(conta)) {
                    throw new Error("Conta inválida");
                }

                const resultado = eval(conta);

                if (!Number.isFinite(resultado)) {
                    throw new Error("Resultado inválido");
                }

                const valorFinal = String(
                    Number(resultado.toPrecision(12))
                ).replace(".", ",");

                resultadoVisor.textContent = "= " + valorFinal;

                historico.unshift({
                    expressao: expressao,
                    resultado: valorFinal
                });

                mostrarHistorico();
            } catch {
                resultadoVisor.textContent = "= Erro";
            }
        } else if (valor !== undefined) {
            expressao += valor;
            resultadoVisor.textContent = "";
        }

        atualizarVisor();
    });
});

botaoHistorico.addEventListener("click", function() {
    painelHistorico.hidden = false;
});

fecharHistorico.addEventListener("click", function() {
    painelHistorico.hidden = true;
});

limparHistorico.addEventListener("click", function() {
    historico = [];
    mostrarHistorico();
});

atualizarVisor();
mostrarHistorico();

// pro comentario:
const formulario = document.querySelector("#form-comentario");
const nome = document.querySelector("#nome");
const comentario = document.querySelector("#comment");
const listaComentarios = document.querySelector("#lista-comentarios");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if (nome.value.trim() === "" || comentario.value.trim() === "") {
        alert("Preencha seu nome e comentário!");
    } else {
        adicionarComentario();
    }
});

function adicionarComentario() {
    const novoComentario = document.createElement("div");
    const nomeComentario = document.createElement("strong");
    const textoComentario = document.createElement("p");

    novoComentario.classList.add("comentario");

    nomeComentario.textContent = nome.value;
    textoComentario.textContent = comentario.value;

    novoComentario.appendChild(nomeComentario);
    novoComentario.appendChild(textoComentario);

    const mensagemInicial = listaComentarios.querySelector("p");

    if (mensagemInicial && !mensagemInicial.classList.contains("comentario")) {
        mensagemInicial.remove();
    }

    listaComentarios.appendChild(novoComentario);

    formulario.reset();
}
