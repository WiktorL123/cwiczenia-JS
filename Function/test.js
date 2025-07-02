let flight = 24325262
const changeFlight = (flightNum) =>{
    flightNum +=1
}
const changeFlightAndReturn = flight =>flight + 'adada'
changeFlight(flight)
console.log(flight)
console.log('-----------------')
flight = changeFlightAndReturn(flight)
console.log(flight)
// const upperFirst = str=> {
//     const [first, ...others] = str.split(' ')
//     return [first.toUpperCase(), ...others].join(' ')
// }

    const transformer = (str, fn) => fn(str)

    console.log(transformer('javascript hulaj dusza', (str) => {
        const [first, ...others] = str.split(' ')
        return [first.toUpperCase(), ...others].join(' ')
    }))
    const sayHello = (str) => {
        console.log(`Hello ${str}`)
    }

    const array = ['Adam', 'Martha', 'Anna']
    array.forEach(sayHello)
    console.log('------------------------------------')
    array.forEach(name => sayHello(name))


//normal
// const greet = function (greeting){
//     return function (name){
//         console.log(`${greeting}, ${name}`)
//     }
// }

//arrow
    const greet = (greeting) => name => {
        console.log(`${greeting}, ${name}`)
    }
    const greeter = greet('siema')
    greeter('adam')
//closures

console.log('-'.repeat(25) + 'closures' + '-'.repeat(25))
let f
let g =function (){
    const a =23
    f =function (){
        console.log(a*2)
    }
}
