function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function preload(){
    classifier = ml5.imageClassifier('DoodleNet', modelLoded);
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
    //confidence
    canvas.mouseReleased(classifyCanvas);
}

function modelLoded(){
    console.log("model is loaded")
}

function clearCanvas(){
    canvas.background("white");
}

function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{console.log(results);
        document.getElementById("sketchName").innerHTML = 'label:' + results[0].label;
        document.getElementById("sketchConfi").innerHTML = 'Confidence:' + results[0].confidence;}
    

}