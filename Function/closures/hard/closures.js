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
