
/*

🟢 Łatwe
Sprawdź, czy string zawiera tylko cyfry

isNumeric('12345') → true

isNumeric('12a45') → false

Zamień wszystkie spacje na podkreślniki

replaceSpaces('ala ma kota') → 'ala_ma_kota'

Sprawdź, czy e-mail jest poprawny (prosta wersja)

validateEmail('test@example.com') → true

validateEmail('bademail.com') → false

*/
const isNumeric  = (str) => /^\d+$/.test(str)
console.log(isNumeric('234'))
console.log(isNumeric('23d4'))
const removeWhiteSpace = str => str.replace(/\s+/g, '-')
console.log(removeWhiteSpace('ala ma kota'))

const validateEmail = (str) => /^[\w.-]+@[\w.-]+\.[a-z]+$/.test(str)
console.log(validateEmail('ala ma kota'))
console.log(validateEmail('adres@email.com'))
console.log(validateEmail('adres@emailcom'))
console.log(validateEmail('adresemailcom'))
