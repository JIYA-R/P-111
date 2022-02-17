Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera=document.getElementById("Camera");

Webcam.attach( '#Camera' )

function snapshot() 
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier=ml5.imageClassfier('https://teachablemachine.withgoogle.com/models/CpqhtDRE-/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function Speak() {
    var synth=window.speechSynthesis;
    speak_data_1="The Prediction Is "+prediction_1;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}