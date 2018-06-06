
var g_input;

class Input {
	constructor(){
		this.mouseX = 0;
		this.mouseY = 0;
		this.mouseDown = false;    // True if the mouse is currently held down.
		this.mousePressed = false; // True during the frame the mouse was pressed.

		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mouseup", onMouseUp);
	}

	preUpdate(){

	}

	postUpdate(){
		this.mousePressed = false;		
	}

	updateLoc(e){
		this.mouseX = e.clientX;
		this.mouseY = e.clientY;
	}

	onMouseMove(e){
		this.updateLoc(e);
	}

	onMouseDown(e){
		this.updateLoc(e);
		this.mouseDown = true;
		this.mousePressed = true;
	}

	onMouseUp(e){
		this.updateLoc(e);
		this.mouseDown = false;
	}
}

function onMouseMove(e){
	g_input.onMouseMove(e);
}

function onMouseDown(e){
	g_input.onMouseDown(e);
}

function onMouseUp(e){
	g_input.onMouseUp(e);
}

g_input = new Input();
