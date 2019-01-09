window.onresize = function(){canvasResize();};
canvasResize();
function canvasResize(){
  sceneEl.style.width = window.innerWidth+"px";
  sceneEl.style.height = (window.innerHeight*.75)+"px";
}

function Pos(){return cameraEl.getAttribute('position');}

function PosSphere(){modelEl.getAttribute('position'); console.log(modelEl.getAttribute('position'));}

function Rot(){return camParentEl.getAttribute('rotation');}

function toggleCSS(Str){
	switch(Str){
		case 'biDir':
			document.getElementById('biDir').style.backgroundColor = (biDir) ? '#99cc00': 'white';
			break;
		case 'xyz':
			document.getElementById('xyz').style.backgroundColor = (xyz) ? '#99cc00': 'white';
			break;
		case 'grnd':
			document.getElementById('grnd').style.backgroundColor = (grnd) ? '#99cc00': 'white';
			break;
		case 'edgeAni':
			document.getElementById('edgeAni').style.backgroundColor = (edgeAni) ? '#99cc00': 'white';
		default:
			console.log('toggleCSS - Invalid Entry');
			break;
	}
}
