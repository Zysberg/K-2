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


function addN0de(lAbel){
	cnt++;
	var label = (lAbel===null) ? 'n'+cnt:lAbel; //prompt()
	var color = 'white'; //getRandomColor();
	var node = document.createElement("a-sphere");
	var pos = (lAbel === null) ? Pos() : nodes[lAbel]['Pos'];
	setAttributes(node,{'id':label,'color':color,'position':pos,'radius':'.5'});
	addEvents(node,color);
	if (lAbel===null){nodes[label] = {Pos:node.getAttribute('position'),Color:color};}
    if (lAbel===null){adjList[label] = []};
    graphEl.appendChild(node);
}

function addEvents(aNode,color){
	aNode.onmouseenter = function(){
		this.setAttribute('class','HIGHLIGHT'); if(!del){this.setAttribute('color','#e6e600');}else{delNode = aNode.getAttribute('id'); this.setAttribute('color','#ff275d');}}
	aNode.onmouseleave=function(){label = null; this.setAttribute('color',color);this.removeAttribute("class")};
	aNode.onclick =function(){  if(del){deleteNode(aNode);}}
}


function deleteNode(){
    if (document.querySelector('.HIGHLIGHT')){
        var delNodeHTML = document.querySelector('.HIGHLIGHT');
        var nodeID = delNodeHTML.getAttribute('id');

        delete adjList[nodeID];
        delete nodes[nodeID];

       for (var i in adjList){
            for (var j = 0; j<adjList[i].length;j++){
                if (adjList[i][j]==nodeID){
                    adjList[i].splice(j,1);
                }
            }
        }


        for (var i = 0; i<graphEl.children.length;i++){
            elem = graphEl.children[i];
            if(elem.getAttribute('id').includes(nodeID)){
                graphEl.removeChild(graphEl.children[i]);
                i--;
            }
        }
    }
    else{console.log("No node detected.")}
}

