
var canvas;
var g;

(function(){
	canvas = document.createElement('canvas');
	g = canvas.getContext('2d');

	canvas.width = 800;
	canvas.height = 600;

	document.body.appendChild(canvas);

	window.setInterval(mainLoop, 1000/30);
})();

function mainLoop(){
	g_input.preUpdate();

	update();

	// Clear screen
	g.fillStyle = 'black';
	g.fillRect(0, 0, canvas.width, canvas.height);

	var x = g_input.mouseX;
	var y = g_input.mouseY;

	g.fillStyle = 'white';
	if(g_input.mouseDown){
		g.fillStyle = 'orange';
	}
	if(g_input.mousePressed){
		g.fillStyle = 'blue';
	}
	fillRectCentered(g, x, y, 10, 10);

	g_input.postUpdate();
}

function update(){

}

function draw(){

}
