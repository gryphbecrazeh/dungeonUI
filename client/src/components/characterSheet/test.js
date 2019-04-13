// const characterSheet = require('./Character');

// const ald = new characterSheet("Alderashe");
// console.log(ald);
console.log('test');
const character={
    name:"chris",
    level:"10",
    age:"26",
    class:"developer"
}
console.log(character);
const update={
    name:"tom"
}
const updatedCharacter=Object.assign(character,update);
console.log(updatedCharacter);