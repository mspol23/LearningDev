import type {Directive} from 'vue'

const highlight: Directive = {
    
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

// Como essa diretiva é global, deverão ser incluídas algumas linhas de código no main.ts

export default highlight

