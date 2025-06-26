
const makeLogger =(prefix) =>info=>{
    console.log(prefix, info)
}
const errorLogger = makeLogger('[ERROR]')
errorLogger('Error from database: invalid addres')

const makeValidator = (minLength, maxLength) =>(string) =>{
    if (string.length<minLength) return false
    else if (string.length>maxLength) return false
    return true

}
const nameValidator = makeValidator(1, 10)
console.log(nameValidator(''))
console.log(nameValidator('adam'))
console.log(nameValidator('adamDobrzewkladam12'))

const paymentCheck = (method, amount) => `Zapłacono używając ${method}, kwota płatności: ${amount}`

const handleSuccess = () => 'Płatność zakończona, przekierowanie do sklepu..'

const handleError = () =>'Błąd płatności nr 9999'

const processPayment = function (method, amount, processorFn, onSuccess, onError) {
    console.log('Rozpoczynanie platnosci, prosze czekać...')
    const success = Math.random() > 0.3
    if (success){
        setTimeout(()=>{
            console.log(`${processorFn(method, amount)} ${onSuccess()}`)
        }, 1000)
    }
    else {
        setTimeout(()=>{
            console.log(`${onError()}`)
        }, 1000)
    }
}

processPayment('Gotówka', 200, paymentCheck, handleSuccess, handleError)
processPayment('Gotówka', 200, paymentCheck, handleSuccess, handleError)


const name = 'Adam'
const age = 24
const sayHello = function() {console.log(`Hello ${this.name}`)}
const sayAge = function (){console.log(`Age ${this.age}`)}

const objectBuilder = (paramEntries, fnEntries) => () => {
    const all = [...paramEntries, ...fnEntries];

    return all.reduce((obj, [key, val]) => {
        obj[key] = val;
        return obj;
    }, {});
};

const userFactory = objectBuilder(
    [['name', 'Adam'], ['age', 24]],
    [['sayHello', sayHello], ['sayAge', sayAge]]
);

const user = userFactory();
user.sayHello(); // Hello Adam
user.sayAge();   // Age 24
