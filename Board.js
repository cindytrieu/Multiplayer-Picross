var g_board;

class Board {
	/*
		The constructor will initialize the board for each game
	*/
	constructor(size) {
		this.userSolution = [];
		this.solution = [];
		this.size = size;
		this.squares = [];

		this.margin = 100;
		this.startX = this.margin;
		this.endX = canvas.width - ( 2 * this.margin ) - this.margin;
		this.startY = this.margin;
		this.endY = canvas.height - this.margin;
		this.interval = ( this.endY - this.startY ) / this.size;

		for (var i = this.startX, m = 0; i < this.endX; i = i + this.interval, m++) {
			this.squares[m] =[];
			var squareRow = this.squares[m];
			for ( var j = this.startY, n = 0; j < this.endY; j = j + this.interval, n++) {
				squareRow[n] = new Square(i, j, this.interval, 'blue', 'red', 'gray');
			} // end of y for loop
		} // end of x for loop
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
		if (g_input.mousePressed) {
			var x = g_input.mouseX;
			var y = g_input.mouseY;

			var xIndex = Math.floor((x - this.margin) / this.interval);
			var yIndex = Math.floor((y - this.margin) / this.interval);

			if (xIndex >= 0 && xIndex < this.size) {
				if (yIndex >= 0 && yIndex < this.size) {
					var squareRow = this.squares[xIndex];
					var square = squareRow[yIndex];
					square.toggle = !square.toggle;
				} // if mouse is in y bounds of the board
			} // if mouse is in x bounds of the board
		} // if the mouse was pressed
	} // end of update method

	/*
		Draw the canvas
	*/
	draw() {
		for (var i = this.startX, m = 0; i < this.endX; i = i + this.interval, m++) {
			var squareRow = this.squares[m];
			for ( var j = this.startY, n = 0; j < this.endY; j = j + this.interval, n++) {
				var square = squareRow[n];
				square.draw();
				
				if (m != 0 && m % 5 == 0) {
					drawLine(g, i, j, i, j + this.interval, 2, 'white');
				} // end of if m is a multiple of 5

				if (n != 0 && n % 5 == 0) {
					drawLine(g, i, j, i + this.interval, j, 2, 'white');
				} // end of if n is a multiple of 5
			} // end of y for loop
		} // end of x for loop
	} // end of draw method
} // end of class Board

g_board = new Board(10);


