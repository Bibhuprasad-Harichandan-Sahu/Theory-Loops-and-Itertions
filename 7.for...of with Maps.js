// define Map
let map = new Map();

// inserting elements
map.set('name', 'Jack');
map.set('age', '27');
map.set('religion', 'Hindu');

// looping through Map
for (let [key, value] of map) {
    console.log(key + '-> ' + value);
}