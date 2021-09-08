function preload() {
    monday_img = loadImage('monday.gif');
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
    image(monday_img, 50, 300, 200, 200);
}
function take_snapshot() {
    save('Monday Blues Selfie by Rainbowshine.png');
}
