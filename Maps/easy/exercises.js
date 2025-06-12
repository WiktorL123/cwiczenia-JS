//zadanie1


//additional with if-else and inline if statement but without reduce()
// const countLetters = function (string) {
//     const result = new Map();
//     for (const letter of string.toLowerCase()) {
//             // if (!result.has(letter))
//             //     result.set(letter, 0);
//             // else
//             //     result.set(letter, result.get(letter)+1);
//             result.set(letter, (result.get(letter) || 0) +1)
//         }
//     return result
//}

const toLowerCaseWithoutWhiteSpace = (str) => str.toLowerCase().
trim().
replace(/ /g, '');


const countLetters = (string)=>{
    return toLowerCaseWithoutWhiteSpace(string).split('').reduce((res, letter)=>(
        res.set(letter, (res.get(letter) || 0) +1)
    ), new Map());
}
console.log(countLetters('kalinka kalinka kalinka maja'))

//zadanie 2

const namesAndAges = new Map([['Zosia', 23], ['Jan', 30], ['Ola', 18], ['Marek', 20]])

namesAndAges.set('Zosia', 23)
console.log(namesAndAges)
namesAndAges.set('Jan', 31)
console.log(namesAndAges)
namesAndAges.delete('Marek')
console.log(namesAndAges)
const aniaExists = namesAndAges.has('Ania')
console.log(`Ania ${aniaExists? 'istnieje' : 'nie istnieje'}`)
for (const key of namesAndAges.keys()) {
    console.log(key)
}
namesAndAges.forEach((age, name)=>console.log(`${name} ma ${age} lat`))