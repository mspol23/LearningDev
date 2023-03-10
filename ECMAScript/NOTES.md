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
```js

// Método forEach()

// método que recebe uma função callback. Executa um loop, com aplicação do código em cada item do array.

{
    const numbers = [ 1, 2, 3, 4, 5 ]

    numbers.forEach(function (item, index) {
        console.log(item, index) // index é a posição no array.
    })
}

//código 2

{
    const numbers = [ 1, 2, 3, 4, 5 ]

    numbers.forEach(function (item) {
        
        item++
        
        console.log(item)
    })
}

// No código 2, fere-se um conceito da programação funcional, que consiste na estabilidade do código. Para atender este preceito, o caminho é a criação de uma nova array com o resultado do código 2. 
// Ex no código 3.

// Código 3

{
    const numbers = [ 1, 2, 3, 4, 5 ]
    
    const newNumbers = numbers.map(function (i) {
        return i + 1
    })
    console.log(newNumbers)
    console.log(numbers)

}

// Código 4

// A seguir o que se pretende é somar o itens dos arrays e colocar a resposta em um novo array.
// método .reduce

{
    const numbers = [ 1, 2, 3, 4, 5 ]

    const sum = numbers.reduce(function (total, next) {
        
        return total + next
        // total é o resultado da operação a cada rodada. Inicialmente é 0. Conforme os números vão sendo somados, este parâmetro vai aumentando.

        // next é o próximo elemento que será utilizado na operação.
    })

    console.log(sum)
    
}

// Código 5

// Próxima estrutura de array.

// .filter() retorna um resultado se o parâmetro da propriedade especificada (no caso abaixo é done) contiver um valor true. O resultado é organizado dentro de uma array. Caso queiramos um formato diferente, utilizaremos o .filter (mostrado a seguir)

{ 
    const toDo = [
        {
            text: 'lavar a louça', 
            done: true
        },
        {
            text: 'Apanhar o lixo', 
            done: true
        },
        {
            text: 'Dobrar as roupas', 
            done: true
        },
    ]

    const done = toDo.filter(function (i) {
        return i.done
    })

    console.log(done)
}

// Código 6

// .filter() - retorna um objeto com base nos parâmetros indicados.

{ 
    const toDo = [
        {
            text: 'lavar a louça', 
            done: true
        },
        {
            text: 'Apanhar o lixo', 
            done: true
        },
        {
            text: 'Dobrar as roupas', 
            done: true
        },
    ]

   const find = toDo.find( function (i) {
    return i.text === 'Dobrar as roupas'
   })
    console.log(find)
}

// Código 7

// .findIndex() - retorna o index do objeto do array. Como o array, neste caso, é uma estrutura complexa, o indexOf não atende esta necessidade.

{ 
    const toDo = [
        {
            text: 'lavar a louça', 
            done: false
        },
        {
            text: 'Apanhar o lixo', 
            done: true
        },
        {
            text: 'Dobrar as roupas', 
            done: true
        },
    ]

  const index = toDo.findIndex( function (i) {
    return i.text === 'Dobrar as roupas'
    
})

console.log(index)

}


// Código 8

// .some() - Verifica a existência de um valor na array. Retorna uma resposta do tipo boolean. O parâmetro i retorna os itens do array e o compara com o valor pretendido.

{ 
    const cars = [ 'Fusca', 'Civic', 'Hb20' ]

    const findFusca = cars.some( function (i) {
        return i === 'Fusca'
    })

    console.log(findFusca)
          
}


// Aula 2

// Arrow Functions

// Código 9

// Para transformar a function em arrow function, no caso abaixo, retiramos o termo function e inserimos os sinais = e > após o último parêntese que contém o parâmetro i.

// Quando houver apenas um parâmetro na função (no caso existe apenas o i) não haverá, na arrow function, a necessidade dos parênteses. O instrutor considera que os parênteses organiza melhor o código, além disso, quando não há parâmetro, os parênteses devem ser colocados vazios, seguido da 'seta'.

// Quando o código dentro do escopo da função for simples, com apenas uma linha de código, sem quebra, pode-se retirar as chaves, desde que tudo fique na mesma linha, sem a instrução 'return'. Isso se chama retorno implícito da função.

// Para inserir um objeto através de uma arrow function, deve-se acomodá-lo dentro de parênteses imediatamente antes das chaves.

{ 
    const toDo = [
        {
            text: 'lavar a louça', 
            done: true
        },
        {
            text: 'Apanhar o lixo', 
            done: true
        },
        {
            text: 'Dobrar as roupas', 
            done: true
        },
    ]

    const done = toDo.filter( (i) => {
        return i.done
    })

    //  Ooutras formas:

      /* const done = toDo.filter( (i) => {
        return i.done
      }) */

      /* const done = toDo.filter( i => {
        return i.done
      }) */

      /* const done = toDo.filter( i => i.done ) */

      console.log(done)
}

// As forma acima são chamadas funções anônimas. Para nominar um arrow function devemos atribuir um variável:

{
const functionName = () => 'Exemplo'

console.log(functionName())
}


// Aula 3

// Parâmetro Padrão.

// A partir do ES6 podemos definir atribuir valor padrão aos parâmetros da função

{
    function sayHello ( name = 'Fulano' ) {

        console.log ( 'Hello ' + name )
    
    } 
    
    sayHello()
    
}

// Neste caso, chamamos a função sem atribuir valor ao parâmetro e, por isso, ele atribuiu o valor pré definido 'Fulano'.

// Esse procedimento também funciona para arrow function.

{
    const sayHello = (name = 'Fulano') => console.log('hello ' + name )

    sayHello()
}

// lembrando que também funcionaria desta forma.

{
    const sayHello = (name = 'Fulano') => {
        console.log('hello ' + name )
    }

    sayHello()
}

// Aula 4

// Template String

// Criar função para imprimir "O valor de camisa é R$ 15, pode comprar!"

{
    const priceTag = (product, price) => {
        
        console.log(`O valor de ${ product.toUpperCase() } é R$${ Math.round(price) }, pode comprar!`)
    }

    priceTag('bermuda', 15.8)
}


// Aula 5

// Object Short Syntax

// Construir um objeto com as seguintes informações.

// Constantes também podem ser construídas desta forma.

{
    const name = 'Marcos', age = 45, height = 1.75,isPresent = true

    // Quando a propriedade do objeto tiver o mesmo nome da variável que conterá seu valor, não há necessidade de informar os dois. Ex.: name = name, age = age, etc. Basta fazer o seguinte:

    const person = {
        name,
        age,
        height,
        isPresent,
    }

    console.log(person)
}


// Aula 6

// Desestruturação

// Muito utilizada.

{

    // Supomos que queiramos buscar dois elementos em um array

    const fruits = ['Banana', 'Maçã', 'Abacate']

    // a forma abaixo seria o padrão do JS, antes do ES6.

    /* const banana = fruits[0]
    const apple = fruits[1] */

    // Hoje, podemos fazer assim.

    const [banana, apple] = fruits

    console.log(banana, apple)

}

{
    // Caso queiramos pular um item do vetor, deixamos sua posição em branco. Ex.:

    const fruits = ['Banana', 'Maçã', 'Abacate']

    const [banana, , avocado] = fruits

    console.log(banana, avocado)

}

// Desestruturação - objetos.

{
    const person = {
        name: 'Marcos',
        familyName: 'Oliveira',
        age: 40,
        address: {
            city: 'Rio de Janeiro',
            region: 'RJ'
        },
    }

    // Chamando propriedades antes do ES6:

    /* const name = person.name
    const age = person.age
    const city = person.address.city */

    /* onsole.log(name, age, city) */

    // Desestruturação.

    const {name, familyName, address: { city } } = person

    console.log(name, familyName, city)

}

// Desestruturação e funções.

{
    const person = {
        name: 'Marcos',
        familyName: 'Oliveira',
        age: 40,
        address: {
            city: 'Rio de Janeiro',
            region: 'RJ'
        },
    }

    const personData = (i) => {
        console.log(`Meu nome é ${i.name} e minha idade é ${i.age} e sou do ${i.address.city}`)
    }

    personData(person)
    
}

// Forma de função desestruturada:

{
    const person = {
        name: 'Marcos',
        familyName: 'Oliveira',
        age: 40,
        address: {
            city: 'Rio de Janeiro',
            region: 'RJ'
        },
    }

    const personData = ( {age, address: { region }, name} ) => console.log(`Tenho ${age}, moro no Estado ${region} e me chamo ${name}.`)
    

    personData(person)
    
}


// Aula 8

// Operadores rest / spread

// Ambos são representados com ... 

{
    const numbers = [ 1, 2, 3, 4, 5 ]

    const [one, two] = numbers

    console.log(one, two)

}

{
    const numbers = [ 1, 2, 3, 4, 5 ]

    // Para pegar o resto do array.

    const [one, two, ...rest] = numbers
    const [ ...all] = numbers // pegará todos os valores.

    console.log(one, two, rest)

    console.log(all)
}

// rest em objetos.

{
    const person = {
        name: 'Marcos',
        age: 40,
        weight: 95,
        books: [ 'Monge e o executivo', 'O mínimo que você deve saber para não ser um idiota.'],
    }

    // Desestruturando.

    const { name, age, ...i } = person

    console.log(name, age, i)

}

// rest aplicado a uma função.

{

    // Criaremos uma função para somar quantos forem os números inseridos como argumentos.

    const sum = ( ...i) => {
        return i.reduce( (a, b) => a + b)
    }

    console.log(sum(1, 1, 1, 1, 1, 1, 1))

}

// spread

// Recebemos algum conteúdo para ser alocado em outro lugar.

{
    const numbers1 = [1, 2, 3, 4, 5]
    const numbers2 = [6, 7, 8, 9, 10]

    const allNumbers = [ ...numbers1, ...numbers2]

    console.log(allNumbers)

}

// Também funciona com objeto.


{
    const person = {
        name: 'Marcos',
        familyName: 'Oliveira',
        age: 40,
        address: {
            city: 'Rio de Janeiro',
            region: 'RJ'
        }
}

    const person1 = {
        ...person,
        age: 45
    }

    console.log(person1)

}

// Aula 9

// Função Construtura.

// Cria itens cuja propriedades se repetem.

{
const car = {
    brand: null,
    price: 0
}

const civic = car
civic.brand = 'Honda'
civic.price = 130

const hb20 = car
hb20.brand = 'Hyundai'
hb20.price = 80

const bmw = car
bmw.brand = 'BMW'
bmw.price = 200

console.log(hb20)
console.log(civic)
console.log(bmw)
}

// A resposta retorna 3 objetos BMW. A cada atribuição de argumentos, os valores do objeto car são substituídos. Portanto, este modelo não funciona. 

// Devemos, então, criar uma função construtora.

{
function Car(brand, price) {
    this.brand = brand,
    this.price = price
    console.log(this)
}

const civic = new Car('Honda', 100)
const hb20 = new Car('Hb20', 80)

console.log(civic)
console.log(hb20)

}

// Aula 10

// Classes e seus Métodos (funções -> ações)

// Da forma abaixo, embora não atenda a boa prática, funcionaria.

{
    function Car(brand, price) {
        this.brand = brand,
        this.price = price,
        this.run = () => console.log('Running')
    } 
}

// Forma correta e semântica.

{
    class Car {
        constructor(brand, price) {
            this.brand = brand,
            this.price = price
        }

        // A função abaixo, desta forma, funcionará como um método pertencente à classe 'Car'

        run(speed) {
            console.log(`Velocidade do Civic: ${speed}Km/h`)
        }

    }

    const civic = new Car ('Honda', 100)
    console.log(civic)
    civic.run(150)
}

// Podemos atribuir valores padrão aos parâmetros da Classe.

{
    class Car {
        constructor(brand, price = 50) {
            this.brand = brand,
            this.price = price
        }

        run(speed) {
            console.log(`Velocidade do Civic: ${speed}Km/h`)
        }

    }

    const civic = new Car ('Honda') // price assumirá o valor padrão definido na construção da classe.

    console.log(civic)
}


// Aula 11

// get & set.

// Neste caso, estamos construindo um app para uma empresa e se pretende que, após cadastrado, um cliente não possa mais ser excluído.

{
    class Worker {
        constructor(name, store) {
            this.name = name,
            this.store = store
        }

    }

    // O seguinte comportamento é indesejado:

    const worker = new Worker('João', 'Centro')

    worker.name = 'Pedro' // O nome pôde ser alterado.

    console.log(worker)

}

// Devemos utilizar '_' antes da propriedade construtora para informar que será privada.

{
    class Worker {
        constructor(name, store) {
            this._name = name,
            this._store = store
        }

        // Para permitirmos que esta propriedade seja acessada, criaremos um método 'get'.

        get name () {
            return this._name 
        }

    }

    const worker = new Worker('João', 'Centro')

    worker.name = 'Pedro' // Não conseguimos alterar.

    console.log(worker)

}

// Agora pretendemos permitir alteração. Utilizaremos o método 'set'.

{
    class Worker {
        constructor(name, store) {
            this._name = name,
            this._store = store
        }

        // Para permitirmos que esta propriedade seja acessada, criaremos um método 'get'.

        get name () {
            return this._name 
        } // Este get não recebe parâmetro pois sua finalidade é bloquear alterações.

        // o método 'set' receberá um parâmetro, que será o novo nome.

        set name (newName) {
            return this._name = newName
        }

    }

    const worker = new Worker('João', 'Centro')

    worker.name = 'Pedro' // Conseguimos alterar.

    console.log(worker)
}

// Métodos estáticos

{
    class Person {
        constructor(firstName, secondName) {
            this.firstName = firstName,
            this.secondName = secondName
        }

        get fullName() {
            return `${this.firstName} ${this.secondName}`
        }
    }

    const person = new Person('Marcos', 'Oliveira')

    console.log(person.fullName)
    
}

{
    class Person {
        constructor(firstName, secondName) {
            this.firstName = firstName,
            this.secondName = secondName
        }

        get fullName() {
            return `${this.firstName} ${this.secondName}`
        }

        static joinNames(firstName, secondName) {
            return `${firstName} ${secondName}`
        }
    }

    const person = Person.joinNames('Marcos', 'Santos')

    console.log(person.fullName)
    console.log(Person.joinNames('Marcos', 'Santos'))
    
}

// Herança

// A classe específica hesda métodos da classe genérica.

{
    // Classe genérica:

    class Vehicle {
        constructor(wheels) {
            this.wheels = wheels
        }

        acelerate() {
            console.log('Acelerando!')
        }
    }

    // Classe específica, importando funcionalidades da genérica:

    class Moto extends Vehicle {
        
        cram() {
            console.log('Empinando!')
        }

        // Sobrescrevendo método herdado: basta criar um método homônimo na classe herdeira.Se quisermos utilizar os dois, basta utilizar o recurso 'super'.
        // Ex.:
        acelerate() {
            super.acelerate()
            console.log('Velocidade da luz.')
        }

    }

    const civic = new Vehicle(4)

    // console.log(civic)

    // civic.acelerate()

    const bross = new Moto()

    // bross.cram()

    bross.acelerate()

}

// Criando construtor para a classe Moto.

{
    class Vehicle {
        constructor(wheels, fuel) {
            this.wheels = wheels
            this.fuel = fuel
        }

        acelerate() {
            console.log('Acelerando!')
        }
    }

    // Para receber os argumentos da função construtora, deve-se utilizar a expressão 'super'.

    class Moto extends Vehicle {
        constructor(wheels, fuel, helmet) {
            super(wheels, fuel)
            this.helmet = helmet
        }
        cram() {
            console.log('Empinando!')
        }

        usingHelmet() {
            if (this.helmet) {
                console.log('Sim, boa viagem!')
            } else {
                console.log('Ignição bloqueada.')
            }
        }
    }

    const bross = new Moto(2, 'gasolina', false)

    console.log(bross.helmet)

    bross.usingHelmet()
}
```

# import / export

## Arquivos e comandos de exportação:

### Calculator

```js
export const sum = (a, b) => console.log(a + b)

export const subtraction = (a, b) => console.log(a - b)

export {
    sum, subtraction
}
```
### sum:

```js
// Exportando um função anônima. Na importação poderemos acomodá-la em qualquer variável.

export default (a, b) => console.log(a + b)

// Além de criar e exportar a função padrão, podemos criar e exportar outras regulares

const subtraction = (a, b) => console.log(a - b)

export {
    subtraction
}
```
### Formas de importação:


1. FORMA 1

```js
/* import {sum, subtraction} from './calculator'

console.log (sum(4, 4))

console.log (subtraction(10, 5)) */
```
2. FORMA 2

Importar todas as funções de outro arquivo: "*" com a criação de uma espécie de variável que servirá para acessar as funções do arquivo export como se fossem métodos.

```js
import * as methods from './calculator'

methods.sum(10, 10)
```
3. FORMA 3

- Como importar a exportação padrão:

```js
import methodSum from './sum'

methodSum(5, 5) */
```
- Podemos criar exportações nominadas no mesmo arquivo da exportação padrão (que deve ser única em seu arquivo)

Abaixo, importamos a exportação padrão e atribuímos o nome methodSum (qualquer), e importamos outra função exportada, a subtraction.

```js
import methodSum, {subtraction} from './sum'

methodSum(4, 4)

subtraction(10, 5)
```

# async / wait

## promise (revisão breve):

```js
const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout(
        () => {resolve( console.log ('ok') )},
    2000)
})

myPromise().then(

    () => {
        console.log('response')

        myPromise().then(

            () => {
                console.log('response 2')

                myPromise().then(

                    () => {
                        console.log('response 3')
                    }
                )
            }
        )
    }
)
```
## async / await 

- Reescrevendo a promessa acima com outra estrutura. Mais simples.

```js
const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout(
        () => {resolve( 'Resolvida!' )},
    2000)
})

async function execPromise() {
    const i = await myPromise()
    console.log(i)
}

execPromise()
```

No caso acima, se retirarmos o async/await, ele simplesmente atribuirá o valor estrutural da promessa inda pendente (pending) e o console.log imprimirá este valor. O async/await esperará a conclusão da promessa ocorra e, assim, poderá receber seu resultado.

# async / await

```js
const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout(
        () => {resolve( 'Resolvida!' )},
    2000)
})

/* async function execPromise() {
    const i = await myPromise()
    console.log(i)
}

execPromise()
 */
/* myPromise().then(

    () => {
        console.log('response')

        myPromise().then(

            () => {
                console.log('response 2')

                myPromise().then(

                    () => {
                        console.log('response 3')
                    }
                )
            }
        )
    }
) */

// Sintaxe mais limpa:

async function execute() {
    
    await myPromise() 
    console.log('1')
        
    await myPromise() 
    console.log('1')

    await myPromise() 
    console.log('1')
}

execute()
```

# try ... catch

```js
const myPromise = () => new Promise((resolve, reject) => {
    return setTimeout(
        () => {
            resolve( 'Deu certo!' )
        },
    2000)
})

const myPromise1 = () => new Promise((resolve, reject) => {
    return setTimeout(
        () => {
            resolve( 'Beleza!' )
        },
    2000)
})

const myPromise2 = () => new Promise((resolve, reject) => {
    return setTimeout(
        () => {
            reject( 'Problema!' )
        },
    2000)
})

const exec = async () => {

    try {
        console.log('Etapa 1')
        await myPromise()
        console.log('ok!')
        console.log('Etapa 2')
        await myPromise1()
        console.log('ok!')
        console.log('Etapa 3')
        console.log('Ultima!')
        await myPromise2()
        console.log('Acabou!')
    } catch (error) {
        console.warn(error)
    }
}

exec()
```

