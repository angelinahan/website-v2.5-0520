console.log("start.js imported!");
/*
	Because of Google Chrome autoplay policy, the user must
	interact with the page before a video can play
	The HTML file has a div for the user to click
*/
function init() {
	// Add an event listener to the play box
	// HTML DOM events: https://www.w3schools.com/jsref/dom_obj_event.asp 
	document.getElementById("playBox").addEventListener("click", start);
}

function start() {
	// Make the play box invisible
	document.getElementById("playBox").style.display = "none";
	// Show the video (hidden in CSS)
	document.getElementById("video").style.display = "block";
	document.getElementById("buttons").style.display = "block";
	// Play the video
	document.getElementById("video").play();
	document.getElementById("audio").play();
	//change the text
	document.getElementById("instructions").innerHTML = "Imagine yourself in a calm forest. <br>Find a comfortable position, and let yourself relax. <br> Tune into your sense of touch, and notice where your body is connected to your surroundings. Soften any tension you've been holding. <br><br> When you're ready, choose what to do next.";

}

function beach(){
	document.getElementById("instructions").innerHTML = "Let the waves wash over you as you focus on your breathing. <br> Notice where your breath originates, as you breathe in and out. Keep breathing for a while, paying attention to the source of that breath. <br><br> When you're ready, choose where to go next.";
	document.getElementById("video").src = "video/bigWaves.mp4";
	document.getElementById("audio").src = "";
 	document.getElementById("buttons").innerHTML = '<button id="option1" onclick="waterfall()">visit a waterfall</button><button id="option2" onclick="clouds()">look at the clouds</button>';
}

function rain(){
	document.getElementById("instructions").innerHTML = "Let the rain wash over you as you focus on your breathing. <br> Notice where your breath originates, as you breathe in and out. Keep breathing for a while, paying attention to the source of that breath. <br><br> When you're ready, choose where to go next.";
	document.getElementById("video").src = "video/rainPuddle.mp4";
	document.getElementById("audio").src = "audio/rain.mp3";
	document.getElementById("buttons").innerHTML = '<button id="option1" onclick="meadow()">lie in a meadow</button><button id="option2" onclick="dew()">stay in the rain</button>';
}

function waterfall(){
	document.getElementById("instructions").innerHTML = "As you continue to breathe, you may notice your mind wandering to other thoughts. <br> This is okay. Gently redirect your awareness back to your breathing. <br> We'll stay like this for some time, noticing our breath and letting our bodies relax. <br><br> When you're ready, choose where to go next.";
	document.getElementById("video").src = "video/waterfall.mp4";
	document.getElementById("audio").src = "audio/waterfall.mp3";
	document.getElementById("buttons").innerHTML = '<button id="option1" onclick="galaxy()">go stargazing</button><button id="option2" onclick="sunset()">watch the sunset</button>';
}

function clouds(){
	document.getElementById("instructions").innerHTML = "As you continue to breathe, you may notice your mind wandering to other thoughts. <br> This is okay. Gently redirect your awareness back to your breathing. <br> We'll stay like this for some time, noticing our breath and letting our bodies relax. <br><br> When you're ready, choose where to go next.";
	document.getElementById("video").src = "video/clouds.mp4";
	document.getElementById("audio").src = "audio/sunnyDay.mp3";
	document.getElementById("buttons").innerHTML = '<button id="option1" onclick="galaxy()">go stargazing</button><button id="option2" onclick="sunset()">watch the sunset</button>';
}

function dew(){
	document.getElementById("instructions").innerHTML = "As you continue to breathe, you may notice your mind wandering to other thoughts. <br> This is okay. Gently redirect your awareness back to your breathing. <br> We'll stay like this for some time, noticing our breath and letting our bodies relax. <br><br> When you're ready, choose where to go next.";
	document.getElementById("video").src = "video/dewLeaves.mp4";
	document.getElementById("buttons").innerHTML = '<button id="option1" onclick="galaxy()">go stargazing</button><button id="option2" onclick="sunset()">watch the sunset</button>';
}

function meadow(){
	document.getElementById("instructions").innerHTML = "As you continue to breathe, you may notice your mind wandering to other thoughts. <br> This is okay. Gently redirect your awareness back to your breathing. <br> We'll stay like this for some time, noticing our breath and letting our bodies relax. <br><br> When you're ready, choose where to go next.";
	document.getElementById("video").src = "video/meadow.mp4";
	document.getElementById("audio").src = "audio/hummingbird.mp3";
	document.getElementById("buttons").innerHTML = '<button id="option1" onclick="galaxy()">go stargazing</button><button id="option2" onclick="sunset()">watch the sunset</button>';
}

function galaxy(){
	document.getElementById("instructions").innerHTML = "Before you return to what you were doing before this, take one more moment of self-awareness. <br> You are made of so much strength and energy. <br> Tell yourself, thank you, for taking this small break today. <br><br> When you're ready, click the scene to exit.";
	document.getElementById("video").src = "video/stargazing.mp4";
	document.getElementById("audio").src = "audio/cricketsAtNight.mp3";
	document.getElementById("video").addEventListener("click", end);
	document.getElementById("buttons").style.display = "none";
}

function sunset(){
	document.getElementById("instructions").innerHTML = "Before you return to what you were doing before this, take one more moment of self-awareness. <br> You are made of so much strength and energy. <br> Tell yourself, thank you, for taking this small break today. <br><br> When you're ready, click the scene to exit.";
	document.getElementById("video").src = "video/sunsetReverse.mp4";
	document.getElementById("audio").src = "audio/hummingbird.mp3";
	document.getElementById("video").addEventListener("click", end);
	document.getElementById("buttons").style.display = "none";
}

function end(){
	document.getElementById("video").style.display = "none";
	document.getElementById("audio").src = "";
	document.getElementById("playBox").style.display = "block";
	document.getElementById("playBox").removeEventListener("click", start);
	document.getElementById("instructions").innerHTML = "have a great day!"
}

//run init function after window loads
window.onload = init();

