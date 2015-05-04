// JavaScript Document
var Perry = 0
Damon = 0
Rugby = 0
Bradley = 0
Alistair = 0
video = 0

function numCheck(){
	if (video == 0){
		
	}
}

function setCookie(cname, cvalue, exhours){
	var d = new Date();
	d.setTime(d.getTime() + (exhours * 60 * 60 * 1000));
	var expires = "expires"+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires;
}

function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(";");
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return
c.substring(name.length,c.length);
	}
	return"";	
}

function makeTrueP(){
	if (Perry == 0){
		Perry = 1;
		video = video + 1
		$("#firstButton").css({
			"border-color" : "#0CF",
			"border-width" : "1px"
		});
	}
	
	else if (Perry == 1){
		video = video - 1
		Perry = 0;
		$("#firstButton").css({
			"border-color" : "#942911",
			"border-width" : "1px"
		});
	}

	alert(video);
}

function makeTrueD(){
	if (Damon == 0){
		Damon = 20;
		video = video + 20
		$("#secondButton").css({
			"border-color" : "#0CF",
			"border-width" : "1px"
		});
	}
	
	else if (Damon == 20){
		video = video - 20
		Damon = 0;
		$("#secondButton").css({
			"border-color" : "#942911",
			"border-width" : "1px"
		});
	}

	alert(video);
}

function makeTrueR(){
	if (Rugby == 0){
		Rugby = 300;
		video = video + 300
		$("#thirdButton").css({
			"border-color" : "#0CF",
			"border-width" : "1px"
		});
	}
	
	else if (Rugby == 300){
		video = video - 300
		Rugby = 0;
		$("#thirdButton").css({
			"border-color" : "#942911",
			"border-width" : "1px"
		});
	}

	alert(video);
}
function makeTrueB(){
	if (Bradley == 0){
		Bradley = 4000;
		video = video + 4000
		$("#fourthButton").css({
			"border-color" : "#0CF",
			"border-width" : "1px"
		});
	}
	
	else if (Bradley == 4000){
		video = video - 4000
		Bradley = 0;
		$("#fourthButton").css({
			"border-color" : "#942911",
			"border-width" : "1px"
		});
	}

	alert(video);
}

function makeTrueA(){
	if (Alistair == 0){
		Alistair = 50000;
		video = video + 50000
		$("#fifthButton").css({
			"border-color" : "#0CF",
			"border-width" : "1px"
		});
	}
	
	else if (Alistair == 50000){
		video = video - 50000
		Alistair = 0;
		$("#fifthButton").css({
			"border-color" : "#942911",
			"border-width" : "1px"
		});
	}

	alert(video);
}