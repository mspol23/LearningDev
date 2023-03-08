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
