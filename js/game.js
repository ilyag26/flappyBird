//set cvs options
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var gap = 95;

//bird possition
var x = 10;
var y = 150;
var grav = 1;

//create blocks
var pipe=[];
pipe[0]={
	x: cvs.width,
	y: 0
}

//set images
var bird = new Image();
var backg = new Image();
var frontg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = "img/bird.png";
backg.src = "img/bg.png";
frontg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

//If button press 
document.addEventListener("click",moveUp);

function moveUp(){
	y -= 20;
}

//get images
function draw(){
	ctx.drawImage(backg,0,0);
	for(var i=0; i<pipe.length; i++){
	ctx.drawImage(pipeUp,pipe[i].x,pipe[i].y);
	ctx.drawImage(pipeBottom,pipe[i].x,pipe[i].y
		+pipeUp.height + gap);

	pipe[i].x--;

	if(pipe[i].x == 125){
		pipe.push({
			x:cvs.width,
			y:Math.floor(Math.random()*
				pipeUp.height) -
			 pipeUp.height});
	}
	}


	ctx.drawImage(frontg,0,cvs.height - frontg.height);

	ctx.drawImage(bird,x,y);

	y += grav;
	requestAnimationFrame(draw);
}

pipeBottom.onload = draw;