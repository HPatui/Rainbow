let snake;
let rez=15;
let w;
let h;
let button;
let canv;

function setup() {
	frameRate(15);
	button = select('#restart');
  canv =	createCanvas(600, 400);
	resetSketch();
	button.position(0,450);
	button.mousePressed(resetSketch);

	}

function	resetSketch(){
		snake = new Snake();
		w = floor(width/rez);
		h = floor(height/rez);

		foodLocation();
	}

	function foodLocation(){
		let x = floor(random(w));
		let y = floor(random(h));
		food = createVector(x,y);

	}



function keyPressed(){
  switch(keyCode){
    case LEFT_ARROW:
    snake.setDir(-1,0);
		break;
		case RIGHT_ARROW:
	  snake.setDir(1,0);
		break;
		case  UP_ARROW:
		snake.setDir(0,-1);
		break;
		case  DOWN_ARROW:
	  snake.setDir(0,1);
		break;
	}
  }

function draw() {
	scale(rez);
	background(192);
if(snake.eat(food)){
foodLocation();}
snake.update();
snake.show();
noStroke();
fill(255,0,0);
rect(food.x,food.y,1,1);
if(snake.endGame()){
	background(255);
	setup();
}

}
