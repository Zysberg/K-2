window.onresize = function(){canvasResize(); document.getElementById('nA').innerText = null; document.getElementById('nB').innerText = null;};

canvasResize();

function canvasResize(){sceneEl.style.width = window.innerWidth+"px";sceneEl.style.height = (window.innerHeight*.75)+"px";}

function Pos(){return worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);}

function Rot(){return camParentEl.getAttribute('rotation');}

function calibrateLocalRotate(){
	camParentEl.setAttribute('position',Pos());
	cameraEl.setAttribute('position',{x:0,y:0,z:0});
}


function toggleCSS(Str){
	switch(Str){
		case 'biDir':
			document.getElementById('biDir').style.backgroundColor = (biDir) ? '#99cc00': 'white';
			document.querySelector('font').innerText = (biDir) ? '\u2015' : '\u2192';
			break;
		case 'xyz':
			document.getElementById('xyz').style.backgroundColor = (xyz) ? '#99cc00': 'white';
			break;
		case 'grnd':
			document.getElementById('grnd').style.backgroundColor = (grnd) ? '#99cc00': 'white';
			break;
		case 'edgeAni':
			document.getElementById('edgeAni').style.backgroundColor = (edgeAni) ? '#99cc00': 'white';
			console.log(edgeAni);
		case 'del':
			document.getElementById('del').style.backgroundColor = (del) ? '#ff275d': 'white';
			document.getElementById('add').style.backgroundColor = (!del) ? '#99cc00': 'white';
			break;
		default:
			console.log('toggleCSS - Invalid Entry');
			break;
	}
}

function toggleXYZ() {
    var axisEl = document.querySelector('#axes');
    if (!xyz) {
        axisEl.setAttribute("visible", "false");
    }
    else {
        axisEl.setAttribute("visible", "true");
    }
}
function toggleGrnd() {
    var axisEl = sceneEl.querySelector("a-plane");
    if (!grnd) {    axisEl.setAttribute("visible", "false");}
    else {     axisEl.setAttribute("visible", "true"); }
}

function toggleEdgeAni(){
	for (var i = 0; i<graphEl.childNodes.length;i++){
		if (!edgeAni&&graphEl.childNodes[i].getAttribute('id').includes('~')){console.log(graphEl.childNodes[i]); graphEl.childNodes[i].setAttribute('visible','false');}
		else if (graphEl.childNodes[i].getAttribute('id').includes('~')){graphEl.childNodes[i].setAttribute('visible','true');}
	}
}


function checkEdges(){
	col = (nodeA==nodeB) ?  '#ff275d': '#99cc00';
	for (var k = 0; k<adjList[nodeA].length;k++){ if (adjList[nodeA][k] === nodeB){col= '#ff275d';break;}}
	nA.innerText = ""; nB.innerText="";
	nA.style.backgroundColor = col;nB.style.backgroundColor = col;
	setTimeout(function(){nA.style.backgroundColor = 'white';nB.style.backgroundColor = 'white';},1000);
	setTimeout(function(){nA.style.backgroundColor = col;nB.style.backgroundColor = col;},1000);
	setTimeout(function(){nA.style.backgroundColor = 'white';nB.style.backgroundColor = 'white';},1000);
	return nodeA!=nodeB;
}