function preload() {
    friday_img = loadImage('friday.gif');
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
    image(friday_img, 50, 350, 200, 100);
}
function take_snapshot() {
    save('Friday Selfie by Rainbowshine.png');
}
