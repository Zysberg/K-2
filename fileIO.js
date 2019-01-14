function jsonifyGraph(){
	graph = {nodes,adjList};
	console.log(graph);
}

function genTextFile() {
    var blob = new Blob([JSON.stringify(graph)], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(blob, "graph.txt");
}