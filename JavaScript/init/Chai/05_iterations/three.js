// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps
const map = new Map();
map.set('IN', 'India');
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':->', value);
}

const myObject = {
    Game1: 'NFS',
    Game2: 'Spiderman'
};

// for (const [key, value] of myObject) {
//     console.log(key, ':->', value);
// }    //objects are not iteratable using for-of