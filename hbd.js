function preload() {
    bday_img = loadImage('hbd.png');
    confetti_img = loadImage('ball.gif');
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
    image(bday_img, 50, 300, 200, 200);
    image(confetti_img, 50, 0, 200, 200);
}
function take_snapshot() {
    save('Happy Birthday To Me Selfie by Rainbowshine.png');
}
