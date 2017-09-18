fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 5));
if (answer === 1) {
    fill(97, 135, 145);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    text("Why would", 176, 200);
    text("you do it?", 179, 229); 
}
else if (answer === 2) {
    fill(143, 96, 96);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    text("Have ", 176, 200);
    text("Fun", 200, 229); 
}
else if (answer === 3) {
    fill(186, 156, 24);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    text("No", 195, 231);
}
else if (answer === 4) {
    fill(153, 62, 181);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    text("Yes", 195, 231);
}
else if (answer === 5) {
    fill(27, 179, 60);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    text("Mavbe", 195, 231);
}
