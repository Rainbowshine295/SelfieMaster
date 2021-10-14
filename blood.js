function preload() {
    blood_img = loadImage('blood.png');
    blood_img2 = loadImage('blood 2.png');
}

function setup() {
    canvas = createCanvas(300,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

}

function draw() {
    image(video, 0,0,300,500);
    image(blood_img, -20, 0, 400, 100);
    image(blood_img2, 50, 400, 150, 55);
    image(blood_img2, 90, 200, 150, 55);
}
function take_snapshot() {
    save('Fake Blood Selfie by Rainbowshine.png');
}
