leftShoulderX = 0;
leftShoulderY = 0;

rightShoulderX = 0;
rightShoulderY = 0;

function preload() {
wing1 = loadImage("https://i.postimg.cc/hGgn01mr/wing-1.png");
wing2 = loadImage("https://i.postimg.cc/ZRsh4kM7/wing-2.png")

}
function setup() {
    canvas = createCanvas(300,300);
    canvas.position(500, 210);
    video = createCapture(VIDEO);
    video.size(300,300);
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

        leftShoulderX = results[0].pose.leftShoulder.x;
        leftShoulderY = results[0].pose.leftShoulder.y;
        console.log("Left shoulder X = " + results[0].pose.leftShoulder.x);
        console.log("Left shoulder Y = " + results[0].pose.leftShoulder.y);

        rightShoulderX = results[0].pose.rightShoulder.x;
        rightShoulderY = results[0].pose.rightShoulder.y;
        console.log("Right shoulder X = " + results[0].pose.rightShoulder.x);
        console.log("Right shoulder Y = " + results[0].pose.rightshoulder.y);
    }
}



function draw() {
    image(video, 0,0,300,300);
    image(wing1, leftShoulderX, leftShoulderY, 700, 800);
    image(wing2 , rightShoulderX, rightShoulderY, 700, 800);
    
}
function take_snapshot() {
    save('Pony Filter by RainbowZap.png');
}