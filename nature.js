function preload() {
    nature_img = loadImage('https://i.postimg.cc/q7Mskphp/necher.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

}

function draw() {
    image(video, 0,0,300,300);
    image(nature_img, 0, 40, 400,300);
}
function take_snapshot() {
    save('Nature Selfie by RainbowZap.png');
}
