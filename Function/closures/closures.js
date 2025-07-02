
let b
let c
let d = function (){
    let something = ''
    b=function (){
        something = 'adam'
        console.log(something + (Math.floor(3.999) + '') )
    }
    c = function (){
        something = 'mariola'
        console.log(something.repeat(2).padStart(10, '*'))
    }
}

d()
b()
console.dir(b)
d()
c()
console.dir(c)


function shoppingCart(){
    let total = 0
    let allItems = []
    return {
        add: function (product){
            allItems.push(product)
        },
        getProducts: function(){
            return allItems
        },
        clear: function (){
            while (allItems.length > 0){
                allItems.pop()
            }
            console.log('tablica pusta')
        },
        calculateTotal: function(){
           return  allItems.reduce((sum, prod)=>{
                return sum + prod.price
            }, 0)

        }
    }
}
const cart = shoppingCart()
cart.add({name:'maslo', price: 5})
cart.add({name:'margaryna', price: 10})

const prods = cart.getProducts()
console.log(prods)

const total = cart.calculateTotal()
console.log(total)

cart.clear()

/*

xNapisz funkcję createDiscountManager, która:

przyjmuje domyślną wartość procentowego rabatu (np. 10)

zwraca obiekt z metodami:

generateCode(name) – tworzy i zapamiętuje unikalny kod na podstawie nazwy użytkownika ("PROMO-name"),

getDiscount(name) – zwraca rabat dla danego użytkownika (np. 10),

setDiscount(value) – zmienia wartość domyślnego rabatu (np. z 10 na 15),

listAllCodes() – wypisuje wszystkie wygenerowane kody.

Utrzymuj stan (rabat, kody) w closure – nic nie może być publiczne poza metodami.
*/


function DiscountManager(defaultValue){
    let discount = defaultValue
    let promoCodes =[]
    return {
        generateCode: function (name){
            promoCodes.push( 'PROMO-'+name)
        },
        getDiscount: function(){
            return discount
        },
        setDiscount: function(value){
            discount = value
        },
        listAllCodes: function(){
            promoCodes.forEach(code=>console.log(code))
        }

    }
}


const {
    generateCode,
    getDiscount,
    setDiscount,
    listAllCodes
} = DiscountManager(10);
console.log(getDiscount())
generateCode('Adam');
generateCode('Ziutek');
listAllCodes();

setDiscount(20);
console.log(getDiscount());
console.dir(generateCode)
