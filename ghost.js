function preload() {
bhoot = loadImage("ghost.png");
}

function setup() {
    canvas = createCanvas(300,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,500);
    video.hide();
}

function draw() {
    image(video, 0,0,300,500);
    image(bhoot, 100, 10, 200, 250);
    
}
function take_snapshot() {
    save('Ghost selfie by Rainbowshine.png');
}