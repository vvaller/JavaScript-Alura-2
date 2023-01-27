// Estrutura para funcionamento dos botões de ajuste do robo

const listaControle = document.querySelectorAll('[data-controle]');
const estatistica = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

listaControle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca, evento.target.textContent);
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');

    if (operacao === '+') {
        peca.value = parseInt(peca.value) + 1;
    } else {
        peca.value = parseInt(peca.value) - 1;
    }
}

function atualizaEstatistica(peca, operador) {
    estatistica.forEach((elemento) => {
        if (operador === '+') {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        } else {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        }
    })
}

// Estrutura para troca de cor do robo

const robo = document.querySelector('.robo');
var contador = 0;

robo.addEventListener('click', () => {
    contador++;
    mudaimagem();
})

function mudaimagem() {
    if (contador <= 5) {
        robo.src = 'img/robotron' + contador + '.png';
    } else {
        contador = 0;
    }

}
