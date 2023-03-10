import express, { request, response } from 'express'
import { User } from './interfaces/users'
import { v4 as uuid } from 'uuid'

const app = express()

app.use(express.json())

const users: User[] = []

app.get('/users', (request, response) => {
    // buscar no banco de dados os usuários
    
    // retornar os usuários

    // como não temos bd, escreveremos um retorno simples.

    return response.json(users)
})

app.post('/users', (request, response) => {
    // receber os dados dos usuários
    const {name, email} = request.body

    // criar um novo usuário
    const user = {id: uuid(), name, email }

    // registrar os dados do usuário criado
    users.push(user)

    // retornar os dados do usuário criado
    return response.json()
})

app.put('/users/:id', (request, response) => {
    // receber os dados do usuário
    const { id } = request.params
    const { name, email }= request.body

    // localizar o usuário, retornar um erro
    const userIndex = users.findIndex((user) => {user.id === id})

    // atualizar o usuário na base de dados
    if (userIndex < 0) {
        return response.status(404).json({error: 'User not found.'})
    }

    const editedUser = { id, name, email }
    users[userIndex] = editedUser

    // retorna os dados do usuário atualizado
    return response.json({editedUser})
})

app.delete('/users:id', (request, response) => {
    // localizar o usuário na base de dados
    const { id } = request.params

    // retornar erro caso o usuário não exista
    const userIndex = users.findIndex((user) => {user.id === id})

    // excluir usuário da base de dados
    if (userIndex < 0) {
        return response.status(404).json({error: 'User not found.'})
    }
    users.splice(userIndex, 1)

    //retornar status de sucesso
    return response.status(204).send()
})


/* }
}
app.listen('3333', () => {
    console.log('Back-end started!')
})
 */
