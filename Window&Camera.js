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
			addNode = !addNode;
			break;
		case 'b':
			biDir = !biDir;
			break;
		case 'Enter':
			if(addNode){}
				break;
		default:
		console.log(event.key)
			break;
	}

	});



