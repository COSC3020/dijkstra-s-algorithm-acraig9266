function dijkstra(graph, sourceNode) {
    distances = [];
    for (i = 0; i < graph.size; i++){
        distances[i] = inf;
    }
    
    
    return [];
}

function depthFirstSearch(graph, startNode, targetNode) {
    const result = search(graph, startNode, targetNode);
    if (result == null){
        return [];
    } else{
        return result;
    }
}

function search(graph, currentNode, targetNode, visitedNodes = new Set(), path = []) {
    visitedNodes.add(currentNode);
    path.push(currentNode);
    if (currentNode == targetNode) {
        return path;
    }

    const nextNodes = graph[currentNode] || [];

    for (let i = 0; i < nextNodes.length; i++) {
        if (visitedNodes.has(nextNodes[i]) == false) {
            const result = search(graph, nextNodes[i], targetNode, visitedNodes, path);
            if (result) {
                return result;
            } 
        }
    }

    path.pop();
    return null;
}
