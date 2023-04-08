# Avançando no Vue

## Methods
```vue
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

    data() {
        return {
            name: 'John',
            lastName: 'Doe'
        }
    },

    // Computed Property:
     computed: {

        //Propriedade computada é uma função, que a boa prática recomenta ser tipada.
        fullName(): string {
            // Não há necessidade de existir apenas a linha return. Podem ser inseridas linhas de códigos entre a declaração e o retorno.
            return `${this.name} ${this.lastName}`

        }
     }
})
</script>

<template>
<h1>{{ fullName }}</h1>
</template>
```

```vue
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
```

## Diretivas

```vue
<template>
    <h1>Teste {{ message }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            message: 'de aprendizado.'
        }
    },

    // Estes dois componentes não têm acesso à DOM.

    // Sempre serão executados nesta ordem, independente da parte do código em que estejam.

    // O estado corresponde ao momento do recurso. P. Ex. Antes da criação, a propriedade message não possui valor atribuído, portanto, não adianta tentar solicitar um console.log para sabe seu valor, pois este será undefined.

    beforeCreate() {
        console.log(this.message)
    },

    created() {
        console.log('Depois da criação!')
    },

    // Estes ocorrem são computados após os dois acima.

    // O termo mounted refere-se à DOM.

    beforeMounted() {

    },

    mounted() {

    },
    
    beforeUpdate() {

    },

    updated() {

    },

    beforeUnmount() {

    },

    unmounted() {
        
    }
})
</script>

```
```vue

<template>

    <!-- Nesta aula será mostrado o v-model, que torna o data bind bidirecional, isto é, o fluxo não será apenas do script para o html (através da interpolação {{  }}, mas também ocorrerá do html para o script.) -->

    <form action="">
        <section class="inputs">
            <input type="text" placeholder="Nome" v-model.lazy="name"><br>
            <input type="number" placeholder="Idade" v-model.number="age"> <br>
            <textarea name="description" id="" cols="30" rows="8" placeholder="Decrição" v-model.trim="message"></textarea>
        </section>
        <section>
            <input type="checkbox" name="newsletter" v-model="newsletter"> Newsletter
            <!-- <label for="newsletter">newsletter</label> -->
        </section>
        <section>
            <input type="radio" name="color" value="vermelho" v-model="color"/> Vermelho
            <input type="radio" name="color" value="verde" v-model="color"/> Verde
            <input type="radio" name="color" value="azul" v-model="color"/> Azul
        </section>
        <section>
            <select v-model="fruit">
                <option disable selected value="">Escolha sua fruta</option>
                <option value="uva">Uva</option>
                <option value="banana">Banana</option>
                <option value="morango">Morango</option>
            </select>
        </section>
    </form>

    <!-- No script, criou-se um código para manipular esta diretiva (line 58). Normalmente este tipo de manipulação de estilo seria realizada por CSS. -->
    <p v-highlight:background.shadow="'blue'">Nome: {{ name }}</p>
    <p :class="{'textBlue': textBlue, 'textRed': textRed}">Idade: {{ age }}</p>
    <p>Mensagem: {{ message }}</p>
    <p>Newsletter: {{ newsletter }}</p>
    <p>Color: {{ color }}</p>
    <p>Fruta: {{ fruit }}</p>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({

    data() {
        return {
            name: '',
            age: 0,
            message: '',
            newsletter: false,
            color: '',
            fruit: '',
            textBlue: tre  false,
            textRed: false
        }
    }

    // Criando diretivas:
    // Toda essa diretiva será colocada em um componente, para poder ser aplicada em outras tags.
    /* directives: {

        // Podemos criar quantas diretivas quisermos.

        highlight: {

            beforeMount(el: HTMLElement, binding) {
                // 'el' corresponde ao elemento html onde incluiremos a tag. Precisa ser tipado, pois o Vue entende que poderá assumir diversos valores.
                //'binding' é por onde acessaremos o valor da diretiva, argumento e modificadores.
                if (binding.arg === 'background') {
                    el.style.background = binding.value
                } else {
                    el.style.color = binding.value
                }
                if (binding.modifiers.shadow) {
                    el.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.5)'
                }
            },
        }
    } */
})

</script>

<style scoped>

.textBlue {
    color: blue
}

.textRed {
    color: red
}

</style>
```

## Classes Dinâmicas

### Com array (melhor prática)

```vue
<template>
    <h1 :class="['static', {'text-danger': hasError}, className ]"> Title</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonStyled from '@/components/buttomStyled.vue'

export default defineComponent({
    
    data() {
        return {
            isActive: true,
            hasError: true,

            // Outra forma de passar criar uma classe para o elemento é simplesmente nomeá-la como string.
            className: 'young-silva'

        }
    }
})
</script>
```
## Componentes (primeiros passos); Style Scoped; Estilizando Componentes e filhos;

### conteúdo do arquivo buttonStyled.vue, que funciona como componente.
```vue
<template>
    <button class="button-styled">
        Botão estilizado
        <span> Cataline </span>
    </button>
   
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
    .button-styled {
        background: #2d6cea;
        color: #fff;
        border-radius: 0.3rem;
        padding: 0.5rem 1rem;
        outline: none;
        border: none;
        cursor: pointer;
    }
</style>
```
### Conteúdo do App.vue
```vue
<template>
    <ButtonStyled/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonStyled from '@/components/buttomStyled.vue'

export default defineComponent({

   components: {

    // O nome atribuído, buttonStyled, pode ser criado com qualquer valor, como, p ex, buttonOne ou myButton ou qualquerCoisa.
    /* buttonStyled: ButtonStyled */

    // Ao invés da forma acima, outra possibilidade é a utilização da refatoração, i é, atribuir nomes iguais, que faz o vue realizar uma declaração implícita:
    ButtonStyled,

   }
})
</script>

<style scoped>
.button-styled {
    position: absolute;
    top: 45%;
}

/* v-deep informa que pretendemos nos aprofundar na cadeia hereditária da tag mãe. */
::v-deep.button-styled span {
    color: #000;
}

</style>
```

## Props:

