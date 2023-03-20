
<script lang="ts">
    export default {
        data() {
            return {
                count: 0
            }
        }            
    }
</script>

<template>
    <button v-on:click="count++"> 
                You clicked me {{ count }} times
    </button>
</template>