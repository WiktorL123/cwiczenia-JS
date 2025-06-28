
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


//partial application - bind
const addDiscount = (discount, value) => value - value * discount
const discount10 = addDiscount.bind(null, 0.10)
console.log(discount10(100))
//partial application - function returns function
const addDiscount2 = (discount) => (value) => value - value * discount
const discount20 = addDiscount2(0.20)
console.log(discount20(900))

////zad 2 - frf
/*
* Stwórz funkcję shippingCalculator, która przyjmuje:

koszt dostawy (baseShipping)

próg darmowej dostawy (freeOver)

kod promocyjny (promoCode)

i zwraca funkcję, która po podaniu ceny koszyka (price) zwraca całkowity koszt (cena + dostawa, z uwzględnieniem zniżek).

✅ Zasady:
Jeśli price >= freeOver → dostawa za 0 zł

Jeśli promoCode === 'FREE2025' → też dostawa za 0 zł

W innym przypadku → dolicz baseShipping*/

const shippingCalculator = (baseShipping, freeOver, promoCode) =>(price)=>{
    if (price>=freeOver) return 0
    else if (promoCode ==='FREE2025') return 0
    else {
        return price + baseShipping
    }
}
const freeShippingWithFreeOver = shippingCalculator(20, 10, "")
console.log('spelniono prog', freeShippingWithFreeOver(90))
const freeShppingWithPromoCode = shippingCalculator(100, 120, 'FREE2025')
console.log('poprawny kod', freeShppingWithPromoCode(90))
const paiedShipping = shippingCalculator(20, 120, '')
console.log('platna dostawa', paiedShipping(100))


//bind
const shippingCalculator2 = (baseShipping, freeOver, promoCode, price) =>{
    if (price>=freeOver) return 0
    else if (promoCode ==='FREE2025') return 0
    else {
        return baseShipping
    }
}

const addTax = (rate, price) => price + price*rate
const addVAT = addTax.bind(null, 0.23)

const productPrice = addVAT(120)

const shippingWithFreeOVer = shippingCalculator2.bind(null, 20, 100, '' )
const shippingWithPromoCode = shippingCalculator2.bind(null, 20, 100, 'FREE2025' )
const payedShipping = shippingCalculator2.bind(null, 20, 500, '' )

const calculateTotalPrice = (fns, products) =>{
    const [addVat, payedShipping] = fns
    const productsWithTax = products.map(p=>({
        ...p,
        vatPrice: addVat(p.price)
    }))
   const sum = productsWithTax.reduce((total, product) =>{
        return total  + product.vatPrice

    }, 0)
    const shipping = payedShipping(sum)
    return Math.floor(sum + shipping )

}


const products = [
    {
        id: 1,
        price: 3200,
        name: 'Laptop',
    },
    {
        id: 2,
        name: 'Słuchawki',
        price: 199,
    },
    {
        id: 3,
        name: 'Książka: JS dla początkujących',
        price: 49,
    },
    {
        id: 4,
        name: 'Bidon sportowy',
        price: 35,
    },
    {
        id: 5,
        name: 'Mata do jogi',
        price: 89,
    }
];


const calculatedTotal = calculateTotalPrice([addVAT, payedShipping], products)
const summaryLines = products.map(p => `${p.name} – ${p.price} zł`);

console.log(`TWOJE PRODUKTY:\n${summaryLines.join('\n')}\nCENA Z DOSTAWĄ + VAT: ${calculatedTotal} zł`);


console.log(shippingWithPromoCode(productPrice))
console.log(shippingWithFreeOVer(productPrice))
console.log(payedShipping(productPrice))

///// this with and without bind
const someObject = {}
someObject.name ='cos'
console.log(someObject.name)
function sayHi(){
    console.log(` zwykla ${this.name}`)
}
 someObject.sayHi = sayHi
someObject.sayHi()

const sayHi2 = function (){
    console.log(`anonimowa w zmiennej ${this.name}`)
}
someObject.sayHi2 = sayHi2.bind(someObject)
someObject.sayHi2()

const sayHi3 = () =>{
    console.log(`strzalkowa ${this.name}`)
}
someObject.sayHi3 = sayHi3.bind(someObject)
someObject.sayHi3()