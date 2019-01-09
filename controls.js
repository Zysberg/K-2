//https://stackoverflow.com/questions/5203407/how-to-detect-if-multiple-keys-are-pressed-at-once-using-javascript
document.onkeydown=onkeyup=function(e){
	e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';

   	var rOt = Rot();

   	if(map[32]&&map[13]&&map[16]){
   		//SPACE+ENTER+SHIFT = delete edge
   		//little white cubes will be shown on edges, hitting enter on the cubes delete the edge
   	}

   	else if(map[32]&&map[13]){
   		//SPACE+Enter+ cursor on node x2 = create Edge
   	}

    else if(map[13]&&map[16]){
    	//Delete Node
    }
    else if(map[73]&&map[74]){rOt.x+=6;rOt.y+=6;camParentEl.setAttribute('rotation',rOt);}
    else if(map[75]&&map[76]){rOt.x-=6;rOt.y-=6;camParentEl.setAttribute('rotation',rOt);}
    else if(map[73]&&map[76]){rOt.x+=6;rOt.y-=6;camParentEl.setAttribute('rotation',rOt);}
    else if(map[74]&&map[75]){rOt.x-=6;rOt.y+=6;camParentEl.setAttribute('rotation',rOt);}

    else if(map[13]){addNodeMode();}
    else if(map[67]){xyz = !xyz; toggleCSS('xyz');toggleXYZ();}
    else if(map[78]){biDir = !biDir; toggleCSS('biDir'); }
    else if(map[86]){grnd = !grnd; toggleCSS('grnd');toggleGrnd();}
    else if(map[66]){edgeAni = !edgeAni; toggleCSS('edgeAni');}
    else if(map[73]){rOt.x+=6;camParentEl.setAttribute('rotation',rOt); }
    else if(map[75]){rOt.x-=6;camParentEl.setAttribute('rotation',rOt); }
    else if(map[74]){rOt.y+=6;camParentEl.setAttribute('rotation',rOt); }
    else if(map[76]){rOt.y-=6;camParentEl.setAttribute('rotation',rOt); }
    else if(map[79]){camParentEl.setAttribute('rotation',{x:0,y:0,z:0});}
    else if(map[81]){cameraEl.setAttribute('position',{x:0,y:0,z:0});}   
}

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
