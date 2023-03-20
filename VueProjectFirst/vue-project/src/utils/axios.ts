import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:3333' // Nos componentes, então, passaremos apenas a rota '/users', pois o endereço de partida das requisições já está definido.
})