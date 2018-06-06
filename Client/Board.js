var g_board;

class Board {
	/*
		The constructor will initialize the board for each game
	*/
	constructor(size) {
		this.userSolution = [];
		this.solution = [];
		this.size = size;
	} // end of constructor

	/*
		The toggle method will toggle each square's color
	*/
	toggle() {

	} // end of toggle method

	/*
		Update the canvas every n seconds
	*/
	update() {

	} // end of update method

	/*
		Draw the canvas
	*/
	draw() {
		var margin = 100;
		var startX = margin * 2;
		var endX = canvas.width - ( 2 * margin );
		var startY = margin;
		var endY = canvas.height - margin;
		var xInterval = ( endX - startX ) / this.size;
		var yInterval = ( endY - startY ) / this.size;

		for (var i = startX, m = 0; i < endX; i = i + xInterval, m++) {
			for ( var j = startY, n = 0; j < endY; j = j + yInterval, n++) {
				g.fillStyle = 'blue';
				g.strokeStyle = 'gray';
				g.fillRect(i, j, xInterval, yInterval);
				g.strokeRect(i, j, xInterval, yInterval);

				if (m != 0 && m % 5 == 0) {
					drawLine(g, i, j, i, j + yInterval, 2, 'white');
				} // end of if m is a multiple of 5

				if (n != 0 && n % 5 == 0) {
					drawLine(g, i, j, i + xInterval, j, 2, 'white');
				} // end of if n is a multiple of 5
			} // end of y for loop
		} // end of x for loop
	} // end of draw method
} // end of class Board

g_board = new Board(10);