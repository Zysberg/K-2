
function addEdge(An, Bn,biDir){
    for (var k = 0; k<adjList[An].length;k++){ if (adjList[An][k] === Bn){console.log(nodeA+"->"+nodeB+" already exists."); return;}}

    if(An==Bn){console.log("No self-loops!");return;}

    var n0 = nodes[An]['Pos'], n1 = nodes[Bn]['Pos'];
    var edgeEl = document.createElement('a-entity');
    var pAth = pathParse(n0)+" ,"+pathParse(n1);
    setAttributes(edgeEl,{'id':An+"-"+Bn,'meshline': { path:pAth,lineWidth: 10,lineWidthStyler: 1,color: '#55575b'}});
    addSquares(n0,n1,edgeEl,An+"-"+Bn);
    graphEl.appendChild(edgeEl);
    adjList[An].push(Bn);
    if(biDir){addEdge(Bn,An,false);}
    nodeA=null;
    nodeB=null;
    return;
}

function addSquares(fRom,tO,edgeEl,iD){
    var box1 = document.createElement('a-box');
    var motion = document.createElement('a-animation');
    setAttributes(box1,{'id':'~'+iD,'color':'#66FF00','height':'.125','width':'.125','depth':'.125','position':fRom});
    setAttributes(motion,{'attribute':'position','dur':3000,'from':pathParse(fRom),'to':pathParse(tO),'repeat':'indefinite'});
    box1.appendChild(motion);

    var box2 = document.createElement('a-box');
    setAttributes(box2,{'id':'!'+iD,'visible':'false','opacity':'.55','height':'.25','width':'.25','depth':'.25'});
    var motion1 = document.createElement('a-animation');
    setAttributes(motion1,{'attribute':'position','dur':1000,'from':pathParse(calcFracDist(fRom,tO,3.15)),'to':pathParse(calcFracDist(fRom,tO,3)),'repeat':'indefinite'});
    box2.appendChild(motion1);
    box2.onmouseenter = function(){setAttributes(this,{'class':'delEDGE','color':'#ff275d'})}
    box2.onmouseleave = function(){this.removeAttribute('class');this.removeAttribute('color');}
    graphEl.appendChild(box1);
    graphEl.appendChild(box2);
    //if this doesnt work as planned, have from = 0,0,0 and to = frOm-tO (in order to be with respect  topoint)
}

function calcFracDist(Pos1,Pos2,n){
    return {x:(((Pos2.x)*(1/n))+((Pos1.x)*(1-(1/n)))),
            y:(((Pos2.y)*(1/n))+((Pos1.y)*(1-(1/n)))),
            z:(((Pos2.z)*(1/n))+((Pos1.z)*(1-(1/n))))}
}


function deleteEdge(){
    if (document.querySelector('.delEDGE')){
        var detectedEdge = document.querySelector('.delEDGE').getAttribute('id');
        console.log(detectedEdge);
        detectedEdge = detectedEdge.substring(1);
        console.log(detectedEdge);
        var vertices = detectedEdge.split('-');
        for (var j = 0; j< adjList[vertices[0]].length;j++){
            if (adjList[vertices[0]][j]==vertices[1]){
                adjList[vertices[0]].splice(j,1);
                j = adjList[vertices[0]].length;
            }
        }
        for (var i = 0; i<graphEl.children.length;i++){
            elem = graphEl.children[i];
            if(elem.getAttribute('id').includes(detectedEdge)){
                graphEl.removeChild(graphEl.children[i]);
                i--;
            }
        }
    }
    else{
        console.log("No Edge Detected");
    }
}


function selectEdge(){
var bool = (del) ? 'true':'false';
    console.log(bool);
        for (var i =0; i<graphEl.children.length;i++){
            if (graphEl.children[i].getAttribute('id').includes('!')){
                graphEl.children[i].setAttribute('visible',bool);
            }
        }
}