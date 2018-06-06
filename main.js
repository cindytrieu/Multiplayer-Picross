
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
	// Clear screen
	g.fillStyle = 'black';
	g.fillRect(0, 0, canvas.width, canvas.height);

	var x = Math.sin(Date.now() * .005) * 100 + canvas.width/2;
	g.fillStyle = 'white';
	g.fillRect(x - 25, canvas.height/2 - 25, 50, 50);
}
