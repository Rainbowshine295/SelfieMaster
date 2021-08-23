function preload() {
    flower_frame = loadImage('https://i.postimg.cc/dtLysPnb/flower-frame.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.position(500, 250);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

}

function draw() {
    image(video, 0,0,300,300);
    image(flower_frame, 0, 0, 300,300);
}
function take_snapshot() {
    save('Flower frame Selfie by RainbowZap.png');
}
