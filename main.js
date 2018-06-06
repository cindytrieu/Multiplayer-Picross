
(function(){
	window.setInterval(mainLoop, 1000/30);
})();

function mainLoop(){
	g_input.preUpdate();

	update();

	g_input.postUpdate();

	draw();
}

function update(){
	g_board.update();
}

function draw(){
	// Clear screen
	g.fillStyle = 'black';
	g.fillRect(0, 0, canvas.width, canvas.height);

	

	g_board.draw();



	// Draw mouse cursor
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
}
