function preload() {

}
function setup() {
    canvas = createCanvas(300,300);
    canvas.position(500, 300);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = " ";
}

function draw() {
    image(video , 0 , 0 , 300,300);
    tint(tint_color);
}

function take_snapshot() {
    save('Tint selfie by RainbowZap.png');
}
function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}