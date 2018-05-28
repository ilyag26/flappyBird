    //set cvs options
    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");
     var cvs2 = document.getElementById("canvas2");
    var ctx2 = cvs2.getContext("2d");
    var gap = 95;
    
    //bird possition
    var x = 10;
    var y = 150;
    var grav = 1.5;
    
    	
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
    
    
    //audio files
    var flyA = new Audio();
    var scoreA = new Audio();
    
    flyA.src = "audio/fly.mp3";
    scoreA.src = "audio/score.mp3";
    
    //If button press 
    document.addEventListener("keydown",moveUp);
    
    function moveUp(){
    	y -= 25;
    	flyA.play();
    }
    var score = 0;
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
    			 pipeUp.height
    			});
    	       }
    if(x+bird.width >= pipe[i].x 
    	&& x<=pipe[i].x+pipeUp.width
    	&&(y<=pipe[i].y + pipeUp.height 
    	|| y + bird.height >= pipe[i].y +pipeUp.height +gap)|| y + bird.height >= cvs.height - frontg.height){
    	location.reload();
    }
    if (pipe[i].x == 5) {
    
    	score++;
    	scoreA.play();
    }
    	}
    	
    	ctx.drawImage(frontg,0,cvs.height - frontg.height);
      
    	ctx.drawImage(bird,x,y);
    
    	y += grav;
    	requestAnimationFrame(draw);
    }
    pipeBottom.onload = draw;
     		  ctx2.fillStyle= "black";
        ctx2.font = "24px Verdana";
        ctx2.fillText("Score: "+score,25,20); 	

