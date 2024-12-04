function dijkstra(graph, sourceNode) {
    graphKeys = Object.keys(graph);
    console.log(graphKeys);
    graphVal = Object.values(graph);
    distArr = new Array(Object.keys(graph).length);

    for (i = 0; i < Object.keys(graph).length; i++) {
        if (graphKeys[i][0] === sourceNode) {
            distArr[i] = 0;
        } else {
            distArr[i] = Math.min();
        }
    }

    findDists(graphKeys, graphVal, graphKeys.indexOf(sourceNode), distArr, m = new Set(sourceNode));
    return distArr;
}

function findDists(graphKey, graphVal, startPos, distArr, marked) {
    if (marked.size === graphKey.length) {
        return;
    }
    curMin = Math.min();
    for (i = 0; i < graphVal[startPos].length; i+=2) {
        if (!marked.has(graphVal[startPos][i])) {
            marked.add(graphVal[startPos][i]);
            distArr[graphKeys.indexOf(graphVal[startPos][i])] = distArr[startPos] + graphVal[startPos][i + 1]
        } else {
            if (distArr[startPos] + graphVal[startPos][i + 1] <= distArr[graphKeys.indexOf(graphVal[startPos][i])]) {
                console.log(graphVal[startPos][i + 1])
                distArr[graphKeys.indexOf(graphVal[startPos][i])] = distArr[startPos] + graphVal[startPos][i + 1];
            }
        }
        curMin = Math.min(curMin, distArr[graphKeys.indexOf(graphVal[startPos][i])])
    }
    findDists(graphKey, graphVal, distArr.indexOf(curMin), distArr, marked);
}
