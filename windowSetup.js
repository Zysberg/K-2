window.onresize = function(){canvasResize();};
canvasResize();
function canvasResize(){
  sceneEl.style.width = window.innerWidth+"px";
  sceneEl.style.height = (window.innerHeight*.75)+"px";
}

function Pos(){return cameraEl.getAttribute('position');}

function Rot(){return camParentEl.getAttribute('rotation');}

document.addEventListener('keypress', event=>{
	const keyName = event.key;
	var rOt = Rot();
	switch(event.key){
		case 'i':
			rOt.x+=6;
			break;
		case 'k': 
			rOt.x-=6;
			break;  
		case 'j':
			rOt.y+=6;
			break;
		case 'l':
			rOt.y-=6;
			break;
		default:
			break;
	}
	camParentEl.setAttribute('rotation',rOt);
	});



