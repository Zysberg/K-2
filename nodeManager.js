function getRandomColor() {
    const letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    if (color == '55575b' || color == 'FFFFFF') {
        return getRandomColor();
    }
    return color;
}

function nodeLabelExists(label){
	for(vars in nodes){if (label==vars){return true;}}
		return false;
}


function addN0de(){
	cnt++;
	var label = 'n'+cnt; //prompt()
	var color = 'white'; //getRandomColor();
	var node = document.createElement("a-sphere");
	var pos = (pos == null) ? Pos() : pos;
	setAttributes(node,{'id':label,'color':color,'position':pos,'radius':'.5'});
	addEvents(node,color);
	nodes[label] = {Pos:node.getAttribute('position'),Color:color};
    //node.setAttribute('position',pathParse(nodes[label].Pos));
    adjList[label] = [];
    sceneEl.appendChild(node);
}

function addEvents(aNode,color){
	aNode.onmouseenter = function(){
		if(!del){this.setAttribute('color','#e6e600');this.setAttribute('class','HIGHLIGHT');}else{this.setAttribute('color','#ff275d');}}
	aNode.onmouseleave=function(){this.setAttribute('color',color);this.removeAttribute("class")};
	aNode.onclick =function(){  if(del){deleteNode(aNode);}}
}


function deleteNode(node){
	label = node.getAttribute('id');
	console.log(adjList);
	console.log(nodes);
    for (adj in adjList[label]){
        for (n in adjList[adj]){
            if (n==label){
                delete n;
            }
        }
    }
    delete adjList[label];
    delete nodes[label];
    for (var i =0; i<sceneEl.children.length;i++){
    	console.log(sceneEl.children[i]);
        if (sceneEl.children[i].getAttribute('id').includes(label)){
        	sceneEl.removeChild(graphEl.children[i]);
            i--;
        }
    }
}
