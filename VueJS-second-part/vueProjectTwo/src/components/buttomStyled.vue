<template>
    <button :class="['button-styled', color]">
        {{ text }}
        
    </button>
   
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type color = 'success' | 'danger' | 'primary'

export default defineComponent({

    props: {
        // posso utilizar um único tipo ou um array de tipos.
        text: {
        type: [String, Number],
        //required, para tornar a criação do elemento text obrigatório.
        required: true
        },

        // criando uma props que definirá um atributo de tag.
        color: {
            type: String,
            default: 'primary',
            validator: (value: color) => {
                return ['success', 'danger', 'primary'].includes(value)
            }
        }

    }
})
</script>

<style scoped>
    .button-styled {
        
        color: #fff;
        border-radius: 0.3rem;
        padding: 0.5rem 1rem;
        outline: none;
        border: none;
        cursor: pointer;
    }

    .success {
        background: green;
    }

    .danger {
        background: red;
    }

    .primary {
        background: blue;
    }
</style>