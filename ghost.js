rightshoulderX = "";
rightshoulderY = "";

leftshoulderX = "";
leftshoulderY = "";

scoreLeftShoulder = 0;
scoreRightShoulder = 0;

function preload() {
bhoot = loadImage("ghost.png");
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
        rightshoulderX = results[0].pose.rightShoulder.x;
        rightshoulderY = results[0].pose.rightShoulder.y;

        console.log("Right shoulder X = " + results[0].pose.rightShoulder.x);
        console.log("Right shoulder Y = " + results[0].pose.rightShoulder.y);

        scoreRightShoulder = results[0].pose.keypoints[6].score;
        console.log("score right shoulder = " + scoreRightShoulder);
        

        leftshoulderX = results[0].pose.leftshoulder.x;
        leftshoulderY = results[0].pose.leftshoulder.y;

        console.log("Left shoulder X = " + results[0].pose.leftshoulder.x);
        console.log("Left soulder y = " + results[0].pose.leftshoulder.y);

        scoreLeftShoulder = results[0].pose.keypoints[5].score;
        console.log("score left shoulder  = " + scoreLeftShoulder);
    }
}



function draw() {
    image(video, 0,0,300,500);
    if (scoreLeftShoulder > 0.2 && scoreLeftShoulder > 0.2) {
        if (leftshoulderX > 0 && rightshoulderX < 300) {
            image(bhoot, leftshoulderX, leftshoulderY, 200, 250);
        }
    }
    
}
function take_snapshot() {
    save('Ghost selfie by Rainbowshine.png');
}