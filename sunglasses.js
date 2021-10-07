function preload() {
emoji = loadImage("sunglasses.png");
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
    image(emoji, 120, 320, 175, 175);
}
function take_snapshot() {
    save('Sunglasses Selfie by Rainbowshine.png');
}