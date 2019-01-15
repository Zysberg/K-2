 # K(onigsberg)-2
### A (re-build of the) 3D-Graph Drawing and Visualization Tool
###### Built with [**A**-Frame](https://aframe.io/), an open-source web framework for building VR experiences.

#### Introduction
Graphs are formally defined as a series of of objects that share relations. These objects are properly described as nodes, and the relationships depicting these nodes are called edges, or lines. Graphs are commonly used for information visualization, with extensive applications in cartography, linguistics, social network analysis, crime scene investigation analysis, neural networking, et cetera. The name of the project refers to the historical name for the present-day city of Kaliningrad, Russia. The city is known for the problem of the Seven Bridges of Königsberg. The problem was to find the path through the city that would cross each of the bridges once, and only once. In 1736, Leonhard Euler concluded that there is no correct answer to the problem. His analysis and ideas in his paper, as well as Alexandre-Theophile Vandermonde's paper on the knight problem asking if there a path that a knight in chess can visit all 64 squares of the board, were the early beginnings of graph theory and topology. 

###### 

Demo available [here](https://zysberg.github.io/Demos/K-2/index.html).

## Controls

Q - Warp to 'Near-Origin' (0,1,2)

W|&uarr;  /  S|&darr;   **---** Forward/Backward

A|&larr; / D|&rarr; **---** Left/Right

O **---** Reset Rotation

I/K **---** Rotate Up/Down 

J/L **---** Rotate Left/Right

\- **---** Enable Delete Mode

= **---**  Enable Draw Mode (hit again to draw node at the position of the camera).

### Constructing Edge X &rarr; Y
While in 'Draw Mode'...
1. Hover over X; it should become yellow, then hit \[. 
2. Repeat for Y, but hit \] instead.
- To clear any selection, aim the cursor away from any node and hit \[ or \].
###### _Think '\[' &rarr; '\]'_

### Deleting Node X or Edge E
While in 'Delete Mode'
- Hover over X; it should become red, then hit \\.
- Find the white cube corresponding to 'E', it should become red, then hit \\.

 ## Future Updates
- ~~Deleting specific edges~~
- ~~Animations depicting edge direction~~
- Name-tagging for each node*
- Self-Loops
- Implementing the following Algorithms
	- Depth-First & Breadth-First Traversal Animations
	- Shortest-Path Tree
	- Minimum-Spanning Tree
	- Node-Colouring ( & Edge-colouring ) Algorithms
	- Bipartite-Determining
- Bug Fixes

###### *Almost done
## Bugs
###### - Sometimes node stays highlighted after lifting cursor off node, just pan cursor back in the direction you entered moved the cursor onto the node to un-highlight it, rotate camera a bit, clear edge node selections, then try again.
## Goals of remaking Konigsberg
1. Better modularize code
2. Rewrite the graph data structure in preparation for implementing graph algorithms
3. Improve User-Interface and Controls (now it's keys-only!)

## Credits
[Eli Grey](https://github.com/eligrey/FileSaver.js/) *---* for FileSaver.js

[Andreas Plesch](https://github.com/andreasplesch/aframe-meshline-component) *---* aframe-meshline-component

[A-Frame Docs](https://github.com/aframevr/aframe/blob/master/docs/components/camera.md) *---* I slightly modified code on the docs to help rotate the camera.
