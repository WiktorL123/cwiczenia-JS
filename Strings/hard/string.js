const string = 'ala ma kota'
const string2 = 'ala  ma  koooooota11111111111 '

const countLetters = str =>  str.replaceAll(' ', '').length

console.log(countLetters(string))
console.log(countLetters(string2))

const changeLetter = function (word, index, letter) {
    try {
        if (index<0 || index>=word.length) {
            throw new Error('index cannot be longer than length or 0')
        }
        return word.slice(0, index) + letter + word.slice(index + 1)

    }
    catch (error) {
        console.log(error.message)
        return showError(error)
    }

}
const showError = (e) =>{
    return `${e.message}`
}
console.log('aaaaaaaaaaaaaaaaaaaaaaaa')
const changed = changeLetter('kutas', -1, 'k')
console.log(changed)


const word1 = 'ALA'
const word2 = 'Ala '
const word3 = 'Ala '
const word4 = 'ds '

const totalEqual =function (str1, str2){
    return str1.trim().toLowerCase() === str2.trim().toLowerCase()
}
console.log(`${word1} i ${word2} sa rowne ${totalEqual(word1, word2) ? 'tak' : 'nie'}`)
console.log(`${word3} i ${word4} sa rowne ${totalEqual(word3, word4) ? 'tak' : 'nie'}`)

const cutSentence = str => {
    return str.padEnd(20, '.')
}
console.log(cutSentence('To jest bardzo dlugie zdanie'))
console.log('To jest bardzo dlugie zdanie'.length)