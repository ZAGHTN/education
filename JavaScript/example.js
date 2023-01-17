'use strict';
const arr = [2,7,25,12];

console.log(getHighest(arr));

function getHighest(nbrs) {
    return 'Highest Number: ' + Math.max(...nbrs);
}
