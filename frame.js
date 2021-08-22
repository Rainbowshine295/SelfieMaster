function preload() {

}

function setup() {
    canvas = createCanvas(300,300);
    canvas.position(500, 300);
    video = createCapture(VIDEO);
    video.hide();
    frame_colour = " ";
    circle_colour = " ";
}

function draw() {
    image(video , 0 , 0 , 300,300);
    stroke(frame_colour);
    strokeWeight(30);
    noFill();
    rect(0,0,300,300);
    strokeWeight(15);
    stroke(circle_colour);
    fill(frame_colour);
    circle(10,10,50);
    strokeWeight(15);
    stroke(circle_colour);
    fill(frame_colour);
    circle(290,10,50);

    strokeWeight(15);
    stroke(circle_colour);
    fill(frame_colour);
    circle(10,290,50);
    strokeWeight(15);
    stroke(circle_colour);
    fill(frame_colour);
    circle(290,290,50);
}

function take_snapshot() {
    save('Frame selfie by RainbowZap.png');
}

function frame() {
    frame_colour = document.getElementById("frame_name").value;
}
function frame_circle() {
    circle_colour = document.getElementById("frame_circle").value;
}