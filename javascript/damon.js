// JavaScript Document

function damoncensoring() {
	var censoring = getCookie("Censoring")
	if (censoring!= "Off"){
		document.getElementById("subtitle").innerHTML = "Damon is the jack-of-all-trades of the group, able to do everything, <br> but definitely not good at anything. Like an underpaid maid."
	}
}