'use strict'

async function getMusicas(){
    const url = 'http://localhost:8080/v1/controle-musicas/musica'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function getMusica(id){
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function  postMusica(infoContact) {
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

async function  putMusica(id, infoContact) {
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
    "nome":"teste",
    "duracao": "03:00",
    "data_lancamento": "2018-01-18",
    "link": "http://linkmusica.mp3",
    "foto_capa": "http://iamgem.jpg",
    "letra": "teste na musica"
}