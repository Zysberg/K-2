var sceneEl = document.querySelector('a-scene');
var cameraEl = sceneEl.querySelector('a-camera');
var camParentEl = sceneEl.querySelector('#camParent');
var cursorEl = sceneEl.querySelector('a-cursor');
var graphEl = sceneEl.querySelector('#graph');
var importGraph = document.querySelector("#openFile");
var nA = document.querySelector('#nA');
var nB = document.querySelector('#nB');

var map = {};

var adjList = {};
var adjMatrix = {};
var nodes = [];

var del = false;
var nodeA = null;
var nodeB = null;
var cnt = 0;

var biDir = false;
var xyz = true;
var grnd = false;
var edgeAni = false;
var meshObj ={ path:null,lineWidth: 10,lineWidthStyler: 1,color: '#55575b'};

function setAttributes(el, attrs){
    for (var key in attrs){
        el.setAttribute(key,attrs[key]);
    }
}

function contains(arr, el){
	for (var i=0;i<arr.size;i++){
		if(arr[i]==el){return true;}
	}
	return false;
}

