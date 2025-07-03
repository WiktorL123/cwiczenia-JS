/*
*
* 1. TokenManager
Zaprojektuj funkcję TokenManager, która pozwala:

ustawić czas życia tokenu (np. 10 minut),

zapisać aktualny token,

sprawdzić, czy token jest nadal ważny,

odświeżyć token (nowa wartość + nowy czas ważności).


*
* */
console.log('--------------------------------------Token Manager-----------------------------------------------')
function TokenManager(){
    let expiresAt = 0
    let token
    return {
        getToken: function(){
             return `token: ${token}, wygasnie ${new Date(expiresAt).toLocaleString()}`
        },
        setToken: function(timeInMins, tokenValue) {
            expiresAt = Date.now() + timeInMins * 60 * 1000;
            token = tokenValue;
        },
        isValid: function(){
            if (expiresAt < Date.now()) return false;
            return true
        }
    }
}

const {getToken, setToken, isValid} = TokenManager()


setToken(-112, 'HWDP100%')
console.log(isValid())
console.log(getToken())
/*
*
* 2. FormValidator
Zbuduj funkcję createValidator, która:

zapamiętuje zestaw reguł walidacyjnych (np. dla email, hasła, itp.),

pozwala dodawać kolejne reguły,

przyjmuje wartość i zwraca listę błędów (jeśli są),

wewnątrz nie przechowuje stanu błędów globalnie (tylko closures).


*
* */
console.log('------------------------------------------FormValidator - Simple------------------------------------------------')
function FormValidator(){
    const rules = {}
    return {
        setRule: function(fieldName, rule ){
            rules[fieldName] = rule
        },
        showRules: function(){
            console.log(rules)
        },
        checkRule: function(fieldName, value){
            return rules[fieldName].test(value)
        }
    }
}


const {setRule, showRules, checkRule} = FormValidator()
setRule('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
console.log(checkRule('email', 'wwwemail.com'))
console.log(checkRule('email', 'www@email.com'))
showRules()


console.log('FormValidator - Yup Like'.padStart(50, '-').padEnd(75, '-'))
function fullValidator(){
    const rules = []
    return {
        required: function (msg) {
            rules.push(value=>value? null : msg || 'Required')
            return this
        },
        minLength: function (min, msg) {
            rules.push(value=>value.length>=min? null : msg || `Minimum Length is ${min}`)
            return this
        },
        maxLength: function (max, msg) {
            rules.push(value=>value.length<=max? null : msg || `Maximum Length is ${max}`)
            return this
        },
        validate: function (value) {
            return rules.map(fn=>fn(value)).filter(Boolean)
        }
    }
}

const newValidator = fullValidator()
const errors = newValidator.required('haslo wymagane').maxLength(6,  ).minLength(2).validate('ss')
console.log(errors)

//test - function chaining
console.log('---------------------------------test - function chaining------------------------------------------------')
const obj = {
    returning: function (){
        return this
    },
    age: 2,
    myAge: function(){
        console.log(this.age)
    }
}

obj.returning().myAge()
console.log('RateLimiter'.padStart(50, '-').padEnd(75, '-'))

/*
*
* 3. RateLimiter
Zaimplementuj createRateLimiter, który:

przyjmuje maksymalną liczbę wywołań na minutę,

zwraca funkcję, która można wywołać, ale:

jeśli przekroczono limit — odrzuca wywołanie,

jeśli nie — wykonuje logikę i zlicza,

resetuje się po upływie czasu.
*
* */

//!!!CHAT GPT IMPLEMENTATION
function createRateLimiter(maxCallsPerMinute) {
    let callCount = 0;
    let windowStart = Date.now();

    return function tryCall() {
        const now = Date.now();

        if (now - windowStart >= 60 * 1000) {
            windowStart = now;
            callCount = 0;
        }

        if (callCount < maxCallsPerMinute) {
            callCount++;
            console.log(`✅ Call allowed (${callCount}/${maxCallsPerMinute})`);
        } else {
            console.log('⛔ Rate limit exceeded. Try again later.');
        }
    };
}
const limiter = createRateLimiter(3);

limiter();
limiter();
limiter();
limiter();
