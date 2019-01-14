function jsonifyGraph(){
	graph = {nodes,adjList};
	console.log(graph);
}

function showUploadButton(){document.getElementById('openFile').style.visibility = 'visible';}

function genTextFile() {
	jsonifyGraph();
    var blob = new Blob([JSON.stringify(graph)], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(blob, "graph.txt");
}

//TODO
function impTextFile() {

    var fr = new FileReader();
    fr.onload = function () {
        graph = null;
        graph = JSON.parse(this.result);
        console.log(graph);
     //   processNewGraph();
    }
    fr.readAsText(document.getElementById('openFile').files[0]);
    document.getElementById('openFile').style.visibility = 'hidden';
}


// processGraph(){
// 	nodes = graph[nodes];
// 	adjList = graph[adjList];
// for (n in nodes){
	
// }

// }