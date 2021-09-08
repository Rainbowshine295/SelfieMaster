function preload() {

}

function setup() {
    canvas = createCanvas(300,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video , 0 , 0 , 300 ,500);
    stroke("#6a5acd");
    strokeWeight(30);
    noFill();
    rect(0,0,300,500);
    strokeWeight(15);
    stroke("#eee8aa");
    fill("#6a5acd");
    circle(10,10,50);
    strokeWeight(15);
    stroke("#eee8aa");
    fill("#6a5acd");
    circle(290,10,50);

    strokeWeight(15);
    stroke("#eee8aa");
    fill("#6a5acd");
    circle(10,490,50);
    strokeWeight(15);
    stroke("#eee8aa");
    fill("#6a5acd");
    circle(290,490,50);
}

function take_snapshot() {
    save('Frame selfie by Rainbowshine.png');
}