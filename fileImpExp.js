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

//TO    DO
function impTextFile() {
	while (graphEl.hasChildNodes()){graphEl.removeChild(graphEl.lastChild)}
    var fr = new FileReader();
    fr.onload = function () {
        graph = null;
        nodes = JSON.parse(this.result.split(',"adjList":')[0].substring(9,this.result.split(',"adjList":')[0].length-1)+"}");
        adjList = JSON.parse(this.result.split(',"adjList":')[1].substring(0,this.result.split(',"adjList":')[1].length-1));
        processGraph();
    }
    fr.readAsText(document.getElementById('openFile').files[0]);
    document.getElementById('openFile').style.visibility = 'hidden';
}


function processGraph(){
	for (n in nodes){
		addN0de(n);
		for (var g = 0; g<adjList[n].length;g++){
				addEdge(n,adjList[n][g],false,true);
		}	
	}
}