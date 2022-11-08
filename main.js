var SpeechRecognition = window.webkitSpeechRecognition;
var getId = document.getElementById

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    speak();

}
function speak(){
var synth = window.speechSynthesis;
var speak_data = document.getElementById("textbox").value;
var utter = new SpeechSynthesisUtterance(speak_data);
synth.speak(utter);
Webcam.attach(camera);

}

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});
camera = getId("camera");
