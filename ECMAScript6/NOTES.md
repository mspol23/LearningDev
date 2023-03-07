# Configuração do Babel.

1. npm init -y

2. npm i @babel/core @babel/cli @babel/preset-env -D

3. cria .gitignore para node_modules

4. cria pasta src/

5. Dentro da src/ cria arquivo main.js e .babelrc

    * Dentro do arquivo .babelrc escrever:
        {
        "presets": ["@babel/preset-env"]
        }

5. cria pasta public/

6. Dentro do public/ criar arquivos bundle.js e index.html

7. Rodar Babel.
    * linha de comando cheia: node_modules/.bin/babel ./src/main.js -o ./Public/bundle.js -w

    * A linha de comando cheia pode ser substituída pelo comando npx (app que acompanha o npm, que, por sua vez, acompanha o Node.): npx babel ./src/main.js -o ./Public/bundle.js -w

    * No arquivo package.json, na parte de scripts, substituir o "test" por outra propriedade com nome qualquer (sugere-se "dev"), seguida da seguinte linha de comando: babel ./src/main.js -o ./Public/bundle.js -w.

        -  "scripts": {
            "dev": "npx babel ./src/main.js -o ./Public/bundle.js -w"
            },

    * Feita a etapa anterior, podemos executar o Babel com a seguinte linha de comando simplificada: npm run dev.


# let & const

```js
    //const & let

// variável criada com const é read-only

// variável criada com let permite que lhe seja atribuído novo valor.

// const entretanto admite mutação

// Ex.:

const person = { name: 'Marcos' }

/* person = { name: 'Oliveira' } */

// Entretanto ser fizermos 

person.name = 'Oliveira'

// O código executa a mudança do atributo name para 'Oliveira'. Isso se chama mutação.

console.log(person)

// Usar let ou const??

// Preferencialmente const. Deixará o código mais seguro.

// Usar let somente quando precisarmos reatribuir valor.]

// Ex.:

for(let i = 0; i < 10; i++) {
    console.log(i)
}

// No exemplo acima o comando var deixaria a variável i vazar para fora do escopo, já o const não deixaria o incremento de valor ocorrer, pois precisaria atribuir um novo valor à i a cada volta no loop. Neste caso, portanto, dever-se-á utilizar let.
```
