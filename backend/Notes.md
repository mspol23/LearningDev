# Montando Backend

$ npm init -y

# // Métodos HTTP -> GET | POST | PUT | DELETE.

```js

// http://localhost:3333/users

app.get('/users', (request, response) => {
    return response.json(['usuário 1', 'usuário 2'])
})



app.post('/users', (request, response) => {
    const body = request.body
    console.log(body)
    return response.json({ 
        message: 'Criando usuário!'
    })
})

app.put('/users/:id', (request, response) => {
    return response.json({
        message: 'Atualizando usuário!'
    })
})

app.delete('/users', (request, response) => {
    return response.json({
        message: 'Excluindo usuário!'
    })
})

```
