var isStarted = true;
var timerf = setInterval(timerFunction, 10);
clearInterval(timerf);
var milisecond = 00, second = 00, minute = 00, hour = 00;

function timerFunction(){
	if(milisecond < 99) 
		milisecond = milisecond + 1;
	else{
		milisecond = 0; 
		if (second < 59) 
			second = second + 1;
		else {
			second = 0; 
			minute = minute + 1;
			if (minute < 59)
				minute = minute + 1;
			else 
				minute = 0; hour = hour + 1;
		}
	}
	document.getElementById("time").innerHTML = ((hour<10)?"0"+hour:hour) + " : " + ((minute<10)?"0"+minute:minute) + " : " + ((second<10)?"0"+second:second) + " : " + ((milisecond<10)?"0"+milisecond:milisecond);
}
function Start(){
	if(isStarted){
		timerf = setInterval(timerFunction, 10);
		isStarted = false;
	}
	else{
		clearInterval(timerf);
		isStarted = true;
	}
}

function Reset(){
	milisecond = 00;
	second = 00;
	minute = 00;
	hour = 00;
	document.getElementById("time").innerHTML = "00 : 00 : 00 : 00";
	document.getElementById("savedTimes").innerHTML = "";
	clearInterval(timerf);
	isStarted = true;
}

function Save(){
	document.getElementById("savedTimes").innerHTML += document.getElementById("time").innerHTML + "<br>";
}