document.addEventListener('keypress', event=>{
	var rOt = Rot();
	switch(event.key){
		case 'y':
			xyz = !xyz; toggleCSS('xyz');toggleXYZ();
			break;
		case 't':
			biDir = !biDir; toggleCSS('biDir');					//UI
			break;
		case 'h':
			grnd = !grnd; toggleCSS('grnd');toggleGrnd();
			break;
		case 'g':
			edgeAni = !edgeAni; toggleCSS('edgeAni');
			break;
		case 'i':
			rOt.x+=6;
			camParentEl.setAttribute('rotation',pathParse(rOt));
			break;
		case 'k': 
			rOt.x-=6;
			camParentEl.setAttribute('rotation',pathParse(rOt));
			break;  
		case 'j':
			rOt.y+=6;
			camParentEl.setAttribute('rotation',pathParse(rOt));
			break;
		case 'l':
			rOt.y-=6;
			camParentEl.setAttribute('rotation',pathParse(rOt));
			break;
		case '=':
		if (del==true){ del=false;  toggleCSS('del');console.log(window.innerWidth)}
		else{addN0de();}
			break;
		case '-':
			if(del==false){del=true;toggleCSS('del');}
			break;
		case '[':
			nodeA = (document.querySelector('.HIGHLIGHT')) ? document.querySelector('.HIGHLIGHT').getAttribute('id') : null;
			nA.innerText=nodeA;
			if (nodeA!=null&&nodeB!=null){if(checkEdges()){addEdge(nodeA,nodeB,biDir);nodeA=null;nodeB=null;}}
			break;
		case ']':
			nodeB = (document.querySelector('.HIGHLIGHT')) ? document.querySelector('.HIGHLIGHT').getAttribute('id') : null;
			nB.innerText=nodeB;
			if (nodeA!=null&&nodeB!=null){if(checkEdges()){addEdge(nodeA,nodeB,biDir);nodeA=null;nodeB=null;}}
			break;
		case '\\':
		//toggle delete edge modevb
			break;
		case 'q':
			cameraEl.setAttribute('position',{x:0,y:1,z:2});
			break;
		default:
			break;	
		}
	});

// sceneEl.onmousedown = function(){console.log(cameraEl.getAttribute('rotation'))};
// sceneEl.onmouseup = function(){console.log(cameraEl.getAttribute('rotation'))};