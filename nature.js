function preload() {
    nature_img = loadImage('necher.png');
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
    image(nature_img, 0, 300, 400,200);
}
function take_snapshot() {
    save('Nature Selfie by Rainbowshine.png');
}
