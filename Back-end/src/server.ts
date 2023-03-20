import express from 'express'
import {v4 as uuid} from 'uuid'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors()) // AQUI ENTRARIA O DOMÍNIO DO FRONT-END HABILITADO A REALIZAR REQUISIÇÕES AO BACK-END. COMO NÃO TEMOS, O PADRÃO É PERMITIR TODOS ATRAVÉS DO "*", MAS O CORS JÁ O TEM COMO PADRÃO, PORTANTO, DEIXAREMOS VAZIO.

interface User {
    id: string
    name: string
    email: string
}

const users: User[] = []

// Métodos HTTP --> GET | POST | PUT | DELETE

// Endereço http durante o desenvolvimento:
// http://localhost:3333

// Criando método GET:
app.get('/users', (request, response) => {
    return response.json(users)
})

app.post('/users', (request, response) => {
    const {name, email} = request.body
    const userIndex = users.findIndex((user) => user.email == email)
    if (userIndex != -1) {
        return response.status(409).json({ error: 'Usuário já existe no banco de dados!'})
    }
    const user = {id: uuid(), name, email}
    users.push(user)
    return response.json(user)
})



app.put('/users/:id', (request, response) => {
    const {id} = request.params
    const {name, email} = request.body
    const userIndex = users.findIndex((user) => user.id === id)
    if (userIndex < 0) {
        return response.status(404).json({ error: 'User not found!'})
    }
    
    const user = { id, name, email } 
    users[userIndex] = user
    return response.json(user)
   
})

app.delete('/users/:id', (request, response) => {
    const { id } = request.params
    const userIndex = users.findIndex((user) => user.id === id)
    if (userIndex < 0) {
        return response.status(404).json({ error: 'User not found!'})
    }
    users.splice(userIndex, 1) 
    return response.status(204).send()
})

app.listen('3333', () => {
    console.log('Back-end started!')
    console.log('Listening http://localhost:3333')
})
