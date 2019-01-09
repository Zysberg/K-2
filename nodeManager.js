function addNodeMode(addNode){
	if (addNode){
		cursorEl.setAttribute('visible','false');
		return;
	}
	cursorEl.setAttribute('visible','true');
}

function addN0de(){
	var label = prompt("Enter Label for Node","-------");
	if (label=="-------"||((Object.keys(nodes).size!=0)&&label in nodes)||label.charAt(0)==('!')){console.log("Invalid Input"); return;}
	var color = getRandomColor();
	var node = document.createElement("a-sphere");
	var pos = Pos();
	setAttributes(node,{'id':label,'color':color,'position':pos,'radius':'.5'});
	sceneEl.appendChild(node);
	nodes[label] = pos;
    adjList[label] = [];

	// if (nodes.size>2){
	//    for(vars in nodes){
	// 	  console.log(vars);
	//    	   console.log(nodes[vars]);
	//    }
 //    }
}

function deleteNode(label){
    for (adj in adjList[label]){
        for (n in adjList[adj]){
            if (n==label){
                delete n;
            }
        }
    }
    delete adjList[label];
    delete nodes[label];
    for (var i =0; i<sceneEl.childNodes.length;i++){
        if (sceneEl.childNodes[i].getAttribute('id').includes(label)){
            delete sceneEl.childNodes[i];
            sceneEl.removeChild(sceneEl.childNodes[i]);
            i--;
        }
    }
}
