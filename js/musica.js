'use strict'

async function getMusicas(){
    const url = 'http://localhost:8080/v1/controle-musicas/musica'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function getMusicaPorId(id){
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function  postMusica(musica) {
    const url = 'http://localhost:8080/v1/controle-musicas/musica'
    const options ={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(infoContact)
    }

    const response = await fetch(url, options)
    return response.ok
}

async function  putMusica(id, musica) {
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`
    const options ={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(infoContact)
    }

    const response = await fetch(url, options)
    return response.ok

}

async function deleteMusica(id) {
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`
    const options ={
        method: 'DELETE',
    } 
    
    const response = await fetch(url, options)
    return response.ok
}

const novaMusica = {
            "id": 1,
            "nome": "teste",
            "duracao": "1970-01-01T00:00:04.000Z",
            "data_lancamento": "2018-01-18T00:00:00.000Z",
            "foto_capa": "http:/imagem.jpg",
            "letra": "teste da musica"
}