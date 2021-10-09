function preload() {
    emoji1 = loadImage('https://i.postimg.cc/D0H8BwFM/beaming-face-with-smiling-eyes-1f601.png');
    emoji2 = loadImage('https://i.postimg.cc/nVDjhqk8/rolling-on-the-floor-laughing-1f923.png');
    emoji3 = loadImage('https://i.postimg.cc/ZnHh5fsF/upside-down-face-1f643.png');
    emoji4 = loadImage('https://i.postimg.cc/wT4S4RCv/smiling-face-with-heart-eyes-1f60d.png');
    emoji5 = loadImage('https://i.postimg.cc/7hWm905r/star-struck-1f929.png');
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
    image(emoji1, 0, 0, 50, 50);
    image(emoji2, 0, 50, 50, 50);
    image(emoji3, 0, 100, 50, 50);
    image(emoji4, 0, 150, 50, 50);
    image(emoji5, 0, 200, 50, 50);
    image(emoji1, 0, 250, 50, 50);
    image(emoji2, 0, 300, 50, 50);
    image(emoji3, 0, 350, 50, 50);
    image(emoji4, 0, 400, 50, 50);
    image(emoji5, 0, 450, 50, 50);

    image(emoji1, 250, 0, 50, 50);
    image(emoji2, 250, 50, 50, 50);
    image(emoji3, 250, 100, 50, 50);
    image(emoji4, 250, 150, 50, 50);
    image(emoji5, 250, 200, 50, 50);
    image(emoji1, 250, 250, 50, 50);
    image(emoji2, 250, 300, 50, 50);
    image(emoji3, 250, 350, 50, 50);
    image(emoji4, 250, 400, 50, 50);
    image(emoji5, 250, 450, 50, 50);

    image(emoji2, 50, 0, 50, 50);
    image(emoji3, 100, 0, 50, 50);
    image(emoji4, 150, 0, 50, 50);
    image(emoji5, 200, 0, 50, 50);

    image(emoji1, 50, 450, 50, 50);
    image(emoji2, 100, 450, 50, 50);
    image(emoji3, 150, 450, 50, 50);
    image(emoji4, 200, 450, 50, 50);
}
function take_snapshot() {
    save('Emoji Frame Selfie by Rainbowshine.png');
}
