function preload() {

}
function setup() {
    canvas = createCanvas(300,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video , 0 , 0 , 300,500);
    tint("seagreen");
}

function take_snapshot() {
    save('Tint selfie by Rainbowshine.png');
}