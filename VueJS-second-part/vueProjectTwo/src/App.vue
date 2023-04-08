<template>
    <ButtonStyled text="Botão 1" color="danger"/>
    <ButtonStyled text="Botão 2" color="success"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonStyled from '@/components/buttomStyled.vue'

export default defineComponent({
   components: { ButtonStyled }
})
</script>

