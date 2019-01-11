
function addEdge(An, Bn,biDir){
        if(contains(adjList[An],Bn)){console.log(nodeA+"->"+nodeB+" already exists.");}
        else{
            var n0 = nodes[An]['Pos'], n1 = nodes[Bn]['Pos'];
            var edgeEl = document.createElement('a-entity');
            var pAth = pathParse(n0)+" ,"+pathParse(n1);
            setAttributes(edgeEl,{'id':An+"-"+Bn,'meshline': { path:pAth,lineWidth: 10,lineWidthStyler: 1,color: '#55575b'}});
            addDirAniSquare(n0,n1,edgeEl,An+"-"+Bn);
            //selectEdgeSquare
            sceneEl.appendChild(edgeEl);
            adjList[An].push(Bn);
        }
        if(biDir){addEdge(Bn,An,false);}
        nodeA=null;
        nodeB=null;
        return;
}

function addDirAniSquare(fRom,tO,edgeEl,iD){
    var box1 = document.createElement('a-box');
    var motion = document.createElement('a-animation');
    setAttributes(box1,{'id':'!'+iD,'color':'#66FF00','height':'.25','width':'.25','depth':'.25','position':fRom});
    setAttributes(motion,{'attribute':'position','dur':3000,'from':pathParse(fRom),'to':pathParse(tO),'repeat':'indefinite'});
    box1.appendChild(motion);
    edgeEl.appendChild(box1);
    //if this doesnt work as planned, have from = 0,0,0 and to = frOm-tO (in order to be with respect  topoint)
}

function selectEdgeSquare(Pos1,Pos2,node1,node2){
    var one4 = pathParse(calcFracDist(Pos1,Pos2,4));
    var one3 = pathParse(calcFracDist(Pos1,Pos2,3));
    var boxS = document.createElement('a-box');
    setAttributes(boxS,{'id':'!'+node1+"-"+node2,'visible':'false','color':'white','position':one4,'height':'.5','width':'.5','depth':'.5','p4':one4,'p3':one3});
    boxS.addEventListener("mouseenter",function(event){
        var boxSa = document.createElement('a-animation');
        var p4 = boxS.getAttribute('p4');
        var p3 = boxS.getAttribute('p3');
        setAttributes(boxSa,{'class':'dir','attribute':'position','dur':1500,'from':p4,'to':p3,'repeat':'indefinite'});
        boxS.appendChild(boxSa);
    });

    boxS.addEventListener('mousel-',function(event){boxS.removeChild(boxS.firstChild);});
    return boxS;
}


function calcFracDist(Pos1,Pos2,n){
    return {x:((Pos1.x+Pos2.x)/n),y:((Pos1.y+Pos2.y)/n),z:((Pos1.z+Pos2.z)/n)}
}


function removeEdge(label){
    var nodesArr = label.split("-");
}