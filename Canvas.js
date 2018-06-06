var canvas;
var g;

(function(){
	canvas = document.createElement('canvas');
	g = canvas.getContext('2d');

	canvas.width = 800;
	canvas.height = 600;

	document.body.appendChild(canvas);
})();
