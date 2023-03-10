import Todos from './api/todos'
import './assets/css'

async function exec() {
    const todos = new Todos()

    const response = await todos.delete({
        id: 7
                
    })
    console.log(response)
}

//exec()