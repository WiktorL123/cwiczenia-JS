const text = `
Ala ma kota. Kot Ala to bardzo sprytny kot. Kiedy Ala wraca do domu, kot już czeka. Kot lubi mleko, kot lubi też spać. Ala nie zawsze ma czas dla kota, ale kot i tak ją kocha. W końcu to kot – najlepszy przyjaciel człowieka.`;
const normalize = (string) => {
    return string.trim().toLowerCase()

}
const splitByWord = (string) => {
    return string.split(/[^a-ząćęłńóśźż0-9]+/i).filter(Boolean)
}

const countWords = (string) =>{
    return splitByWord(normalize(string)).reduce((map, word) => {
        map.set(word, (map.get(word) || 0) + 1)
        return map
    }, new Map())
}
const mapOfWords = countWords(text);
const showCount = (map) =>{
    for (const [key, value] of map.entries()) {
        console.log(`slowo ${key} wystapilo ${value} razy`)
    }
}
const filteredByCount = (map) =>{
    return new Set([...map.entries()]
        .filter(([_, count]) =>count>1)
        .map(([word])=>word))
}
showCount(mapOfWords);
console.log(filteredByCount(mapOfWords))
