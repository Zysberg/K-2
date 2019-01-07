window.onresize = function(){canvasResize();};
canvasResize();
function canvasResize(){
  sceneEl.style.width = window.innerWidth+"px";
  sceneEl.style.height = (window.innerHeight*.75)+"px";
}

function Pos(){return cameraEl.getAttribute('position');}

function PosSphere(){modelEl.getAttribute('position'); console.log(modelEl.getAttribute('position'));}

function Rot(){return camParentEl.getAttribute('rotation');}

document.addEventListener('keypress', event=>{
	const keyName = event.key;
	var rOt = Rot();
	switch(event.key){
		case 'i':
			rOt.x+=6;
			camParentEl.setAttribute('rotation',rOt);
			break;
		case 'k': 
			rOt.x-=6;
			camParentEl.setAttribute('rotation',rOt);
			break;  
		case 'j':
			rOt.y+=6;
			camParentEl.setAttribute('rotation',rOt);
			break;
		case 'l':
			rOt.y-=6;
			camParentEl.setAttribute('rotation',rOt);
			break;
		case 'u':
			rOt.z+=6;
			camParentEl.setAttribute('rotation',rOt);
			break;
		case 'm':
			rOt.z-=6;
			camParentEl.setAttribute('rotation',rOt);
			break;
		case 'o':
			camParentEl.setAttribute('rotation',{x:0,y:0,z:0});
			break;
		case 'q':
			cameraEl.setAttribute('position',{x:0,y:0,z:0});
			break;






		case 'v':
			addNode= !addNode;
			addNodeMode(addNode);
			break;
		case 'b':
			biDir.value = !biDir.value;
			break;




		case 'Enter':
			if(addNode){addN0de();}
				break;
		default:
			break;
	}

	});

//---Extra
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
function toggleXYZ() {
    var axisEl = sceneEl.querySelector("#axis");
    var vis = axisEl.getAttribute("visible");
    if (vis) {
        axisEl.setAttribute("visible", "false");
    }
    else {
        axisEl.setAttribute("visible", "true");
    }
}
function toggleGrnd() {
    var axisEl = sceneEl.querySelector("a-plane");
    var vis = axisEl.getAttribute("visible");
    if (vis) {    axisEl.setAttribute("visible", "false");}
    else {     axisEl.setAttribute("visible", "true"); }
}

