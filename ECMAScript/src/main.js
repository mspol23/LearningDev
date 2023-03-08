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