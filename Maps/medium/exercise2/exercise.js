const quiz = new Map([
    ["Stolica Polski?", "warszawa"],
    ["Ile to 2 + 2?", "4"],
    ["Kolor nieba w dzień?", "niebieski"]
]);
const points = {}
for (const [key, value] of quiz) {
    const answer = prompt(key);
    if (answer?.toLowerCase().trim()===value.toLowerCase()){
        alert('taaak')
        points[key] = 1
    }
    else {
        alert('nieee')
        points[key] = 0
    }
    console.log(`${key} - ${value}`);

}
console.log('suma punktow ', Object.values(points).reduce((a,b) => a+b, 0))

