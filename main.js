Status = "";

function setup() {
    canvas = createCanvas(450, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 450)
    video.hide();
}

function draw() {
    image(video, 0, 0, 450, 450)
}

function start() {
    objectDetector = ml5.objectDetector('cocosd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects...";
}

function modelLoaded() {
    console.log('Cocosd IS WORKING');
    Status = true;
}