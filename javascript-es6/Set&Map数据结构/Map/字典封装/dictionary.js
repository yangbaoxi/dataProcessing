import dictionary from "./dictionary.json";

const dictionaryMap = new Map();

for(let [k, v] of Object.entries(dictionary)){
    dictionaryMap.set(k, v);
}

// let userName = dictionaryMap.get('userName');
// let array = new Array();
// for (const [key, value] of Object.entries(userName)) {
//     let object = Object.create(null);
//     object.label = key;
//     object.value = value;
//     array.push(object);
// }
// return array;


export default dictionaryMap;