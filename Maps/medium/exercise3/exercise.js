const person = {
    name: "Zosia",
    age: 23,
    city: "Warszawa"
};

const objectToMap = (obj) =>{
    return Object.entries(obj).reduce((map, [key, value]) => {
        map.set(key, value);
        return map;
    }, new Map());
}
const personMap = objectToMap(person);
console.log(personMap);

const mapToObject = (map) =>{
    return Array.from(map.entries()).reduce((obj, [key, value]) => {
        obj[key] = value
        return obj;
    }, {})
}
console.log(mapToObject(personMap));