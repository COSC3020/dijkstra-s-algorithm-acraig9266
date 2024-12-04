function dijkstra(graph, sourceNode) {
    graphKeys = Object.keys(graph);
    graphVal = Object.values(graph);
    distArr = new Array(graphKeys.length);

    for (i = 0; i < graphKeys.length; i++) {
        if (graphKeys[i][0] === sourceNode) {
            distArr[i] = 0;
        } else {
            distArr[i] = Infinity;
        }
    }

    start = graphKeys.indexOf(sourceNode);

    m = new Set();
    m.add(start);

    findDists(graphKeys, graphVal, start, distArr, m);
    return distArr;
}

function findDists(graphKey, graphVal, startPos, distArr, marked) {
    marked.add(startPos);
    for (i = 0; i < graphVal[startPos].length; i += 2) {
        if (distArr[startPos] + graphVal[startPos][i + 1] < distArr[graphKey.indexOf(graphVal[startPos][i])]) {
            distArr[graphKey.indexOf(graphVal[startPos][i])] = distArr[startPos] + graphVal[startPos][i + 1];
        }
    }
    var currentPos = -1;
    var currentDist = Infinity;

    for (j = 0; j < graphKey.length; j++) {
        if (!marked.has(j) && distArr[j] < currentDist) {
            currentDist = distArr[j];
            currentPos = j;
        }
    }

    if (currentPos == -1) {
        return;
    }

    findDists(graphKey, graphVal, currentPos, distArr, marked);
}
