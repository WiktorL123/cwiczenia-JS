/*🟡 Średnie
1. Znajdź wszystkie liczby w stringu
extractNumbers('kosztuje 12 zł i ma 3 sztuki') → ['12', '3']

2. Sprawdź, czy hasło zawiera minimum 8 znaków, dużą literę, małą literę i cyfrę
validatePassword('Ala12345') → true

3. Usuń wszystkie znaki niebędące literami lub cyframi
cleanString('ala@#kot!') → 'alakot'

*/

const extractNumbers = (str) => str.match(/\d+/g)
console.log(extractNumbers('kosztuje 12 zł i ma 3 sztuki'))
const validatePassword  = str =>{
    const lowerCaseRegex = /[a-z]+/
    const upperCaseRegex = /[A-Z]+/
    const digitRegex = /[0-9]+/
    const specialCharsRegex = /[!@#$%^&*]+/
    return lowerCaseRegex.test(str)
        && upperCaseRegex.test(str)
        && digitRegex.test(str)
        && specialCharsRegex.test(str)
        && str.length >= 8
    //return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(str);
}
console.log(validatePassword('Passss1!'))

const cleanString = (str) => {
    const regex = /[^A-Za-z0-9ążźćółęĄŻŹĆÓŁĘ]/g
    return str.replace(regex, '')
}
console.log(cleanString('ala@#kot!ĄĆą'))