# Avançando no Vue

## Methods
```ts
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


