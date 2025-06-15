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

const newNames = normalizedNames(weirdNames);

console.log(newNames);
console.log(weirdNames);
