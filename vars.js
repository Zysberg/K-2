var sceneEl = document.querySelector('a-scene');
var cameraEl = sceneEl.querySelector('a-camera');
var camParentEl = sceneEl.querySelector('#camParent');
var cursorEl = sceneEl.querySelector('a-cursor');

var map = {};

var adjList = {};
var adjMatrix = {};
var nodes = [];

var node1 = "";
var node2 = "";

var biDir = true;
var xyz = true;
var grnd = false;
var edgeAni = false;

function setAttributes(el, attrs){
    for (var key in attrs){
        el.setAttribute(key,attrs[key]);
    }
}



