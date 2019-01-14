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
			calibrateLocalRotate(); 
			rOt.x+=6;
			camParentEl.setAttribute('rotation',pathParse(rOt));
			break;
		case 'k':
			calibrateLocalRotate(); 
			rOt.x-=6;
			camParentEl.setAttribute('rotation',pathParse(rOt));
			break;  
		case 'j':
			calibrateLocalRotate();
			rOt.y+=6;
			camParentEl.setAttribute('rotation',pathParse(rOt));
			break;
		case 'l':
			calibrateLocalRotate();
			rOt.y-=6;
			camParentEl.setAttribute('rotation',pathParse(rOt));
			break;
		case '=':
		if (del==true){ del=false;  selectEdge();toggleCSS('del');}
		else{addN0de();}
			break;
		case '-':
			if(del==false){del=true;toggleCSS('del');selectEdge();}
			break;
		case '[':
			if (!del){
				nodeA = (document.querySelector('.HIGHLIGHT')) ? document.querySelector('.HIGHLIGHT').getAttribute('id') : null;
				nA.innerText=nodeA;
				if (nodeA!=null&&nodeB!=null){if(checkEdges()){addEdge(nodeA,nodeB,biDir);nodeA=null;nodeB=null;}}
			}
			break;
		case ']':
			if (!del){
				nodeB = (document.querySelector('.HIGHLIGHT')) ? document.querySelector('.HIGHLIGHT').getAttribute('id') : null;
				nB.innerText=nodeB;
				if (nodeA!=null&&nodeB!=null){if(checkEdges()){addEdge(nodeA,nodeB,biDir);nodeA=null;nodeB=null;}}
			}
			break;
		case '\\':
			if(del){deleteNode(); deleteEdge();}
			break;
		case 'q':
			cameraEl.setAttribute('position',{x:0,y:1,z:2});
			break;
		case 'o':
			camParentEl.setAttribute('rotation',{x:0,y:0,z:0});
		default:
			break;	
		}
	});