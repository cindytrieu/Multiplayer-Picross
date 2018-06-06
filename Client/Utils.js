
function fillRectCentered(g, x, y, w, h){
	g.fillRect(x - w/2, y - h/2, w, h);
}

/*
	Draws a line
	@param g: context
	@param x1: starting x
	@param y1: starting y
	@param x2: ending x
	@param y2: ending y
	@param w: width of line
	@param color: color of line
*/
function drawLine(g, x1, y1, x2, y2, w, color) {
	g.lineWidth = w;
	g.strokeStyle = color;
	g.beginPath();
	g.moveTo(x1, y1);
	g.lineTo(x2, y2);
	g.stroke();
} // end of drawLine