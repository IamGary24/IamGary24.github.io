
function drawYellow() {
	
	var canvas = document.getElementById("swirl_yellow");
	var context = canvas.getContext("2d");
	var color = "#FFFF00";
	var theta = 2*Math.PI/60;
	var increment = theta;
	
	context.strokeStyle=color;
	
	while(theta < 10*Math.PI) {
		x = 50 + theta * Math.cos(theta);
		y = 150 + theta * Math.sin(theta);
		context.lineTo(x, y);
		theta += increment;
	}
	context.stroke();

	}
	
drawYellow();