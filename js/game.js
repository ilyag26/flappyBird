var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var gap = 95;

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

function draw(){
	ctx.drawImage(backg,0,0);
	
	ctx.drawImage(pipeUp,100,0);
	ctx.drawImage(pipeBottom,100,0+pipeUp.height + gap);

	ctx.drawImage(frontg,0,cvs.height - frontg.height);

	ctx.drawImage(bird,10,150);
}

pipeBottom.onload = draw;