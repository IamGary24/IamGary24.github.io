
function drawYellow() {
	
	var canvas = document.getElementById("swirl_yellow");
	var context = canvas.getContext("2d");
	var color = "#FFFF00";
	
	context.strokeStyle=color;
	context.beginPath();
	context.arc(95,50,40,0,2*Math.PI);
	context.stroke();
	}
	
drawYellow();