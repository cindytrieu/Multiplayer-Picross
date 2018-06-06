class Square {
	constructor(x, y, width, fillColor, secondaryColor, strokeColor) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.fillColor = fillColor;
		this.secondaryColor = secondaryColor;
		this.strokeColor = strokeColor;
		this.toggle = false;
	}

	update() {

	}

	draw() {
		this.setColor();
		g.strokeStyle = this.strokeColor;
		g.fillRect(this.x, this.y, this.width, this.width);
		g.strokeRect(this.x, this.y, this.width, this.width);
	}

	setColor() {
		if (this.toggle) {
			g.fillStyle = this.secondaryColor;
		} else {
			g.fillStyle = this.fillColor;
		} // if/else
	} // end of setColor method
} // end of Square class