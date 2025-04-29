'use strict'

import { getMusicas, getMusicaPorId, postMusica } from "./musica.js"

function criarCard(musica) {
    const container = document.getElementById('container')

    const card = document.createElement('div')
    card.classList.add('card-contato')

    card.innerHTML = `
        <img src="${musica.foto_capa}" alt="capa da música">
        <h2>${musica.nome}</h2>
        <p>${musica.data_lancamento}</p>
    `
    container.appendChild(card)
}

async function exibirMusicas() {
    const musicas = await getMusicas()
    const container = document.getElementById('container')
    container.replaceChildren()
    musicas.forEach(criarCard)
}

async function exibirPesquisa(evento) {
    const container = document.getElementById('container')

    if (evento.key === 'Enter') {
        const musicas = await getMusicaPorId(evento.target.value)
        container.replaceChildren()
        musicas.forEach(criarCard)
    }
}

function toggleFormulario() {
    const form = document.getElementById('form-musica')
    form.classList.toggle('hidden')
}

async function salvarMusica(evento) {
    evento.preventDefault()

    const novaMusica = {
        nome: document.getElementById('nome').value,
        duracao: `1970-01-01T00:${document.getElementById('duracao').value}.000Z`,
        data_lancamento: document.getElementById('data_lancamento').value + "T00:00:00.000Z",
        foto_capa: document.getElementById('foto_capa').value,
        letra: document.getElementById('letra').value
    }

    const sucesso = await postMusica(novaMusica)

    if (sucesso) {
        alert('Música cadastrada com sucesso!')
        document.getElementById('formulario-musica').reset()
        document.getElementById('form-musica').classList.add('hidden')
        exibirMusicas()
    } else {
        alert('Erro ao cadastrar a música.')
    }
}

exibirMusicas()

document.getElementById('nome-musica')
    .addEventListener('keydown', exibirPesquisa)

document.getElementById('btn-cadastrar')
    .addEventListener('click', toggleFormulario)

document.getElementById('formulario-musica')
    .addEventListener('submit', salvarMusica)
