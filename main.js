function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 70);
    circle(600, 450, 70);
    circle(50, 450, 70);
    circle(600, 50, 70);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}