/*
* 🔴 Trudne
1. Zamień daty w formacie DD-MM-YYYY na YYYY-MM-DD
convertDate('20-06-2025') → '2025-06-20'
*
2. Znajdź wszystkie tagi HTML w stringu
findTags('<div><p>tekst</p></div>') → ['<div>', '<p>', '</p>', '</div>']

3. Sprawdź, czy string to poprawny numer PESEL
validatePesel('44051401359') → true
*
* */
const convertDate = str =>str.split('-').reverse().join('-')
const convertDate2 = str => str.replace(/(\d{2})-(\d{2})-(\d{4})/, '$3-$2-$1');
console.log(convertDate('20-06-2025'))