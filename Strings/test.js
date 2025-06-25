console.log(typeof 'ala ma kota')
console.log(typeof ('ala ma kota').toLowerCase())

const [firstLetter, secondLetter, thirdLetter] = 'ala ma'
const newWord = [...firstLetter, ...secondLetter, ...thirdLetter].join('');
console.log('typ', typeof newWord)
console.log(newWord)
console.log(newWord.indexOf('d'))
const string = 'Bardzo lubie placki'
console.log(string.slice(string.lastIndexOf(' '), string.length));
console.log(' a a '.trim())
console.log(typeof new String('Jonas Brothers'))


const weirdNames = ['JonaAAS', 'anetA', 'JakisKtoS'];

const normalizeName = function (name) {
    const lower = name.toLowerCase();
    return lower[0].toUpperCase() + lower.slice(1);
};
const normalizedNames = (names) => names.map(normalizeName);

const lowerCaseName = 'wiktor l, anna l,'.split(', ')
const [wiktor, anna] = lowerCaseName

const splittedWiktor = wiktor.split(' ')
const splittedAnna = anna.split(' ')

const normalizedWiktor = normalizedNames(splittedWiktor).join(' ')
const normalizedAnna = normalizedNames(splittedAnna).join(' ')

console.log(`anna ${normalizedAnna} i wiktor ${normalizedWiktor}`)


const creditCardNumber = 322428425252
const maskCreditCardNumber = function (number) {
    const str = String(number)
    return str.slice(-4).padStart(str.length, '*')
};

console.log('masked:', maskCreditCardNumber(creditCardNumber))