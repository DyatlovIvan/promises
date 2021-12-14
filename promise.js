// let pr = new Promise((resolve) => {
//
//         setTimeout(() => {
//             const number = Math.random()
//             resolve(number)
//                 , 3000
//         })
//     }
// )
// pr.then((number) => {
//     console.log(`ok:${number}`)
// })
// pr.then((number) => {
//     console.log(`ok:${number}`)
// })


const doAfter = (timout) => {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve()
        }, timout * 1000)

    }))
}

// let pr5 = doAfter(5)
// let pr10 = doAfter(10)
// let pr3 = doAfter(3)
//
// pr5.then(() => console.log('сработал через 5 сек'))
// pr3.then(() => console.log('сработал через 3 сек'))
// pr10.then(() => console.log('сработал через 10 сек'))

// let promise3 = doAfter(3);
// promise3.then( () => console.log('я сработал через 3 секунд') );
// promise3.then( () => console.log('и я тоже следом сработал через 3 секунд') );
// promise3.then( () => console.log('и я') );


// let promise = doAfter(3)
// setTimeout(()=>{
//     promise.then(()=>{
//         console.log('Зарезолвился через')
//     })
// },1000)

// let prInterval = new Promise((resolve) => {
//     let i = 0;
//     setInterval(() => {
//         i++
//         resolve(i)
//         console.log(i)
//     }, 5000)
// }).then((resolve)=>{
//     console.log('timout' + resolve)
// })


// doAfter(3)
//     .then(() => console.log('Мой провис зарезолвился'))
//     .then(() => console.log('Мой провис зарезолвился следом'))


// let pr1 = doAfter(3)
// let pr2 = pr1.then(() => console.log('Мой провис зарезолвился'))
// pr2.then(() => console.log('Мой провис зарезолвился следом'))

// let pr = doAfter(2)
// let pr2 = pr.then(()=>'whatup')
// pr2.then((text)=>console.log(text))

// let pr = doAfter(5)
//     .then(() => 'whatup')
//     .then((text) => console.log(text))


// let pr1 = doAfter(4); // один промис
// let pr2 = doAfter(7); // второй промис
//
// pr1.then( () => console.log("pr1 resolved") ); // индивидуально подписываемся на каждый
// pr2.then( () => console.log("pr2 resolved") );
// let aggregatedPromise = Promise.all([pr1, pr2]); // получаем общий промис
//
// aggregatedPromise.then( () => console.log("pr1 and pr2 resolved")); // сработает наш подписчик ТОЛЬКО когда все промисы, переданные в массиве в all будут resolved


const getRandomAfter = (timout) => {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(Math.random())
        }, timout * 1000)

    }))
}

// getRandomAfter(4).then( number => console.log(`я получил ${number} спустя 4 секунды`))

// let promises = [getRandomAfter(1),getRandomAfter(2),getRandomAfter(3)]
// let commonPromise = Promise.all(promises)
//     .then(res =>console.log(`first num:${res[0]} second num: ${res[1]} third num: ${res[2]}`))



