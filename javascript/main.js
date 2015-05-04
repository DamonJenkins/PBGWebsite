// JavaScript Document

//Function for all functions called on page load
function startUp(){
	checkCensor()
}

// Used to set a cookies value
function setCookie(cname, cvalue, exhours){
	var d = new Date();
	d.setTime(d.getTime() + (exhours*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

//Gets value of cookie
function getCookie(cname){
	var name = cname + "="
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return
c.substring(name.length,c.length);
	}
	return"";
}

//Checks censoring cookie

function checkCensor() {
    var censor = getCookie("Censoring");
    if (censor != "") {
       	document.getElementById("assholes").innerHTML = "Insensitive People"
		document.getElementById("censorb").innerHTML = "Censoring: On";
    }
}


//Animates the page title
function titleAnimation(){
	setTimeout(tsec1Animf(),10000);
	setTimeout(tsec2Anim(),2500);
	setTimeout(tsec3Anim(),3000);
	setTimeout(tsec4Anim(),3500);
}

//Changes "Assholes" to "Insensitive People" and back again

function censoring(){
	if (censorb.innerHTML == "Censoring: Off"){
	document.getElementById("assholes").innerHTML = "Insensitive People"
	document.getElementById("censorb").innerHTML = "Censoring: On"
	setCookie("Censoring", "On", 1)}
	
	else {
		document.getElementById("assholes").innerHTML = "Assholes"
	document.getElementById("censorb").innerHTML = "Censoring: Off"
	setCookie("Censoring", "Off", -1)
	}
}