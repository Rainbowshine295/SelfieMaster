leftEarX = 0;
rightEarY = 0;

function preload() {
ears = loadImage("rabbit ears.png");
}
function setup() {
    canvas = createCanvas(300,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded()  {
    console.log("poseNet initialized! :D");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftEarX = results[0].pose.leftEar.x;
        rightEarY = results[0].pose.rightEar.y;
        console.log("Left ear X = " + results[0].pose.leftEar.x);
        console.log("Right ear Y = " + results[0].pose.rightEar.y);
    }
}



function draw() {
    image(video, 0,0,300,500);
    image(ears, leftEarX, rightEarY, 150, 120);
    
}
function take_snapshot() {
    save('Rabbit Ears Selfie by Rainbowshine.png');
}