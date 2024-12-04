const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '')

var graph1 = {
    X: ['Z', 8, 'V', 3, 'Y', 6, 'W', 6],
    W: ['X', 6, 'V', 4, 'U', 3],
    U: ['W', 3, 'V', 3, 'T', 2],
    V: ['U', 3, 'W', 4, 'X', 3, 'Y', 8, 'T', 4],
    Y: ['X', 6, 'Z', 12, 'V', 8, 'T', 7],
    Z: ['X', 8, 'Y', 12],
    T: ['Y', 7, 'V', 4, 'U', 2]
}
assert(JSON.stringify(dijkstra(graph1, 'X')) == JSON.stringify([0, 6, 6, 3, 6, 8, 7]));

var graph2 = {
    C: ['E', 8, 'A', 9],
    A: ['B', 2, 'D', 4, 'C', 1],
    D: ['C', 2],
    B: ['C', 1, 'E', 10, 'F', 2],
    E: ['D', 7, 'G', 1],
    F: ['H', 3],
    G: ['E', 4, 'F', 2],
    H: ['G', 1]
}
assert(JSON.stringify(dijkstra(graph2, 'C')) == JSON.stringify([0, 9, 13, 11, 8, 11, 9, 14]));
