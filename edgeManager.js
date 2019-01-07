function addEdge(node1,node2,biDir){
        if (node1 == node2 || node1 == null || node2==null) {console.log("Cannot make self-loops"); return;}
        if(adjList[node1].includes(node2)){console.log(node1+"->"+node2+" already exists."); return;}
        if (!adjList[node1].includes(node2)){
            adjList[node1].push(node2);
            var Pos1 = nodes[node1], Pos2 = nodes[node2];
            var edge = document.createElement('a-entity');
            setAttributes(edge,{'id':node1+"-"+node2,
                          'meshline':{ path: Pos1.x + " " + Pos1.y + " " + Pos1.z + " ," + Pos2.x + " " + Pos2.y + " " + Pos2.z,
                                            lineWidth: 10,
                                            lineWidthStyler: 1,
                                            color: '#55575b'
                                         }});
            sceneEl.appendChild(edge);       
            if (biDir){
                addEdge(node2,node1,false);
            }
            directionAnimationSquare(node1,node2,edge);
            edge.appendChild(selectEdgeSquare(nodes[node1],nodes[node2]));
            sceneEl.appendChild(edge);
        }
}

function directionAnimationSquare(node1,node2,edgeEl){
    var box1 = document.createElement('a-box');
    setAttributes(box1,{'id':node1+"-"+node2,'color':'white','position':nodes[node1],'height':'.25','width':'.25','depth':'.25'});
    var motion = document.createElement('a-animation');
    setAttributes(motion,{'class':'dir','attribute':'position','dur':3000,'from':nodes[node1],'to':nodes[node2],'repeat':'indefinite'});
    box1.appendChild(motion);
    edgeEl.appendChild(box1);
}

function selectEdgeSquare(Pos1,Pos2){
    var one4 = calcFracDist(Pos1,Pos2,4);
    var one3 = calcFracDist(Pos1,Pos2,3);
    var boxS = document.createElement('a-box');
    setAttributes(boxS,{'id':'!'+node1+"-"+node2,'visible':'false','color':'white','position':one4,'height':'.5','width':'.5','depth':'.5','p4':one4,'p3':one3});
    boxS.addEventListener("mouseenter",function(event){
        var boxSa = document.createElement('a-animation');
        var p4 = boxS.getAttribute('p4');
        var p3 = boxS.getAttribute('p3');
        setAttributes(boxSa,{'class':'dir','attribute':'position','dur':1500,'from':p4,'to':p3,'repeat':'indefinite'});
        boxS.appendChild(boxSa);
    });
    boxS.addEventListener('')

    boxS.addEventListener('mouseout',function(event){boxS.removeChild(boxS.firstChild);});
    return boxS;
}


function calcFracDist(Pos1,Pos2,n){
    return {x:((Pos1.x+Pos2.x)/n),y:((Pos1.y+Pos2.y)/n),z:((Pos1.z+Pos2.z)/n)}
}


function removeEdge(label){
    var nodesArr = label.split("-");
}