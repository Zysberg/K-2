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
        console.log(nodeID);
        console.log(adjList[nodeID]);
        var nodeIDx = -1;

        delete adjList[nodeID];
        delete nodes[nodeID];
/////////////////////////////////////


        // for (n in adjList){
        //     console.log(n)
        //     for (var i =0;i<adjList[n].size;i++){
        //         console.log(adjList[n].get());
        //         if (adjList[n][i]==nodeID){adjList[n].splice(i,1);break;}
        //     }
        // }

        /////////////////////////////////////////
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

