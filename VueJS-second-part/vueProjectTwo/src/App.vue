<script lang="ts">
import { defineComponent, resolveTransitionHooks } from 'vue';

interface Todo {
    text: string
    done: boolean
}

export default defineComponent({
    data() {
        return {
            todos: [] as Todo[],
            
        }
    },
    created() {
        this.todos = [
            { text: 'Estudar Typescript', done: true },
            { text: 'Lavar os pratos', done: false },
            { text: 'Aprender Nuxt.js', done: true }
        ]
    },

    computed: {
        doneTodos(): Todo[] {
            return this.todos.filter((todo) => todo.done)
        }
    },

    watch: {
        allDoneMessage(n, o) {
            const finished = n.some(({done}) => done)

            if (finished) {
                console.warn('Finalmente!')
            }
        }
    },
    
    methods: {
        // .map() pega cada item do array (neste caso, o array possui objetos e text é uma propriedade dos objetos deste array) e cria um novo array aplicando o código de uma função callback.
        checkIfAllDone() {
            this.todos = this.todos.map(({text}) => {
                return { text, done: true }
            })
        }
    }
   
})
</script>

<template>
  
  <p v-for="todo in doneTodos">{{ todo.text }}</p>
  <button type="submit" @click="checkIfAllDone">Marcar todos como Concluídos</button>

</template>


